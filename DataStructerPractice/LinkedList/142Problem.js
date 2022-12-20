class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}

const initializeLinkedListFromArray = (array) => {
  if (array.length === 0) {
    return [];
  }
  let head = new Node(array[0]);
  let current = head;
  for (let i = 1; i < array.length; i++) {
    let newNode = new Node(array[i]);
    current.next = newNode;
    current = current.next;
  }
  return head;
};

const printLinedList = (head) => {
  let current = head;
  let printStr = "";
  while (current) {
    printStr += current.value + "->";
    current = current.next;
  }
  console.log(printStr);
};

const head = initializeLinkedListFromArray([1, 2, 3]);
printLinedList(head)
