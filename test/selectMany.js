var parameters, results;
import { Linq } from '../index.js';

parameters = [
  { Name: '正一郎', Numbers: [1, 2, 3] },
  { Name: '清次郎', Numbers: [1, 3, 5] },
  { Name: '誠三郎', Numbers: [2, 4, 6] },
  { Name: '征史郎', Numbers: [9, 8, 7] }
];

results = new Linq(parameters).SelectMany(x => new Linq(x.Numbers)).ToArray();

console.log('results:', results);
console.log('results:', results.length);
