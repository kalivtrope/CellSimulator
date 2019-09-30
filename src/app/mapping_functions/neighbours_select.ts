import {Coordinates} from '../models/coordinates';
import {NeighboursSelectDelegate} from '../delegates/neighbours_select_delegate';

/** Class containing static members of type NeighboursSelectDelegate. */
export class NeighboursSelect {
  /** Even diagonal. */
  static  mooreNeighbourhood(r: number = 1): NeighboursSelectDelegate {
    // tslint:disable-next-line:new-parens
    return new class implements NeighboursSelectDelegate {
      radius: number = r;
      id = 'm';

      apply(center: Coordinates): Coordinates[] {
        const result: Coordinates[] = Array<Coordinates>();
        for (let x = -r; x <= r; x++) {
          for (let y = -r; y <= r; y++) {
            if (x !== 0 || y !== 0) {
              result.push(new Coordinates(center.x + x, center.y + y));
            }
          }
        }
        return result;
      }
    };
  }

  static vonNeumannNeighbourhood(r: number = 1): NeighboursSelectDelegate {
    // tslint:disable-next-line:new-parens
    return new class implements NeighboursSelectDelegate {
      radius: number = r;
      id = 'vn';

      apply(center: Coordinates): Coordinates[] {
        const result: Coordinates[] = Array<Coordinates>();
        for (let x = 0; x <= r; x++) {
          for (let y = x - r; y <= r - x; y++) {
            if (x !== 0 || y !== 0) {
              result.push(new Coordinates(center.x + x, center.y + y));
            }
            if (x !== 0) {
              result.push(new Coordinates(center.x - x, center.y + y));
            }
          }
        }
        return result;
      }
    };
  }
}
