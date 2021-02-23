class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  print_list() {
    let result = '';
    let temp = this;
    while (temp !== null) {
      result += temp.value + ' ';
      temp = temp.next;
    }
    console.log(result);
  }
}

const reorder = function (head) {
  let slow = head,
    fast = head;
  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // slow.next now points to second half of list
  // Reverse second half of list
  let tail = slow.next,
    headReversed = tail.next;
  slow.next = null;
  tail.next = null;
  while (headReversed !== null && headReversed.next !== null) {
    let temp = headReversed.next;
    headReversed.next = tail;
    tail = headReversed;
    headReversed = temp;
  }
  headReversed.next = tail;

  // "headReversed" is pointing to head of the reversed list
  let ptr = head;
  while (headReversed !== null) {
    const nextInsert = headReversed;
    headReversed = headReversed.next;
    const temp = ptr.next;
    ptr.next = nextInsert;
    nextInsert.next = temp;
    ptr = temp;
  }
  return head;
};

// 2 -> 4 -> 6 -> 8 -> 10 -> 12
head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);
head.print_list();
