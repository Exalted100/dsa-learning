// https://leetcode.com/problems/count-complete-tree-nodes/

const imported = require("./insertIntoBst")
// import { insertIntoBst } from "./insertIntoBst";
console.log(imported.insertIntoBst)
let tree = null;
tree = imported.insertIntoBst(tree, 5)
// tree = imported.insertIntoBst(tree, 3)
// tree = imported.insertIntoBst(tree, 6)
// tree = imported.insertIntoBst(tree, 2)
// tree = imported.insertIntoBst(tree, 4)
// tree = imported.insertIntoBst(tree, 7)

const countNodes = (root) => {
    if (root === null) return 0;

    return 1 + countNodes(root.left) + countNodes(root.right);
}

console.log(countNodes(tree))