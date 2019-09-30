import {NeighboursSelect} from '../../mapping_functions/neighbours_select';
import {GridGenerator} from '../../models/grid_generator';

export const LargerThanLifeConfig = [
  {
    name: 'Bugs',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(5),
    states: 2,
    middleCellCounted: true,
    sRangeMin: 34,
    sRangeMax: 58,
    bRangeMin: 34,
    bRangeMax: 45,
    colorScheme: ['black', 'orange'],
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Flies',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(3),
    states: 2,
    middleCellCounted: true,
    sRangeMin: 13,
    sRangeMax: 26,
    bRangeMin: 6,
    bRangeMax: 6,
    colorScheme: ['black', 'green'],
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Majority',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(4),
    states: 2,
    middleCellCounted: true,
    sRangeMin: 41,
    sRangeMax: 81,
    bRangeMin: 41,
    bRangeMax: 80,
    colorScheme: ['black', 'white'],
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.51
  },
  {
    name: 'PseudoMaze',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(3),
    states: 5,
    sRangeMin: 5,
    sRangeMax: 9,
    bRangeMin: 6,
    bRangeMax: 6,
    colorScheme: ['black', 'white', 'orange', 'darkorange', '#654321'],
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.05
  },
  {
    name: 'Sensitive Bugs',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(4),
    states: 2,
    middleCellCounted: true,
    sRangeMin: 23,
    sRangeMax: 38,
    bRangeMin: 23,
    bRangeMax: 30,
    colorScheme: ['black', 'blue'],
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Sleepy Bugs',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(2),
    states: 2,
    middleCellCounted: true,
    sRangeMin: 9,
    sRangeMax: 15,
    bRangeMin: 9,
    bRangeMax: 15,
    colorScheme: ['black', 'purple'],
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.7
  },
  {
    name: 'Waffle',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(7),
    states: 2,
    middleCellCounted: true,
    sRangeMin: 100,
    sRangeMax: 200,
    bRangeMin: 75,
    bRangeMax: 170,
    colorScheme: ['black', 'orange'],
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  }
];
