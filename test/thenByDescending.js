var orderByID, persons, persons2, persons3, thenByAge, thenByName;

import { Linq } from '../index.js';

persons = [
  { ID: 0, Age: 30, Name: 'A' },
  { ID: 1, Age: 25, Name: 'B' },
  { ID: 2, Age: 2, Name: 'G' },
  { ID: 2, Age: 18, Name: 'C' },
  { ID: 1, Age: 30, Name: 'D' },
  { ID: 1, Age: 25, Name: 'E' },
  { ID: 2, Age: 15, Name: 'F' }
];

orderByID = new Linq(persons).orderByDescending(x => x.ID).toArray();

thenByAge = new Linq(persons)
  .orderByDescending(x => x.ID)
  .thenBy(x => x.Age)
  .toArray();

thenByName = new Linq(persons)
  .orderByDescending(x => x.ID)
  .thenBy(x => x.Age)
  .thenByDescending(x => x.Name)
  .toArray();

console.log('orderByID:', orderByID);
console.log('thenByAge:', thenByAge);
console.log('thenByName:', thenByName);
console.log('persons:', persons);

const intArray = [1, 5, 8, 12, 15, 16];
console.log('number:', new Linq(intArray).orderByDescending(x => x).toArray());
console.log('number:', intArray);
