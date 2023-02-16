var parameters, results, results2;

import { Linq } from '../index.js';

parameters = [
  { ID: 5, Rate: 0.0, Name: '正一郎' },
  { ID: 13, Rate: 0.1, Name: '清次郎' },
  { ID: 25, Rate: 0.0, Name: '誠三郎' },
  { ID: 42, Rate: 0.3, Name: '征史郎' }
];

results = new Linq(parameters)
  .Select(value => {
    return { ID: value.ID, Name: value.Name };
  })
  .ToArray();

results2 = new Linq(parameters).Select(value => value.Name).ToArray();

console.log('results:', results, results2);
