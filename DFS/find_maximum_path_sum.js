class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_maximum_path_sum = function (root) {
  const result = {
    max: 0,
  };
  findSumRecursive(root, result);
  return result.max;
};

const findSumRecursive = (node, result) => {
  if (node === null) return 0;
  const leftSum = findSumRecursive(node.left, result);
  const rightSum = findSumRecursive(node.right, result);
  const totalSum = leftSum + node.value + rightSum;
  result.max = Math.max(result.max, totalSum);
  return leftSum > rightSum ? leftSum + node.value : rightSum + node.value;
};

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);
root.right.right.left = new TreeNode(9);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);

root = new TreeNode(-1);
root.left = new TreeNode(-3);
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`);
