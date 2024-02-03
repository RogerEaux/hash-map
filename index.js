import createHashMap from './hashMap.js';

const hashMap = createHashMap();

console.log('Length', hashMap.length());
hashMap.set('Ruby', 'July');
console.log('Set Ruby: July');
hashMap.set('Peridot', 'August');
console.log('Set Peridot: August');
console.log('Length', hashMap.length());
console.log('Get Ruby:', hashMap.get('Ruby'));
console.log('Get Sapphire:', hashMap.get('Sapphire'));
console.log('Has Ruby', hashMap.has('Ruby'));
console.log('Has Sapphire', hashMap.has('Sapphire'));
console.log('Remove Peridot', hashMap.remove('Peridot'));
console.log('Get Peridot:', hashMap.get('Peridot'));
console.log('Remove Sapphire', hashMap.remove('Sapphire'));
console.log('Clear Hashmap');
hashMap.clear();
console.log('Get Ruby:', hashMap.get('Ruby'));
console.log('Length', hashMap.length());
