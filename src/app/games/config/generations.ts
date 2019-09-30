import {GridGenerator} from '../../models/grid_generator';
import {NeighboursSelect} from '../../mapping_functions/neighbours_select';

export const GenerationsConfig = [
  {
    name: 'BelZhab',
    survivalCounts: [2, 3, 6, 7],
    birthCounts: [3, 4, 5, 7],
    states: 5,
    colorScheme: ['black', 'white', 'pink', 'purple', 'darkpurple'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.88
  },
  {
    name: 'Brain 6',
    survivalCounts: [6],
    birthCounts: [2, 4, 6],
    states: 3,
    colorScheme: ['black', 'red', 'pink'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Brian\'s Brain',
    survivalCounts: [],
    birthCounts: [2],
    states: 3,
    colorScheme: ['black', 'white', 'blue'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.48
  },
  {
    name: 'Faders',
    survivalCounts: [2],
    birthCounts: [2],
    states: 25,
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Fireworks',
    survivalCounts: [2],
    birthCounts: [1, 3],
    states: 21,
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Glissergy',
    survivalCounts: [0, 3, 5, 6, 7, 8],
    birthCounts: [2, 4, 5, 6, 7, 8],
    states: 5,
    colorScheme: ['black', 'yellow', 'orange', 'red', 'green'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Meteor Guns',
    survivalCounts: [0, 1, 2, 4, 5, 6, 7, 8],
    birthCounts: [3],
    states: 8,
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.singleStateGrid, // the initial seed should be a meteor though
    generatingArgument: 0
  },
  {
    name: 'OrthoGo',
    survivalCounts: [3],
    birthCounts: [2],
    states: 4,
    colorScheme: ['black', 'yellow', 'orange', 'red'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.1
  },
  {
    name: 'SediMental',
    survivalCounts: [4, 5, 6, 7, 8],
    birthCounts: [2, 5, 6, 7, 8],
    states: 4,
    colorScheme: ['black', 'pink', 'purple', 'darkpurple'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.35
  },
  {
    name: 'SoftFreeze',
    survivalCounts: [1, 3, 4, 5, 8],
    birthCounts: [3, 8],
    states: 6,
    colorScheme: ['black', 'white', 'lightblue', 'blue', 'darkblue'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.8
  },
  {
    name: 'Spirals',
    survivalCounts: [2],
    birthCounts: [2, 3, 4],
    states: 5,
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  },
  {
    name: 'Xtasy',
    survivalCounts: [1, 4, 5, 6],
    birthCounts: [2, 3, 5, 6],
    states: 16,
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred'],
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    generatingFunction: GridGenerator.randomGridDensity,
    generatingArgument: 0.5
  }
];
