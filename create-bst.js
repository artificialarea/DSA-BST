const BinarySearchTree = require('./BST-class');


// 1.
const intBST = new BinarySearchTree;
const intArr = [3, 1, 4, 6, 9, 2, 5, 7];

intArr.forEach(item => {
    intBST.insert(item);
});

// console.log(intBST);
// console.log(JSON.stringify(intBST)); // "TypeError: Converting circular structure to JSON" ... so how can I get a decent representation of the object?!?!

let root = intBST.getRootNode();
console.log('root: ', root);
console.log(intBST.inorder(root));  // "RangeError: Maximum call stack size exceeded"


// 2.
const strBST = new BinarySearchTree;
const str = 'EASYQUESTION';
const strArr = str.split('');

strArr.forEach(item => {
    strBST.insert(item);
});

// console.log(strBST);
// console.log(JSON.stringify(strBST));

