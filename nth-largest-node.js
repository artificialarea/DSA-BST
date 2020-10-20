// nth largest node
// Write an algorithm to find the nth largest node in a binary search tree.

const findNthLargest = (BST, nthLargestNode) => {
    // if the tree is empty, return null
    //   if (BST === 0) return null;
    // create an array to hold values
    let results = [];
    // traverse function
    const _traverse = (node) => {
        // base case to stop recursion when  undefined
        if (node.left) {
            //
            _traverse(node.left);
        }
        // push the value to the results array
        results.push(node.value);
        // do the same thing for the right?!?!
        if (node.right) {
            _traverse(node.right);
        }
    };

    _traverse(BST);
    if (results.length < nthLargestNode) {
        return `The tree has less than ${nthLargestNode} nodes`;
    } else {
        return results.sort((a, b) => b - a)[nthLargestNode-1];
    }
};

const BinarySearchTree = require("./BST-class");

const addItems = [3, 1, 4, 6, 9, 2, 5, 7];
let testBST = new BinarySearchTree();

addItems.forEach((item) => testBST.insert(item, item));


let nthNode = 3;
findNthLargest(testBST, nthNode);


// console.log(testBST);
console.log(testBST._printInOrder());

let suffix = 'th';
if (nthNode.toString().charAt(nthNode.length-1) === '1') {
    suffix = 'st';
} else if (nthNode.toString().charAt(nthNode.length-1) === '2') {
    suffix = 'nd';
} else if (nthNode.toString().charAt(nthNode.length-1) === '3') {
    suffix = 'rd';
}
console.log(`${nthNode}${suffix} largest node is ${findNthLargest(testBST, nthNode)}`);
