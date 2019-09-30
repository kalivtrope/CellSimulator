import {NeighboursSelect} from '../../mapping_functions/neighbours_select';

export const CyclicConfig = [
  {
    name: '313',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    states: 3,
    threshold: 3,
    description: 'KACHLIČKOOOOOOO',
    colorScheme: ['black', 'yellow', 'green'],
  },
  {
    name: 'Amoeba',
    neighbourhood: NeighboursSelect.vonNeumannNeighbourhood(3),
    states: 2,
    threshold: 10,
    description: 'what an awful pun',
    colorScheme: ['black', 'lightblue']
  },
  {
    name: 'Black vs White',
    neighbourhood: NeighboursSelect.vonNeumannNeighbourhood(5),
    states: 2,
    threshold: 23,
    description: 'HMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
    colorScheme: ['black', 'white']
  },
  {
    name: 'Boiling',
    neighbourhood: NeighboursSelect.vonNeumannNeighbourhood(2),
    states: 6,
    threshold: 2,
    description: 'better be careful not to burn yourself',
    colorScheme: ['black', 'yellow', 'orange', 'red', 'darkred', '#654321']
  },
  {
    name: 'Bootstrap',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(2),
    states: 3,
    threshold: 11,
    colorScheme: ['black', 'green', 'darkgreen']
  },
  {
    name: 'Cubism',
    neighbourhood: NeighboursSelect.vonNeumannNeighbourhood(2),
    states: 3,
    threshold: 5,
    description: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH',
    colorScheme: ['black', 'red', 'blue']
  },
  {
    name: 'Cyclic',
    neighbourhood: NeighboursSelect.vonNeumannNeighbourhood(1),
    states: 14,
    threshold: 1,
    description: 'oh boi that\'s a lot of colors',
    colorScheme: ['black', 'yellow', 'orange', 'darkorange']
  },
  {
    name: 'Fossil debris',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(2),
    states: 4,
    threshold: 9,
    description: 'this CA is pretty old',
    colorScheme: ['black', 'white', 'grey', 'darkgrey']
  },
  {
    name: 'LavaLamp',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(2),
    states: 3,
    threshold: 10,
    description: 'OLÉ',
    colorScheme: ['black', 'red', 'darkred']
  },
  {
    name: 'Maps',
    neighbourhood: NeighboursSelect.vonNeumannNeighbourhood(2),
    states: 5,
    threshold: 3,
    description: 'this place must exist somewhere',
    colorScheme: ['black', 'lightgreen', 'green', 'darkgreen', '#654321']
  },
  {
    name: 'Perfect Spirals',
    neighbourhood: NeighboursSelect.mooreNeighbourhood(1),
    states: 4,
    threshold: 3,
    description: 'weeeeeeeee',
    colorScheme: ['black', 'red', 'pink', 'purple']
  },
  {
    name: 'Stripes',
    neighbourhood: NeighboursSelect.vonNeumannNeighbourhood(2),
    states: 5,
    threshold: 4,
    colorScheme: ['black', 'yellow', 'orange', 'red', 'purple']
  }
];
