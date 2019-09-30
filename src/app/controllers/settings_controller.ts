import {Grid2D} from '../view_models/grid2d';
import {IGrid} from '../view_models/i_grid';
import {Coordinates} from '../models/coordinates';
import {NeighboursSelectDelegate} from '../delegates/neighbours_select_delegate';
import {GenerationDelays} from '../values/generation_delays';
import {IGame} from '../games/classes/i_game';

/** Controller which handles all the changes made in settings. */
export class SettingsController {
  grid: IGrid;
  isRunning = false;
  isDrawing = false;
  prevX: number;
  prevY: number;
  drawingState: number;
  delayBetweenGenerations = GenerationDelays.delays[6];
  /**
   * Creates the controller.
   * @param canvas - The canvas wrapper to be passed to VM.
   * @param density - distribution of randomly placed living cells
   */
  constructor(canvas: ICanvas, density = 0.6) {
    this.grid = new Grid2D(canvas);
  }

  /**
   * Creates a new generation of cells.
   */
  step(): void {
    if (!this.isRunning && this.grid.game !== undefined) {
      this.grid.nextGeneration();
    }
  }

  render(): void {
    this.grid.renderAll();
  }
  /**
   * Creates a new generation every 60 seconds until stopped.
   */
  async start(): Promise<void> {
    if (this.isRunning || this.grid.game === undefined) {
      return;
    }
    this.isRunning = true;
    while (this.isRunning) {
      this.grid.nextGeneration();
      await new Promise( resolve => setTimeout(resolve, this.delayBetweenGenerations) );
    }
  }

  /**
   * Stops autocreation of new generations.
   */
  pause(): void {
    this.isRunning = false;
  }

  startDrawing(eventData, left, middle, right, scale, originX, originY, draw) {
    this.isDrawing = true;
    this.prevX = eventData.offsetX;
    this.prevY = eventData.offsetY;
    /** Set cell's state to dead if the right mouse button is pressed, otherwise set it to alive (left and middle buttons). */
    this.drawingState = eventData.which === 1 ? left : eventData.which === 2 ? middle : right;
    if(draw){
      this.setCellState(new Coordinates((eventData.offsetX - originX) / scale, (eventData.offsetY - originY) / scale), this.drawingState);
    }
  }

  moveDrawing(eventData, scale, originX, originY) {
    let fromX = this.prevX;
    let fromY = this.prevY;
    let toX = eventData.offsetX;
    let toY = eventData.offsetY;
    if (this.isDrawing) {
      if (this.prevX !== undefined && this.prevY !== undefined) {
        // Prevents the 0/0 case
        if (fromX === toX && fromY === toY) { return; }
        // Prevents the x/0 case
        if (Math.abs(fromX - toX) > Math.abs(fromY - toY)) {
          // Draw in the right direction
          if (fromX > toX) {
            [fromX, toX] = [toX, fromX];
            [fromY, toY] = [toY, fromY];
          }
          const slope = (toY - fromY) / (toX - fromX);
          for (; fromX <= toX; fromX++, fromY += slope) {
            this.setCellState(new Coordinates((fromX - originX) / scale, (Math.round(fromY) - originY) / scale), this.drawingState);
          }
        } else {
          if (fromY > toY) {
            [fromX, toX] = [toX, fromX];
            [fromY, toY] = [toY, fromY];
          }
          const slope = (toX - fromX) / (toY - fromY);
          for (; fromY <= toY; fromY++, fromX += slope) {
            this.setCellState(new Coordinates((Math.round(fromX) - originX) / scale, (fromY - originY) / scale), this.drawingState);
          }
        }
      }

      this.setCellState(new Coordinates((eventData.offsetX - originX) / scale, (eventData.offsetY - originY) / scale), this.drawingState);
      this.prevX = eventData.offsetX;
      this.prevY = eventData.offsetY;
    }
  }

  move($event: MouseEvent) {
    if(!this.isDrawing){
      return [undefined, undefined];
    }
    let nextX = $event.offsetX;
    let nextY = $event.offsetY;
    let diffX = nextX - this.prevX;
    let diffY = nextY - this.prevY;
    this.prevX = nextX;
    this.prevY = nextY;
    return [diffX, diffY];
  }

  stopDrawing() {
    this.isDrawing = false;
    this.prevX = undefined;
    this.prevY = undefined;
  }

  /**
   * Tells the grid to change a cell's state.
   * @param rawCoordinates - Coordinates of the cell times the cell size.
   * @param state - The state to be set.
   */
  setCellState(rawCoordinates: Coordinates, state: number) {
    this.grid.setCellState(rawCoordinates, state);
  }

  /**
   * Sets the given color scheme.
   * @param scheme - The color scheme to be set.
   */
  changeColorScheme(scheme: Array<string>) {
    this.grid.setColorScheme(scheme);
  }

  changeNeighbourhood(selection: NeighboursSelectDelegate) {
    this.grid.addNeighbours(selection);
  }

  /**
   * Changes the is toroidal property.
   */
  changeIsToroidal() {
    this.grid.changeIsToroidal();
  }

  toggleHasBorder() {
    this.grid.toggleHasBorder();
  }

  assignGrid(type: string, params?: any) {
    this.grid.assignGrid(type, params);
  }

  assignGame(config: any, type: IGame, generatePattern: boolean = true) {
    return this.grid.assignGame(config, type, generatePattern);
  }
  resize(rows: number, cols: number) {
    this.grid.resize(rows, cols);
  }

  changeStatesCount(states: number) {
    this.grid.changeStatesCount(states);
  }
}

