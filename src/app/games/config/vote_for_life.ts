import {GridGenerator} from '../../models/grid_generator';
import {NeighboursSelect} from '../../mapping_functions/neighbours_select';

export const VoteForLifeConfig = [
  {
    name: 'Fredkin',
    aliveStates: [1, 3, 5, 7, 9],
    colorScheme: ['black', 'pink'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.singleStateGrid,
    generatingArgument: 1
  },
  {
    name: 'Feux',
    aliveStates: [1, 3, 5, 8],
    colorScheme: ['black', 'purple'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.singleStateGrid,
    generatingArgument: 0
  },
  {
    name: 'Vote',
    aliveStates: [5, 6, 7, 8, 9],
    colorScheme: ['black', 'red'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Vote 4/5',
    aliveStates: [4, 6, 7, 8, 9],
    colorScheme: ['black', 'blue'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  }
];
