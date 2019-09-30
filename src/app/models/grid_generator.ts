export class GridGenerator {
  static mapGrid(mappingFunction: any, width: number, height: number): number[][] {
    return Array.from(Array(width), () => Array.from(Array(height), mappingFunction));
  }
  static singleStateGrid(state: number, width: number, height: number): number[][] {
    return GridGenerator.mapGrid(() => state, width, height);
  }
  static randomGridDensity(density: number, width: number, height: number): number[][] {
    return GridGenerator.mapGrid(() => Math.random() > density ? 0 : 1, width, height);
  }
  static randomGridUniform(states: number, width: number, height: number): number[][] {
    return GridGenerator.mapGrid(() => Math.floor(Math.random() * states), width, height);
  }
  static gridFromString(rulestring: string, width: number, height: number, rowOffset: number = 0, colOffset: number = 0): number[][] {
    const states = GridGenerator.singleStateGrid(0, width, height);
    let col = 0;
    let row = 0;
    let count = 0;
    for (const command of rulestring) {
      if (command >= '0' && command <= '9') {
        count = count * 10 + (command.charCodeAt(0) - 48);
      } else if (command === '$') {
        col = 0;
        row++;
      } else if (command === '!') {
        break;
      } else {
        if (count === 0) {
          count = 1;
        }
        while (count > 0) {
          let state = 0;
          if (command === 'o') {
            state = 1;
          } else if (command === 'b') {
            state = 0;
          } else if (command >= 'A' && command <= 'Z') {
            state = command.charCodeAt(0) - 65;
          }
          states[col + colOffset][row + rowOffset] = state;
          col++;
          count--;
        }
      }
    }
    return states;
  }
}
