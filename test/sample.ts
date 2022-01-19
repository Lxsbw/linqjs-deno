import { Linq } from '../index.js';

const texts = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const rst = new Linq(texts).Skip(4).ToArray(); // => [ "Thu", "Fri", "Sat" ]

console.log('rst:', rst);
