// function mergeSort(arr1, arr2) {
//   const array = [...arr1, ...arr2];
//   return array.sort((a, b) => a - b);
// }

// console.log(mergeSort([0, 3, 4, 31], [4, 6, 30]));

// let user = {
//   age: 54,
//   name: "kyllie",
//   magic: true,
//   scream: function () {
//     console.log("ahhh!!")
//   }
// }

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push(key, value);
    }
  }

  get(key) {}
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
