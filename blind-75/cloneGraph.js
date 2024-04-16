// https://leetcode.com/problems/clone-graph/description/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) {
        return null;
    }
    
    let root = null;
    let rootCursor = root;
    let nodeCursor = node;
    let nodeListQueue = [];

    while (nodeCursor) {
        if (!root) {
            root = new Node(nodeCursor.val, [nodeCursor.neighbors[0], nodeCursor.neighbors[1]]);
        }
    }

    return root;
};

// var cloneGraph = function (node) {
//   let root = {};
//   const visited = new Set();
//   helper(node, root, visited);

//   return root[1];
// };

// function helper(node, root, visited) {
//   if (!node || visited.has(node.val)) return;

//   const neighbors = node.neighbors;
//   if (!root[node.val]) {
//     root[node.val] = {
//       val: node.val,
//       neighbors: [],
//     };
//   }

//   visited.add(node.val);
//   for (let n of neighbors) {
//     if (!root[n.val]) {
//       root[n.val] = {
//         val: n.val,
//         neighbors: [],
//       };
//     }
//     root[node.val].neighbors.push(root[n.val]);
//     helper(n, root, visited);
//   }
// }

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

const testGraph = new Node(1, [
  new Node(4, []),
  new Node(2, [
    new Node(1, []),
    new Node(3, [new Node(2, []), new Node(4, [])]),
  ]),
]);

console.log(cloneGraph(testGraph));
