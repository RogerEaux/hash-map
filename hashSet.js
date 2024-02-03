function createHashSet() {
  const hashSet = [];
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

  function entries() {
    const existingEntries = [];

    for (let i = 0; i < hashSet.length; i += 1) {
      if (hashSet[i]) {
        existingEntries.push(hashSet[i]);
      }
    }

    return existingEntries;
  }

  function grow() {
    const rehash = entries();
    capacity *= 2;
    hashSet.length = 0;

    rehash.forEach((key) => {
      hashSet[hash(key)] = key;
    });
  }

  function set(key) {
    const index = hash(key);

    hashSet[index] = key;

    if (!hashSet[index]) {
      size += 1;
      if (size / capacity > 0.75) {
        grow();
      }
    }
  }

  function has(key) {
    const index = hash(key);

    if (hashSet[index] !== key) return false;

    return true;
  }

  function remove(key) {
    const index = hash(key);

    if (hashSet[index] !== key) return false;
    hashSet[index] = null;
    size -= 1;

    return true;
  }

  function clear() {
    hashSet.length = 0;
    size = 0;
  }

  return {
    length,
    set,
    has,
    remove,
    clear,
    entries,
  };
}

export default createHashSet;
