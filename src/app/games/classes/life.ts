import {Generations} from './generations';
import {Config} from '../config/config';

/** Family of Life Cellular Automata. Link: http://psoup.math.wisc.edu/mcell/rullex_life.html */
export class Life extends Generations {
  constructor(
    config: Config
  ) {
    config.states = 2;
    // Unlike in Generations, a Life cell can only be alive or dead.
    super(config);
  }
}
