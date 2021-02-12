class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_path = function (root, sequence) {
  if (root === null) {
    return sequence.length === 0;
  }
  return findPathRecursive(root, sequence, 0);
};

const findPathRecursive = (root, sequence, level) => {
  if (root === null) return false;
  if (root.value === sequence[level]) {
    if (!root.left && !root.right) {
      return true;
    }
    return (
      findPathRecursive(root.left, sequence, level + 1) ||
      findPathRecursive(root.right, sequence, level + 1)
    );
  } else {
    return false;
  }
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);
