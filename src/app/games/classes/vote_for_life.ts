import {Life} from './life';
import {Config} from '../config/config';

/** Family of Vote For Life Cellular Automata. Link: http://psoup.math.wisc.edu/mcell/rullex_vote.html */
export class VoteForLife extends Life {
  aliveStates: Array<boolean>;
  constructor(config: Config) {
    const aliveStates = config.aliveStates;
    config.survivalCounts = Array<number>();
    config.birthCounts = Array<number>();
    const alive = Array<boolean>(10).fill(false);
    for (const i of aliveStates) {
      if (i > 0) {
        config.survivalCounts.push(i - 1);
      }
      if (i < 9) {
        config.birthCounts.push(i);
      }
      alive[i] = true;
    }
    super(config);
    this.aliveStates = alive;
  }
}
