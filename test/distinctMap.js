var dataA, dataB, dataC, dataC_F, dataC_G, dataC_H;

import { Linq } from '../index.js';

dataA = [0, 1, 3, 3, 2];
dataB = [1.5, 1.5, 1.5, 1.5];
dataC = ['征史郎', '征四郎', '征史郎', '正史郎'];

var parameters = [
  { ID: 5, Rate: 0.0, Name: '正一郎' },
  { ID: 13, Rate: 0.1, Name: '清次郎' },
  { ID: 25, Rate: 0.0, Name: '正一郎' },
  { ID: 42, Rate: 0.3, Name: '征史郎' },
  { ID: 19, Rate: 0.1, Name: '清次郎' },
  { ID: 45, Rate: 0.3, Name: '征史郎' },
  { ID: 26, Rate: 0.0, Name: '正一郎' },
  { ID: 27, Rate: 0.0, Name: '正二郎' },
];

dataC_F = new Linq(parameters).DistinctMap(x => x.Name).ToArray();
dataC_G = new Linq(parameters)
  .DistinctMap(x => {
    return { Name: x.Name };
  })
  .ToArray();
dataC_H = new Linq(dataA).DistinctMap().ToArray();

console.log('dataC_F:', dataC_F);
console.log('dataC_G:', dataC_G);
console.log('dataC_H:', dataC_H);
