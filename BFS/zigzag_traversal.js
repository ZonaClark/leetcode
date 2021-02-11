const Deque = require('./collections/deque');

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const traverse = function (root) {
  if (!root) {
    return [];
  }
  const result = [];
  let reverse = false;
  const q = new Deque();
  q.push(root);
  while (q.length) {
    const currentLevel = new Deque();
    const currentLength = q.length;
    for (i = 0; i < currentLength; i++) {
      const nextVal = q.shift();
      if (reverse) {
        currentLevel.unshift(nextVal.value);
      } else {
        currentLevel.push(nextVal.value);
      }
      if (nextVal.left) {
        q.push(nextVal.left);
      }
      if (nextVal.right) {
        q.push(nextVal.right);
      }
    }
    result.push(currentLevel.toArray());
    reverse = !reverse;
  }
  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.right.left.left = new TreeNode(20);
root.right.left.right = new TreeNode(17);
console.log(`Zigzag traversal: ${traverse(root)}`);
