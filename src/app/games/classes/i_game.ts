import {ChangeStateFormula} from '../../delegates/change_state_formula';
import {NeighboursSelectDelegate} from '../../delegates/neighbours_select_delegate';

/** General canvas interface. */
export interface IGame {
  [x: string]: any;
  /** Specifies type and range of the neighbourhood. */
  neighbourhood: NeighboursSelectDelegate;
  /** Count of states of a cell. */
  states: number;
  /** Calculates the next state of a cell. */
  changeState: ChangeStateFormula;
  /** Number of dimensions of the canvas. */
  readonly dimensions: number;
  /** Mapping state -> color. */
  colorScheme?: Array<string>;
  /** Grid filling function. */
  generatingFunction?: any;
  /** Argument for the filling function: number of states, density, or a configuration string. */
  generatingArgument?: any;
}
