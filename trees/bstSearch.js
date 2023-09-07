// https://leetcode.com/problems/search-in-a-binary-search-tree/

const searchBST = (root, val) => {
    let currentNode = root;

    while (currentNode) {
        if (currentNode?.val === val) {
            return currentNode;
        } else if (currentNode?.val > val) {
            currentNode = currentNode?.left;
        } else {
            currentNode = currentNode?.right;
        }
    }

    return null;
}
