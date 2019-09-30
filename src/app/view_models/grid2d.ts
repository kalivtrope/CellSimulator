import {Cell} from '../models/cell';
import {Coordinates} from '../models/coordinates';
import {ChangeStateFormula} from '../delegates/change_state_formula';
import {ModifyCellDelegate} from '../delegates/modify_cell_delegate';
import {IGrid} from './i_grid';
import {NeighboursSelectDelegate} from '../delegates/neighbours_select_delegate';
import {GridGenerator} from '../models/grid_generator';
import {Config} from '../games/config/config';
import {IGame} from '../games/classes/i_game';

/** ViewModel representing 2D grid of cells. */
export class Grid2D implements IGrid {
  grid: Cell[][] = Array<Array<Cell>>();
  states = 0;
  canvas: ICanvas;
  colorScheme = Array<string>();
  isToroidal = false;
  hasBorder = false;
  lastNeighboursSelection: NeighboursSelectDelegate;
  game: IGame;
  formula: ChangeStateFormula;
  /**
   * Creates 2D cell grid from 2D value array.
   * The first index is x (column), the second is y (row).
   * @param automaton - The canvas object to which callbacks are applied.
   */
  constructor(automaton: ICanvas) {
    this.canvas = automaton;
    for (let i = 0; i < automaton.cols; i++) {
      this.grid.push(new Array<Cell>());
      for (let j = 0; j < automaton.rows; j++) {
        this.grid[i].push(new Cell(new Coordinates(i, j), 0));
      }
    }
    this.renderAll();
  }
  /**
   * Adds neighbours to every cell using given selection function.
   * @param selection - The function used to selected neighbours for a cell.
   */
  addNeighbours(selection: NeighboursSelectDelegate): void {
    this.lastNeighboursSelection = selection;
    this.iterateThroughCells(cell => {
      cell.neighbours = Array<Cell>();
      const neighboursCoordinates: Coordinates[] = selection.apply(cell.coordinates);
      for (const coordinates of neighboursCoordinates) {
        let coos = coordinates;
        if (this.isToroidal) {
          coos = new Coordinates((coos.x + this.grid.length) % this.grid.length, (coos.y + this.grid[0].length) % this.grid[0].length);
        }
        const neighbour = this.getCell(coos);
        if (neighbour != null) {
          cell.neighbours.push(neighbour);
        }
      }
    });
    this.renderAll();
  }

  /**
   * Assigns given formula to every cell in the grid.
   * @param formula - The change state formula to be assigned.
   */
  assignFormula(formula: ChangeStateFormula): void {
    this.formula = formula;
    this.iterateThroughCells(cell => cell.changeStateFormula = formula);
    this.renderAll();
  }

  /**
   * Creates a new cell generation and calls back.
   */
  nextGeneration(computeChange = true): void {
    // Computes change for every cell.
    if (computeChange) {
      this.iterateThroughCells(cell => cell.computeChange());
    }

    // Refreshes the cells and call back to the view to apply changes.
    this.iterateThroughCells(cell => {
      if (cell.refreshState()) {
        this.renderCell(cell);
      }
    });
  }
  /**
   * Iterates through cells and applies to them given function.
   * @param action - The delegate which action should be applied to all cells.
   */
  iterateThroughCells(action: ModifyCellDelegate): void {
    for (const line of this.grid) {
      for (const cell of line) {
        action(cell);
      }
    }
  }

  /**
   * Renders all the cells in the grid.
   */
  renderAll(): void {
    if(this.hasBorder) {
      this.canvas.fillGrid();
    }
    this.iterateThroughCells(cell => this.renderCell(cell));
  }

  /**
   * Tells the canvas to rerender a particular cell.
   * @param cell - The cell to be rendered.
   */
  renderCell(cell: Cell): void {
    this.canvas.renderCell(cell.coordinates.x, cell.coordinates.y, this.colorScheme[cell.state], this.hasBorder);
  }

