class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Sll {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = null;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = null;
      this.length++;
    }
  }
}
