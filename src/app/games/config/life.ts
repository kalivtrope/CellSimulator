
import {NeighboursSelect} from '../../mapping_functions/neighbours_select';
import {GridGenerator} from '../../models/grid_generator';

export const LifeConfig = [
  {
    name: '2x2',
    survivalCounts: [1, 2, 5],
    birthCounts: [3, 6],
    colorScheme: ['black', 'white'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.12
  },
  {
    name: '34 Life',
    survivalCounts: [3, 4],
    birthCounts: [3, 4],
    colorScheme: ['black', 'yellow'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.17
  },
  {
    name: 'Amoeba',
    survivalCounts: [1, 3, 5, 8],
    birthCounts: [3, 5, 7],
    colorScheme: ['black', 'orange'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.16
  },
  {
    name: 'Assimilation',
    survivalCounts: [4, 5, 6, 7],
    birthCounts: [3, 4, 5],
    colorScheme: ['black', 'red'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.17
  },
  {
    name: 'Coagulations',
    survivalCounts: [2, 3, 5, 6, 7, 8],
    birthCounts: [3, 7, 8],
    colorScheme: ['black', 'purple'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.08
  },
  {
    name: 'Conway\'s Life',
    survivalCounts: [2, 3],
    birthCounts: [3],
    colorScheme: ['black', 'blue'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Coral',
    survivalCounts: [4, 5, 6, 7, 8],
    birthCounts: [3],
    colorScheme: ['black', 'pink'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.34
  },
  {
    name: 'Day & Night',
    survivalCounts: [3, 4, 6, 7, 8],
    birthCounts: [3, 6, 7, 8],
    colorScheme: ['black', 'white'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'HighLife',
    survivalCounts: [2, 3],
    birthCounts: [3, 6],
    colorScheme: ['black', 'purple'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.27
  },
  {
    name: 'Long life',
    survivalCounts: [5],
    birthCounts: [3, 4, 5],
    colorScheme: ['black', 'yellow'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.25
  },
  {
    name: 'Maze',
    survivalCounts: [1, 2, 3, 4, 5],
    birthCounts: [3],
    colorScheme: ['black', 'white'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.05
  },
  {
    name: 'Walled Cities',
    survivalCounts: [2, 3, 4, 5],
    birthCounts: [4, 5, 6, 7, 8],
    colorScheme: ['black', 'grey'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.2
  }
];
