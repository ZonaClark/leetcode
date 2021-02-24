class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = '';
    let temp = this;
    while (temp !== null) {
      result += temp.value + ' ';
      temp = temp.next;
    }
    return result;
  }
}

const rotate = function (head, rotations) {
  let length = 0,
    h = head;
  while (h !== null) {
    h = h.next;
    length++;
  }
  if (rotations === length) return head;
  let rotateNum = rotations < length ? rotations : (rotations % length) - 1;
  const headOfSecondHalf = head;
  let realTail = null;
  while (rotateNum > 0) {
    realTail = head;
    rotateNum--;
    head = head.next;
  }
  realTail.next = null;
  let tailOfFirstHalf = head;
  while (tailOfFirstHalf && tailOfFirstHalf.next) {
    tailOfFirstHalf = tailOfFirstHalf.next;
  }
  tailOfFirstHalf.next = headOfSecondHalf;
  return head;
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`);
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 3).get_list()}`);
