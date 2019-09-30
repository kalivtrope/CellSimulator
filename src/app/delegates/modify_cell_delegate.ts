import {Cell} from '../models/cell';

/** Function which takes a cell and modifies it. */
export type ModifyCellDelegate = (state: Cell) => void;
