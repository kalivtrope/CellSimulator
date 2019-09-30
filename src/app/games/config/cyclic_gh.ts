import {NeighboursSelect} from '../../mapping_functions/neighbours_select';

export const CyclicGHConfig = [
  {
    name: 'Bugs alone',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    states: 5,
    threshold: 2,
    description: ',,,',
    colorScheme: ['black', 'lightgreen', 'green', 'darkgreen', '#654321']
  },
  {
    name: 'Bugs and Demons',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    states: 4,
    threshold: 2,
    description: '...',
    colorScheme: ['black', 'lightgreen', 'green', 'darkgreen']
  },
  {
    name: 'GH',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(3),
    states: 7,
    threshold: 5,
    description: 'A basic Greenberg-Hastings model.',
    colorScheme: ['black', 'white', 'yellow', 'lightorange', 'orange', 'red', 'darkred']
  },
  {
    name: 'Macaroni',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(2),
    states: 5,
    threshold: 4,
    description: 'HUÍÍÍÍ',
    colorScheme: ['black', 'yellow', 'lightorange', 'orange', 'darkorange']
  },
  {
    name: 'Multistrands',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(5),
    states: 6,
    threshold: 15,
    description: 'look at it go',
    colorScheme: ['black', 'lightblue', 'blue', 'darkblue', 'darkpurple']
  },
  {
    name: 'Percolation Mix',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(5),
    states: 8,
    threshold: 10,
    description: 'ÍÍÍÍÍÍÍÍÍÍÍÍÍ',
    colorScheme: ['black', 'yellow', 'lightorange', 'orange', 'darkorange', 'lightred', 'red', 'darkred']
  },
  {
    name: 'Weak spirals',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(4),
    states: 7,
    threshold: 9,
    description: 'they\'re still pretty cool tho',
    colorScheme: ['black', 'yellow', 'orange', 'darkorange', 'red', 'darkred', '#654321']
  }
];
