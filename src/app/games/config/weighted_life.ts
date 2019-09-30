import {GridGenerator} from '../../models/grid_generator';
import {NeighboursSelect} from '../../mapping_functions/neighbours_select';

export const WeightedLifeConfig = [
  {
    name: 'Cyclones',
    neighbourWeights: [1, 1, 0, 1, 1, 0, 1, 1, 0],
    states: 5,
    survivalCounts: [2, 4, 5],
    birthCounts: [2, 3, 4, 5],
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.81
  },
  {
    name: 'Dragon',
    neighbourWeights: [5, 1, 5, 1, 1, 5, 1, 5, 0],
    states: 2,
    survivalCounts: [1, 2, 7, 8, 12, 15, 18, 20],
    birthCounts: [7, 11, 12, 13, 20],
    colorScheme: ['black', 'red'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.6
  },
  {
    name: 'Linguini',
    neighbourWeights: [9, 1, 9, 1, 1, 9, 1, 9, 0],
    states: 2,
    survivalCounts: [2, 3, 4, 9, 10, 11, 19, 20],
    birthCounts: [11, 18],
    colorScheme: ['black', 'yellow'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'MazeMakers',
    neighbourWeights: [4, 4, 1, 4, 4, 1, 4, 1, 0],
    states: 2,
    survivalCounts: [2, 3, 6, 7, 8, 9, 10, 12, 13],
    birthCounts: [5],
    colorScheme: ['black', 'green'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Navaho',
    neighbourWeights: [4, 5, 4, 1, 1, 4, 5, 4, 7],
    states: 12,
    survivalCounts: [8, 9, 11],
    birthCounts: [2, 5],
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Nocturne',
    neighbourWeights: [1, 1, 0, 1, 1, 0, 1, 1, 0],
    survivalCounts: [1, 6],
    birthCounts: [2, 3, 4],
    states: 4,
    colorScheme: ['black', 'orange', 'pink', 'purple'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.15
  },
  {
    name: 'Parity',
    neighbourWeights: [0, 1, 0, 1, 1, 0, 1, 0, 1],
    survivalCounts: [1, 3, 5],
    birthCounts: [1, 3, 5],
    states: 2,
    colorScheme: ['black', 'white'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.singleStateGrid,
    generatingArgument: 0
  },
  {
    name: 'Pictures',
    neighbourWeights: [0, 1, 0, 1, 1, 0, 1, 0, 0],
    survivalCounts: [1, 2, 3],
    birthCounts: [2, 3, 4],
    states: 9,
    colorScheme: ['black', 'yellow', 'orange', 'red', 'brown'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.08
  },
  {
    name: 'Stream',
    neighbourWeights: [0, 1, 0, 1, 4, 0, 4, 1, 0],
    survivalCounts: [1, 3, 4, 7, 8, 9, 10, 11],
    birthCounts: [5, 7, 8, 10, 11],
    states: 2,
    colorScheme: ['black', 'pink'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Upstream',
    neighbourWeights: [1, 4, 1, 3, 3, 0, 4, 0, 0],
    survivalCounts: [4, 6, 9, 10],
    birthCounts: [4, 7],
    states: 10,
    colorScheme: ['black', 'yellow', 'orange', 'red', 'brown', 'green'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Vineyard',
    neighbourWeights: [1, 4, 0, 4, 4, 1, 4, 0, 0],
    survivalCounts: [2, 6, 8, 9, 10, 12, 13],
    birthCounts: [5],
    states: 2,
    colorScheme: ['white', 'green'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Worms',
    neighbourWeights: [1, 1, 0, 1, 1, 0, 1, 1, 0],
    survivalCounts: [2],
    birthCounts: [2],
    states: 3,
    colorScheme: ['black', 'white', 'blue'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  }
];
