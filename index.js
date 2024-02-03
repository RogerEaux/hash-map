import createHashMap from './hashMap.js';

const hashMap = createHashMap();

hashMap.set('Ruby', 'July');
hashMap.set('Peridot', 'August');
console.log('Ruby', hashMap.get('Ruby'));
console.log('Sapphire', hashMap.get('Sapphire'));
console.log('Ruby', hashMap.has('Ruby'));
console.log('Sapphire', hashMap.has('Sapphire'));
