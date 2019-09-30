import {NeighboursSelectDelegate} from '../delegates/neighbours_select_delegate';
import {ChangeStateFormula} from '../delegates/change_state_formula';
import {Coordinates} from '../models/coordinates';
import {Config} from "../games/config/config";
import {IGame} from "../games/classes/i_game";

/** The interface for every grid VM. */
export interface IGrid {
  game: IGame;
  /**
   * Adds neighbours to every cell using given selection function.
   * @param selection - The function used to selected neighbours for a cell.
   */
  addNeighbours(selection: NeighboursSelectDelegate): void;

  /**
   * Assigns given formula to all cells.
   * @param formula - The formula to assign.
   */
  assignFormula(formula: ChangeStateFormula): void;

  /**
   * Generates next generation and calls back to rerender the view.
   */
  nextGeneration(computeChange?: boolean): void;

  /**
   * Sets a cell's state, and re-renders it, if the state is different from previous.
   * @param rawCoordinates - Coordinates of the cell times cell size.
   * @param state - The state to be set.
   */
  setCellState(rawCoordinates: Coordinates, state: number): void;

  /**
   * Sets the given color scheme.
   * @param scheme - The color scheme to be set.
   */
  setColorScheme(scheme: Array<string>): void;

  /**
   * Changes the isToroidal property.
   */
  changeIsToroidal(): void;

  assignGame(config: Config, type: IGame, generatePattern: boolean): IGame;

  /**
   * Changes the hasBorder property.
   */
  toggleHasBorder(): void;

  /**
   * Assigns new states to the grid.
   * @param states - States to be assigned.
   */
  assignStates(states: number[][]): void;

  assignGrid(type: string, params: any): void;

  renderAll(): void;

  resize(rows: number, cols: number): void;
  changeStatesCount(states: number): void;
}
