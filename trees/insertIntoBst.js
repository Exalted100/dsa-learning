// https://leetcode.com/problems/insert-into-a-binary-search-tree/

const insertIntoBst = (root, val) => {
    if (!root) {
        root = {val, left: null, right: null};
    } else {
        let currentNode = root;

    while (true) {
        if (currentNode.val > val) {
            if (!currentNode.left) {
                currentNode.left = {val, left: null, right: null}
                break
            } else {currentNode = currentNode.left}
        } else if (currentNode.val < val) {
            if (!currentNode.right) {
                currentNode.right = {val, left: null, right: null}
                break
            } else {currentNode = currentNode.right}
        }
    }
    }

    return root;
}

exports.insertIntoBst = insertIntoBst