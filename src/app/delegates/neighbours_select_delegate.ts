import {Coordinates} from '../models/coordinates';

/** Function which takes coordinates and returns a list of coordinates. Used to select neighbours of coordinates. */
export interface NeighboursSelectDelegate {
  radius: number;
  id: string;
  apply(center: Coordinates): Coordinates[];
}
