// https://leetcode.com/problems/delete-node-in-a-bst/

// Incorrect
const imported = require("./insertIntoBst")
// import { insertIntoBst } from "./insertIntoBst";
console.log(imported.insertIntoBst)
let tree = null;
tree = imported.insertIntoBst(tree, 5)
tree = imported.insertIntoBst(tree, 3)
tree = imported.insertIntoBst(tree, 6)
tree = imported.insertIntoBst(tree, 2)
tree = imported.insertIntoBst(tree, 4)
tree = imported.insertIntoBst(tree, 7)
console.log(tree)

const deleteNode = (root, key) => {
  let currentNode = root;
  if (root.val === key) {
    while (currentNode) {
        let rightNode = currentNode?.right
        currentNode = currentNode.left
        currentNode.right = rightNode;
        currentNode = currentNode.left;
    }
  }
    else if (currentNode?.left?.val === key) {
        // let rightNode = currentNode.left.right;
        // currentNode.left = currentNode.left.left;
        // currentNode.left?.right = rightNode;

        while (currentNode.left && currentNode.left.right) {
            let rightNode = currentNode.left.right;
            currentNode.left = currentNode.left.left;
            currentNode.left.right = rightNode;
            currentNode = currentNode.left;
        }
      return root;
    } else if (currentNode?.right?.val === key) {
        // let leftNode = currentNode.right.left;
        // currentNode.right = currentNode.right.right;
        // currentNode.right?.left = leftNode;

        while (currentNode.right && currentNode.right.left) {
            let leftNode = currentNode.right.left;
        currentNode.right = currentNode.right.right;
        currentNode.right.left = leftNode;
        currentNode = currentNode.right;
        }
      return root;
    } else if (currentNode?.val > key) {
      currentNode = currentNode?.left;
    } else {
      currentNode = currentNode?.right;
    }

    return root;
  }

console.log(deleteNode(tree))