  /**
   * Returns cell of given coordinates from grid or null if the coordinates are nonsensical.
   * @param coordinates - The coordinates of desired cell.
   */
  getCell(coordinates: Coordinates): Cell {
    // There's no such a cell.
    if (coordinates.x < 0 || coordinates.x >= this.grid.length ||
        coordinates.y < 0 || (this.grid.length > 0 && coordinates.y >= this.grid[0].length)) {
      return null;
    }
    return this.grid[coordinates.x][coordinates.y];
  }

  /**
   * Sets a cell's state, and re-renders it, if the state is different from previous.
   * @param rawCoordinates - Coordinates of the cell times cell size.
   * @param state - The state to be set.
   */
  setCellState(rawCoordinates: Coordinates, state: number): void {
    rawCoordinates.x = Math.floor(rawCoordinates.x / this.canvas.cellSize);
    rawCoordinates.y = Math.floor(rawCoordinates.y / this.canvas.cellSize);
    const cell = this.getCell(rawCoordinates);
    if (cell != null) {
      cell.newState = state;
      if (cell.refreshState()) {
        this.renderCell(cell);
      }
    }
  }

  /**
   * Sets the given color scheme and renders all cells.
   * @param scheme - The color scheme to be set.
   * @param redraw - Whether or not to redraw the screen.
   */
  setColorScheme(scheme: Array<string>, redraw?: boolean) {
    this.colorScheme = scheme;
    this.renderAll();
  }

  /**
   * Changes the isToroidal property.
   */
  changeIsToroidal(): void {
    this.isToroidal = !this.isToroidal;
    this.addNeighbours(this.lastNeighboursSelection);
  }

  /**
   * Changes the hasBorder property.
   */
  toggleHasBorder(): void {
    this.hasBorder = !this.hasBorder;
    this.renderAll();
  }

  assignGame(config: Config, type: IGame, generatePattern: boolean): IGame {
    // @ts-ignore
    this.game = new (type)(config);
    this.setColorScheme(this.game.colorScheme);
    this.addNeighbours(this.game.neighbourhood);
    this.assignFormula(this.game.changeState);
    this.states = this.game.states;
    if (this.game.generatingFunction !== undefined && generatePattern) {
      const states = this.game.generatingFunction(this.game.generatingArgument, this.canvas.cols, this.canvas.rows);
      this.assignStates(states);
      this.nextGeneration(false);
    }
    return this.game;
  }

  assignGrid(type: string, params: any): void {
    let states = null;
    switch (type) {
      case 'ssg':
        states = GridGenerator.singleStateGrid(params, this.canvas.cols, this.canvas.rows);
        break;
      case 'rndd':
        states = GridGenerator.randomGridDensity(params, this.canvas.cols, this.canvas.rows);
        break;
      case 'rndu':
        states = GridGenerator.randomGridUniform(this.states, this.canvas.cols, this.canvas.rows);
        break;
    }
    this.assignStates(states);
    this.nextGeneration(false);
  }

  assignStates(states: number[][]): void {
    for (let i = 0; i < states.length; i++) {
      for (let j = 0; j < states[i].length; j++) {
        this.grid[i][j].newState = states[i][j];
      }
    }
  }

  resize(rows: number, cols: number): void {
    this.grid.length = cols;
    for (let i = 0; i < cols; i++) {
      if (this.grid[i] === undefined) {
        this.grid[i] = Array<Cell>();
      }
      this.grid[i].length = rows;
      for(let j = 0; j < rows; j++) {
        if (this.grid[i][j] === undefined) {
          this.grid[i][j] = new Cell(new Coordinates(i, j));
          this.grid[i][j].changeStateFormula = this.formula;
        }
      }
    }
    if (this.lastNeighboursSelection !== undefined) {
      this.addNeighbours(this.lastNeighboursSelection);
    }
  }

  changeStatesCount(states: number) {
    this.game.states = states;
    const original = this.colorScheme.length;
    for (let i = original; i < states; i++) {
      this.colorScheme[i] = this.colorScheme[original - 1];
    }
  }
}
