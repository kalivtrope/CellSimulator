import {GridGenerator} from '../../models/grid_generator';
import {NeighboursSelect} from '../../mapping_functions/neighbours_select';

export const WeightedGenerationsConfig = [
  {
    name: 'City lights',
    states: 8,
    stateWeights: [0, 2, 1, 2, 0, 3, 0, 0],
    neighbourWeights: [1, 1, 1, 1, 1, 1, 1, 1],
    survivalCounts: [4, 5, 6, 7, 8],
    birthCounts: [6],
    colorScheme: ['black', 'yellow', 'orange', 'red', 'purple', 'darkpurple', 'darkblue'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.02
  },
  {
    name: 'Noise',
    states: 7,
    stateWeights: [0, 1, 2, 1, 0, 0, 1],
    neighbourWeights: [2, 2, 1, 1, 2, 2, 1, 1],
    survivalCounts: [5, 6],
    birthCounts: [5],
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'OrthoGo in Vine A',
    states: 6,
    stateWeights: [0, 3, 1, 0, 1, 2],
    neighbourWeights: [1, 1, 1, 1, 1, 1, 1, 1],
    survivalCounts: [8, 9, 10, 11, 12, 13, 14, 15, 16],
    birthCounts: [6],
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred', '#654321'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'OrthoGo in Vine B',
    states: 6,
    stateWeights: [0, 3, 0, 1, 1, 2],
    neighbourWeights: [1, 1, 1, 1, 1, 1, 1, 1],
    survivalCounts: [8, 9, 10, 11, 12, 13, 14, 15, 16],
    birthCounts: [6],
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred', '#654321'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Space Club',
    states: 5,
    stateWeights: [0, 3, 2, 1, 0],
    neighbourWeights: [1, 1, 1, 1, 1, 1, 1, 1],
    survivalCounts: [8],
    birthCounts: [6, 9],
    colorScheme: ['black', 'yellow', 'orange', 'red', 'green'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.65
  },
  {
    name: 'Spicy tagliatelle',
    states: 5,
    stateWeights: [0, 2, 0, 0, 1],
    neighbourWeights: [1, 1, 1, 1, 1, 1, 1, 1],
    survivalCounts: [4, 5, 6, 7, 8],
    birthCounts: [3],
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.25
  }
];
