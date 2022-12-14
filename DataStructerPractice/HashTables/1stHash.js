class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    this.data = key
  }

  get(key) {

  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
