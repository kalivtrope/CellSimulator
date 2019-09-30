import {IGame} from './i_game';
import {ChangeStateFormula} from '../../delegates/change_state_formula';
import {Cell} from '../../models/cell';
import {NeighboursSelectDelegate} from '../../delegates/neighbours_select_delegate';
import {Config} from '../config/config';
import {GridGenerator} from '../../models/grid_generator';

/** Family of Cyclic Cellular Automata. Link: http://psoup.math.wisc.edu/mcell/rullex_cycl.html */
export class Cyclic implements IGame {
  /** Number of dimensions of the canvas. */
  readonly dimensions = 2;
  /** Definition of type and range of the neighbourhood. */
  neighbourhood: NeighboursSelectDelegate;
  /** Total number of states. */
  states: number;
  /** Minimum number of neighbours having the next color needed for a cell to advance to the next state. */
  threshold: number;
  /** The grid filling function. */
  generatingFunction = GridGenerator.randomGridUniform;
  /** Argument for the generating function. */
  generatingArgument: number;
  constructor(config: Config) {
    Object.assign(this, config);
    this.generatingArgument = this.states;
  }
  changeState: ChangeStateFormula = (cell: Cell): number => {
    const nextState = (cell.state + 1) % this.states;
    let count = 0;
    for (const neighbour of cell.neighbours) {
      if (neighbour.state === nextState) {
        count++;
      }
    }
    if (count >= this.threshold) {
      return nextState;
    }
    return cell.state;
  }
}
