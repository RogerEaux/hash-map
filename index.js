import createHashMap from './hashMap.js';

const hashMap = createHashMap();

hashMap.set('Ruby', 'July');
hashMap.set('Peridot', 'August');
console.log('Get Ruby', hashMap.get('Ruby'));
console.log('Get Sapphire', hashMap.get('Sapphire'));
console.log('Has Ruby', hashMap.has('Ruby'));
console.log('Has Sapphire', hashMap.has('Sapphire'));
console.log('Remove Peridot', hashMap.remove('Peridot'));
console.log('Get Peridot', hashMap.get('Peridot'));
console.log('Remove Sapphire', hashMap.remove('Sapphire'));
