import {ChangeStateFormula} from '../../delegates/change_state_formula';
import {Cell} from '../../models/cell';
import {IGame} from './i_game';
import {NeighboursSelectDelegate} from '../../delegates/neighbours_select_delegate';
import {GridGenerator} from '../../models/grid_generator';
import {Config} from '../config/config';

export class CyclicGH implements IGame {
  readonly dimensions = 2;
  neighbourhood: NeighboursSelectDelegate;
  states: number;
  threshold: number;
  generatingFunction = GridGenerator.randomGridUniform;
  generatingArgument: number;

  constructor(config: Config) {
    Object.assign(this, config);
    this.generatingArgument = this.states;
  }
  changeState: ChangeStateFormula = (cell: Cell): number => {
    if (cell.state > 0) {
      return (cell.state + 1) % this.states;
    }
    let count = 0;
    for (const neighbour of cell.neighbours) {
      if (neighbour.state === 1) {
        count++;
      }
    }
    return count >= this.threshold ? 1 : 0;
  };
}
