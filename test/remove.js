var numbers;

import { Linq } from '../index.js';

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

new Linq(numbers).remove(6);

console.log(numbers);

console.log(numbers.length);
