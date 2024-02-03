function createHashMap() {
  //  Were gonna have our hash array of length 19 using a prime number not too close to 2^n
  //  And were def gonna use mod method for the hash function
  //  In this method for creating hash functions, we map a key into one of the slots of table by
  //  taking the remainder of key divided by table_size. That is, the hash function is

  //  h(key) = key mod table_size
  //  i.e. key % table_size

  //  Props

  //  Capacity
  //  Length
  //  Load factor = Length / Capacity

  //  Thing to consider

  //  if (index < 0 || index >= buckets.length) {
  //    throw new Error("Trying to access index out of bound");
  //  }

  let capacity = 19;
  let length = 0;
  let loadFactor = length / capacity;

  function hash(key) {
    let hashCode = 0;

    const prime = 31;
    for (let i = 0; i < key.length; i += 1) {
      hashCode = prime * hashCode + key.charCodeAt(i);
    }

    return hashCode % capacity;
  }

  return {
    set,
  };
}

export default createHashMap;