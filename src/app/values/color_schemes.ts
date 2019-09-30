import {Colors} from './colors';

/** Collection of color schemes. */
export class ColorScheme {
  /** Maps dead cells to a black color and living cells to yellow. */
  static twoColorScheme(foreground: string = Colors.yellow, background: string = Colors.black): Array<string> {
    return [background, foreground];
  }

  static threeColorScheme(foreground: string = Colors.blue, second: string = Colors.white,  background: string = Colors.black):
    Array<string> {
    return [background, foreground, second];
  }

  static fourColorScheme(foreground: string = Colors.yellow, second: string = Colors.orange, third: string = Colors.red,
                         background: string = Colors.black):
    Array<string> {
    return [background, foreground, second, third];
  }
}
