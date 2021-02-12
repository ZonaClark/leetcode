class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const count_paths = function (root, S) {
  if (root === null) return 0;
  return countRecursive(root, S, []);
};

const countRecursive = (root, S, currPath) => {
  if (root === null) return 0;
  currPath.push(root.value);
  let pathCount = 0,
    sum = 0;
  for (i = currPath.length - 1; i >= 0; i--) {
    sum += currPath[i];
    if (sum === S) {
      pathCount++;
    }
  }
  pathCount += countRecursive(root.left, S, currPath);
  pathCount += countRecursive(root.right, S, currPath);
  currPath.pop();
  return pathCount;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree has paths: ${count_paths(root, 11)}`);
