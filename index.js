import createHashMap from './hashMap.js';
import createHashSet from './hashSet.js';

const hashMap = createHashMap();

console.log('Length', hashMap.length());
hashMap.set('Ruby', 'July');
console.log('Set Ruby: July');
hashMap.set('Peridot', 'August');
console.log('Set Peridot: August');
console.log('Keys', hashMap.keys());
console.log('Values', hashMap.values());
console.log('Entries', hashMap.entries());
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
console.log('Entries', hashMap.entries());
console.log('Length', hashMap.length());

const hashSet = createHashSet();

console.log('\n');

console.log('Length', hashSet.length());
hashSet.set('Ruby');
console.log('Set Ruby');
hashSet.set('Peridot');
console.log('Set Peridot');
console.log('Entries', hashSet.entries());
console.log('Length', hashSet.length());
console.log('Has Ruby', hashSet.has('Ruby'));
console.log('Has Sapphire', hashSet.has('Sapphire'));
console.log('Remove Peridot', hashSet.remove('Peridot'));
console.log('Remove Sapphire', hashSet.remove('Sapphire'));
console.log('Clear Hashset');
hashSet.clear();
console.log('Entries', hashSet.entries());
console.log('Length', hashSet.length());
