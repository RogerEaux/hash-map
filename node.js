function createNode(key, value) {
  let nodeKey = key;
  let nodeValue = value;

  return {
    get key() {
      return nodeKey;
    },

    set key(newKey) {
      nodeKey = newKey;
    },

    get value() {
      return nodeValue;
    },

    set value(newValue) {
      nodeValue = newValue;
    },
  };
}

export default createNode;
