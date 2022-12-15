class Node {
  constructor(value) {
    this.value = value;
    this.null = null;
  }
}

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
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
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
    const newNode = new Node(value)
    
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
myLinkedList.prepend(35);
myLinkedList.insert(99, 99);
console.log(myLinkedList);
