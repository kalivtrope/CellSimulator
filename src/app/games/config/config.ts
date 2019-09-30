import {NeighboursSelectDelegate} from '../../delegates/neighbours_select_delegate';

export class Config {
  [x: string]: any;
  states: number;
  neighbourhood: NeighboursSelectDelegate;
  name: string;
  description: string;
  colorScheme: string[];
}
