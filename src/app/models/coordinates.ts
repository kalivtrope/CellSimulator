/** Class representing coordinates. */
export class Coordinates {
  /** The x coordinate. */
  public x: number;
  /** The y coordinate. */
  public y: number;
  /** The z coordinate. */
  public z: number;

  /**
   * Creates coordinates.
   * @param x - the x value.
   * @param y - the y value.
   * @param z - the z value. Optional, 0 for 2D coordinates.
   */
  constructor(x: number, y: number, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}
