// LRU Cache

function Node(key = 0, value = 0) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = 0;
    this.capacity = capacity;
    this.cache = {};
    this.head = new Node();
    this.tail = new Node();

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.addNode = function(node) {
  front = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next = front;
  front.prev = node;
}

LRUCache.prototype.removeNode = function(node) {
  pre = node.prev;
  nxt = node.next;

  pre.next = nxt;
  nxt.prev = pre;
}

LRUCache.prototype.moveToFront = function(node) {
  this.removeNode(node)
  this.addNode(node)
}

LRUCache.prototype.removeTail = function() {
  removed = this.tail.prev;
  this.removeNode(removed);
  return removed;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  var node = this.cache[key];
  if (node) {
    this.moveToFront(node);
    return node.value;
  }
  else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  var node = this.cache[key];
  if (node) {
    this.moveToFront(node);
    node.value = value;
  }
  else {
    let newNode = new Node(key, value);
    this.cache[key] = newNode;
    this.addNode(newNode);
    this.size += 1;
    if (this.size > this.capacity) {
      tail = this.removeTail();
      delete this.cache[tail.key];
      this.size -= 1;
    }
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var obj = new LRUCache(2);
obj.put(1,1);
obj.put(2,2);
console.log(obj.get(1));
obj.put(3,3);
console.log(obj.get(2));
obj.put(4,4);
console.log(obj.get(1));
console.log(obj.get(3));
console.log(obj.get(4));






















