import {IGame} from './i_game';
import {ChangeStateFormula} from '../../delegates/change_state_formula';
import {Cell} from '../../models/cell';
import {NeighboursSelectDelegate} from '../../delegates/neighbours_select_delegate';
import {NeighboursSelect} from '../../mapping_functions/neighbours_select';
import {Config} from '../config/config';

/** Family of Weighted Generations Cellular Automata. Link: http://psoup.math.wisc.edu/mcell/rullex_wgen.html */
export class WeightedGenerations implements IGame {
  /** This CA is only 2D. */
  readonly dimensions = 2;
  private survivalCounts = Array<boolean>();
  private birthCounts = Array<boolean>();
   /** Specification of type and range of the neighbourhood. */
  neighbourhood: NeighboursSelectDelegate = NeighboursSelect.mooreNeighbourhood(1);
   /** Number of states of a cell. */
  states: number;
   /** Determines the weight for each state. */
  stateWeights: Array<number>;
  /** Specifies a weight for each neighbour. */
  neighbourWeights: Array<number>;
  constructor(config: Config) {
    Object.assign(this, config);
    const bc = Array<boolean>();
    const sc = Array<boolean>();
    for (const bCount of config.birthCounts) {
      bc[bCount] = true;
    }
    for (const sCount of config.survivalCounts) {
      sc[sCount] = true;
    }
    this.birthCounts = bc;
    this.survivalCounts = sc;
  }
  changeState: ChangeStateFormula = (cell: Cell): number => {
    let count = (this.neighbourWeights[8] * this.stateWeights[cell.state]) || 0;
    /** Assuming correct order of neighbours. */
    for (let i = 0; i < 8; i++) {
      if (cell.neighbours[i] !== undefined) {
      count += (this.stateWeights[cell.neighbours[i].state] * this.neighbourWeights[i]) || 0;
      }
    }
    if (cell.state === 0) {
      /** The cell is dead. */
      if (this.birthCounts[count]) {
        /** But its neighbours bring him to life! */
        return 1;
      } else {
        /** And nobody seems to care about it. */
        return 0;
      }
    } else if (cell.state === 1) {
      /** The cell is alive, yay! */
      if (this.survivalCounts[count]) {
        /** And it gets to live, YAY! */
        return 1;
      } else {
        /** But it dies. Well, that's life. */
        return (cell.state + 1) % this.states;
      }
    } else {
      /** The cell is dying (or just aging, depends on the point of view). */
      return (cell.state + 1) % this.states;
    }
  };
}
