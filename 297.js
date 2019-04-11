// Serialize and Deserialize Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let queue = [];
    queue.push(root.val);
    let ans = [];
    while (!queue.length === 0) {
      let num = queue.pop();
      ans.push(num);
      if (num !== null) {
        queue.unshift(num.left);
        queue.unshift(num.right);
      }
    }
    return JSON.stringify(ans);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = JSON.parse(data);
    let node = new TreeNode(arr[0]);
    let newArray = arr.splice(1);
    def recurse(newArray, node) {
      node.left = new TreeNode(newArray.shift());
      node.right = new TreeNode(newArray.shift());
      if (newArray.length !== 0) {
        if (node.left.val !== null) {
          recurse(newArray, node.left);
        }
        if (node.right.val !== null) {
          recurse(newArray, node.right);
        }
      }
    }
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


























