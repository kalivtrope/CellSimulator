/** Class containing color representation strings. */
export class Colors {
  /** White color. */
  static readonly white: string = '#FFFFFF';
  /** Yellow color. */
  static readonly yellow: string = '#FFFF00';
  /** Black color. */
  static readonly black: string = '#000000';
  /** Orange color. */
  static readonly orange: string = '#FFA500';
  /** Green color. */
  static readonly green: string = '#00FF00';
  /** Cyan color. */
  static readonly cyan: string = '#00FFFF';
  /** Blue color. */
  static readonly blue: string = '#1E90FF';
  /** Red color. */
  static readonly red: string = '#FF0000';
  /** Pink color. */
  static readonly pink: string = '#FF1493';
  /** Purple color. */
  static readonly purple: string = '#800080';
  /** Dark green color. */
  static readonly darkGreen: string = '#103f31';
  /** Grey color. */
  static  readonly grey: string = '#828282';

  /** returns color string */
  static hsl(hue: number, saturation: number, luminosity: number) {
    return 'hsl( ' + hue + ', ' + saturation + '%, ' + luminosity  + '%)';
  }
}
