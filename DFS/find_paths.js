class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const find_paths = function (root, sum) {
  const allPath = [],
    currPath = [];
  findPathRecursive(root, sum, currPath, allPath);
  return allPath;
};

const findPathRecursive = (root, sum, currPath, allPath) => {
  if (root === null) return;
  currPath.push(root.value);
  if (root.value === sum && !root.left && !root.right) {
    allPath.push(JSON.parse(JSON.stringify(currPath)));
  } else {
    const newVal = sum - root.value;
    findPathRecursive(root.left, newVal, currPath, allPath);
    findPathRecursive(root.right, newVal, currPath, allPath);
  }
  currPath.pop();
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
(sum = 23), (result = find_paths(root, sum));
process.stdout.write(`Tree paths with sum ${sum}: `);
for (i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}]`);
}
