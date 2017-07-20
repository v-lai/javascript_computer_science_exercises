// Part I
function Node(val) {
  this.val = val;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

SinglyLinkedList.prototype.push = function (val) {
  this.length++; // 1. increment length
  const node = new Node(val); // 2. create node
  if (!this.head) { // if no head/nodes attached yet
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node; // 3. set 'next' value (previous tail)
    this.tail = node; // 4. set new tail
  }
  return this; // 5. return linked list
}

SinglyLinkedList.prototype.pop = function () { // this clearly doesn't work for towards head
  if (!this.length) { return undefined; }
  this.length--; // 1. decrement length
  const remove = this.tail; // 2. save node to be removed
  return remove.val; // 3. return value of node
}

SinglyLinkedList.prototype.unshift = function (val) {
  this.length++; // 1. increment length
  const node = new Node(val); // 2. create node
  if (!this.head) { // if no head/nodes attached yet
    this.head = node;
    this.tail = this.head;
  } else {
    // const temp = this.head; // 3. get previous head
    // this.head = node; // 4. set new head
    // this.head.next = temp; // 5. set new head next
    [this.head, this.head.next] = [node, this.head];
  }
  return this;
}

SinglyLinkedList.prototype.shift = function (val) {
  if (!this.length) { return undefined; }
  this.length--; // 1. decrement length
  const remove = this.head; // 2. save node to be removed
  this.head = this.head.next; // 3. set new head
  return remove.val; // 4. return value of node
}

SinglyLinkedList.prototype.set = function (idx, val) {
  if (idx < 0 || idx >= this.length) { return false; }
  let node = this.head;
  for (let i = 0; i < idx; i++) {
    node = node.next;
  }
  node.val = val;
  return true;
}

SinglyLinkedList.prototype.get = function (idx) {
  if (idx < 0 || idx >= this.length) { return null; }
  let node = this.head;
  for (let i = 0; i < idx; i++) {
    node = node.next;
  }
  return node.val;
}

SinglyLinkedList.prototype.insert = function (idx, val) {
  if (idx < 0 || idx > this.length) { return null; }
  const node = new Node(val);
  let prevNode = this.head;
  let last;
  for (let i = 0; i < idx; i++) {
    last = prevNode;
    prevNode = prevNode.next;
  }
  node.next = prevNode;
  last.next = node;
  return this.length++;
}

SinglyLinkedList.prototype.remove = function (idx) {
  if (idx < 0 || idx >= this.length) { return null; }
  let node = this.head;
  let last;
  for (let i = 0; i < idx; i++) {
    last = node;
    node = node.next;
  }
  last.next = node.next;
  this.length--;
  return this;
}

SinglyLinkedList.prototype.reverse = function () {
  let prev = null;
  let cur = this.head;
  let next;
  while (cur !== null) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  [this.tail, this.head] = [this.head, this.tail];
  return this;
}
