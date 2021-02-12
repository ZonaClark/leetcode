const Heap = require('./collections/heap');

class MedianOfAStream {
  constructor() {
    this.minHeap = new Heap([], null, (a, b) => b - a);
    this.maxHeap = new Heap([], null, (a, b) => a - b);
  }

  insert_num(num) {
    if (!this.maxHeap.length) {
      this.maxHeap.push(num);
    } else if (num > this.maxHeap.peek()) {
      this.minHeap.push(num);
    } else {
      this.maxHeap.push(num);
    }

    while (this.maxHeap.length > this.minHeap.length) {
      this.minHeap.push(this.maxHeap.pop());
    }

    while (this.minHeap.length > this.maxHeap.length + 1) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  find_median() {
    console.log(this.minHeap, this.maxHeap);
    if (this.minHeap.length === this.maxHeap.length) {
      return this.minHeap.peek() / 2.0 + this.maxHeap.peek() / 2.0;
    }
    return this.minHeap.peek();
  }
}

var medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);
