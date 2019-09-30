import {Cell} from '../models/cell';

/** Function which takes a cell and returns a number. Used to evaluate the change of a cell. */
export type ChangeStateFormula = (cell: Cell) => number;
