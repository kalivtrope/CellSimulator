import {WeightedGenerations} from './weighted_generations';
import {Config} from '../config/config';

/** Family of Weighted Life Cellular Automata. Link: http://psoup.math.wisc.edu/mcell/rullex_wlif.html */
export class WeightedLife extends WeightedGenerations {
  constructor(config: Config) {
    const stateWeights = Array<number>(10).fill(0);
    // only the living neighbours matter
    stateWeights[1] = 1;
    config.stateWeights = stateWeights;
    super(config);
  }
}
