import createNode from './node.js';

function createHashMap() {
  const hashMap = [];
  let capacity = 19;
  let size = 0;

  function hash(key) {
    let hashCode = 0;

    const prime = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = prime * hashCode + key.charCodeAt(i);
    }

    return hashCode % capacity;
  }

  function length() {
    return size;
  }

  function keys() {
    const existingKeys = [];

    for (let i = 0; i < hashMap.length; i += 1) {
      if (hashMap[i]) {
        existingKeys.push(hashMap[i].key);
      }
    }

    return existingKeys;
  }

  function values() {
    const existingValues = [];

    for (let i = 0; i < hashMap.length; i += 1) {
      if (hashMap[i]) {
        existingValues.push(hashMap[i].value);
      }
    }

    return existingValues;
  }

  function entries() {
    const existingEntries = [];

    for (let i = 0; i < hashMap.length; i += 1) {
      if (hashMap[i]) {
        existingEntries.push([hashMap[i].key, hashMap[i].value]);
      }
    }

    return existingEntries;
  }

  function grow() {
    const rehash = entries();
    capacity *= 2;
    hashMap.length = 0;

    rehash.forEach(([key, value]) => {
      const index = hash(key);

      if (!hashMap[index]) {
        hashMap[index] = createNode(key, value);
      } else {
        hashMap[index].key = key;
        hashMap[index].value = value;
      }
    });
  }

  function set(key, value) {
    const index = hash(key);

    if (!hashMap[index]) {
      hashMap[index] = createNode(key, value);
      size += 1;
      if (size / capacity > 0.75) {
        grow();
      }
    } else {
      hashMap[index].key = key;
      hashMap[index].value = value;
    }
  }

  function get(key) {
    const index = hash(key);
    const node = hashMap[index];

    if (!node) return null;
    if (node.key !== key) return null;

    return node.value;
  }

  function has(key) {
    const index = hash(key);
    const node = hashMap[index];

    if (!node) return false;
    if (node.key !== key) return false;

    return true;
  }

  function remove(key) {
    const index = hash(key);
    const node = hashMap[index];

    if (!node) return false;
    if (node.key !== key) return false;
    hashMap[index] = null;
    size -= 1;

    return true;
  }

  function clear() {
    hashMap.length = 0;
    size = 0;
  }

  return {
    length,
    set,
    get,
    has,
    remove,
    clear,
    keys,
    values,
    entries,
  };
}

export default createHashMap;
