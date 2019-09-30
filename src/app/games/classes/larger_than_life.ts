import {IGame} from './i_game';
import {ChangeStateFormula} from '../../delegates/change_state_formula';
import {Cell} from '../../models/cell';
import {NeighboursSelectDelegate} from '../../delegates/neighbours_select_delegate';
import {Config} from '../config/config';

/** Family Larger Than Life Cellular Automata. Link: http://psoup.math.wisc.edu/mcell/rullex_lgtl.html */
export class LargerThanLife implements IGame {
  readonly dimensions: number = 2;
  /** Type and range of the neighbourhood. */
  neighbourhood: NeighboursSelectDelegate;
  /** Number of states. */
  states: number;
  /** Specifies if the middle cell should be included when counting alive neighbours. */
  middleCellCounted: boolean;
  /** Minimum number of alive neighbours needed for a cell to survive. */
  sRangeMin: number;
  /** Maximum number of alive neighbours needed for a cell to survive. */
  sRangeMax: number;
  /** Minimum number of alive neighbours needed for a cell to be born. */
  bRangeMin: number;
  /** Maximum number of alive neighbours needed for a cell to be born. */
  bRangeMax: number;

  constructor(config: Config) {
    Object.assign(this, config);
  }

  changeState: ChangeStateFormula = (cell: Cell): number => {
    let count = 0;
    /** Count the living neighbours. */
    for (const neighbour of cell.neighbours) {
      if (neighbour.state === 1) {
        count++;
      }
    }
    if (this.middleCellCounted && cell.state === 1) {
      count++;
    }
    if (cell.state === 0) {
      /** The cell is dead. */
      if (this.bRangeMin <= count && this.bRangeMax >= count) {
        /** But comes to live yet again. */
        return 1;
      } else {
        /** And nobody can help it. */
        return 0;
      }
    } else if (cell.state === 1) {
      /** The cell is alive. */
      if (this.sRangeMin <= count && this.sRangeMax >= count) {
        /** And its friends want her to be alive. */
        return 1;
      } else {
        /** But its friends don't care about it and let it die */
        return (cell.state + 1) % this.states;
      }
    } else {
      /** The cell is already dying. */
      return (cell.state + 1) % this.states;
    }
  }
}
