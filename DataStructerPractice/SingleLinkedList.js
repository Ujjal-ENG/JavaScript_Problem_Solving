class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // pop() {
  //   if (!this.head) return undefined;
  //   let current = this.head;
  //   let newTail = current;
  //   while (current.next) {
  //     newTail = current;
  //     current = current.next;
  //   }
  //   this.tail = newTail;
  //   this.tail.next = null;
  //   this.length--;
  //   if (this.length === 0) {
  //     this.head = null;
  //     this.tail = null;
  //   }
  //   return this;
  // }

  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Hell");
list.push("Hl");
list.pop();
// list.pop();
// list.traverse();
console.log(list);
