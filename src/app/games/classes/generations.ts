import {WeightedLife} from './weighted_life';
import {Config} from '../config/config';

/** Family of Generations Cellular Automata. Link: http://psoup.math.wisc.edu/mcell/rullex_gene.html */
export class Generations extends WeightedLife {
  constructor(
    config: Config
  ) {
    config.neighbourWeights = Array<number>(9).fill(1);
    // don't count the middle cell
    config.neighbourWeights[8] = 0;
    super(config);
  }
}
