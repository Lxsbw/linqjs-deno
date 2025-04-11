let ageSum, ageSumByNum, ageDivByNum, ageDivByNum10, parameters, numbers, numbers10;

import { Linq } from '../index.js';

parameters = [
  { Age: 52, Name: '正一郎' },
  { Age: 28, Name: '清次郎' },
  { Age: 20, Name: '誠三郎' },
  { Age: 18, Name: '征史郎' }
];

numbers = [
  { Age: 0, Name: '正一郎' },
  { Age: 0.3, Name: '清次郎' },
  { Age: 0.5, Name: '誠三郎' },
  { Age: 0.8, Name: '征史郎' }
];

numbers10 = [
  { Age: 0, Name: '正一郎' },
  { Age: 0.6, Name: '清次郎' },
  { Age: 0.09, Name: '誠三郎' },
  { Age: 0, Name: '征史郎' },
  { Age: 0, Name: '征史郎' },
  { Age: 0, Name: '征史郎' },
  { Age: 0, Name: '征史郎' },
  { Age: 0, Name: '征史郎' },
  { Age: 0, Name: '征史郎' },
  { Age: 0, Name: '征史郎' },
];

ageSum = new Linq(parameters).sum(x => x.Age);
ageSumByNum = new Linq(numbers).sum(x => x.Age);
ageDivByNum = new Linq(numbers).average(x => x.Age);
ageDivByNum10 = new Linq(numbers10).average(x => x.Age);

console.log('ageSum:', ageSum);
console.log('ageSumByNum:', ageSumByNum);
console.log('ageDivByNum:', ageDivByNum);
console.log('ageDivByNum10:', ageDivByNum10);
