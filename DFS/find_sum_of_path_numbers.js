class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_sum_of_path_numbers = function (root) {
  let allPaths = [],
    currPath = [];
  findPathRecursion(root, currPath, allPaths);
  let sum = 0;
  allPaths.forEach((path) => {
    const numStr = path.reduce((prev, curr) => {
      return prev.toString() + curr.toString();
    });
    const num = parseInt(numStr);
    sum += num;
  });
  return sum;
};

const findPathRecursion = (root, currPath, allPaths) => {
  if (root === null) return;
  currPath.push(root.value);
  if (!root.left && !root.right) {
    allPaths.push(currPath.map((n) => n));
  } else {
    findPathRecursion(root.left, currPath, allPaths);
    findPathRecursion(root.right, currPath, allPaths);
  }
  currPath.pop();
};

var root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);
