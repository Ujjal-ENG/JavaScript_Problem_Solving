class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList;
  }

  remove(index) {
    //check the params
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this
  }

  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  printList() {
    const arrays = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arrays.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arrays;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(18);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
myLinkedList.remove(1);
myLinkedList.printList();
console.log(myLinkedList);
