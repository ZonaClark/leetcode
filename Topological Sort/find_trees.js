const find_trees = function (nodes, edges) {
  const graph = {},
    heightArr = [],
    result = [];
  for (let i = 0; i < nodes; i++) {
    graph[i] = new Set();
  }
  for ([first, second] of edges) {
    graph[first].add(second);
    graph[second].add(first);
  }
  let minHeight = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nodes; i++) {
    const heightFromNode = calcMaxHeight(i, -1, graph);
    minHeight = Math.min(minHeight, heightFromNode);
    heightArr.push(heightFromNode);
  }
  heightArr.forEach((height, i) => {
    if (height === minHeight) {
      result.push(i);
    }
  });
  return result;
};

const calcMaxHeight = (node, excludedNode, graph) => {
  let children = new Set(graph[node]);
  if (excludedNode !== -1) {
    children.delete(excludedNode);
  }
  if (children.size < 1) return 1;
  let maxHeight = Number.MIN_SAFE_INTEGER;
  Array.from(children).forEach((child) => {
    maxHeight = Math.max(maxHeight, 1 + calcMaxHeight(child, node, graph));
  });
  return maxHeight;
};

// 0: [1]
// 1: [0, 2, 3]
// 2: [1, 4]
// 3: [1]
// 4: [2]

console.log(
  `Roots of MHTs: ${find_trees(5, [
    [0, 1],
    [1, 2],
    [1, 3],
    [2, 4],
  ])}`
);
console.log(
  `Roots of MHTs: ${find_trees(4, [
    [0, 1],
    [0, 2],
    [2, 3],
  ])}`
);
console.log(
  `Roots of MHTs: ${find_trees(4, [
    [1, 2],
    [1, 3],
  ])}`
);
