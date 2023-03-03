var data, result1, result2;

import { Linq } from '../index.js';

data = [
  { id: 1, name: 'one', category: 'fruits', countries: ['lxsbw', 'xliecz'] },
  { id: 1, name: 'one', category: 'fruits', countries: ['Italy', 'Austria'] },
  { id: 2, name: 'two', category: 'vegetables', countries: ['Italy', 'Germany'] },
  { id: 3, name: 'three', category: 'vegetables', countries: ['Germany'] },
  { id: 4, name: 'four', category: 'fruits', countries: ['Japan'] },
];

// 去重
result1 = new Linq(data).distinctBy(x => x.category).toArray();
result2 = new Linq(data)
  .distinctBy(el => {
    return { id: el.id, category: el.category };
  })
  .toArray();

console.log('result:', result1);
console.log('result:', result2);
