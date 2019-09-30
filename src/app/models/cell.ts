import {Coordinates} from './coordinates';
import {ChangeStateFormula} from '../delegates/change_state_formula';

/** Class representing a cell model. */
export class Cell {
  /** Coordinates of the cell in the cell grid. */
  coordinates: Coordinates;
  /** Current state of the cell. */
  state: number;
  /** State of the cell in the next generation. */
  newState: number = null;
  /** Function describing what the value of the cell will be in the next generation. */
  changeStateFormula: ChangeStateFormula;
  /** References to the cells that are connected. */
  neighbours: Cell[];

  /**
   * Creates a cell.
   * @param coordinates - Coordinates of the cell in the cell grid.
   * @param initialState - Initial state of the cell. 0 if nothing passed.
   */
  constructor(coordinates: Coordinates, initialState = 0) {
    this.coordinates = coordinates;
    this.state = initialState;
  }

  /**
   * Computes the newState according to the change state formula.
   * Whenever creating new generation, this is called first on all cells, followed by calls of refreshState.
   */
  computeChange(): void {
    this.newState = this.changeStateFormula(this);
  }

  /**
   * The value is set to newValue. The newValue is set to null. Returns whether the value changed.
   * Throws EvalError if the newState is null.
   */
  refreshState(): boolean {
    if (this.newState == null) {
      throw EvalError('Member newState is null.');
    }

    const output = this.state !== this.newState;
    this.state = this.newState;
    this.newState = null;
    return output;
  }
}
