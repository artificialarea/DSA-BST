const BinarySearchTree = require('./BST-class');

// seed binary tree ///////////////////////////////
const intBST = new BinarySearchTree;
const intArr = [3, 1, 4, 6, 9, 2, 5, 7];

intArr.forEach(item => {
    intBST.insert(item, item); // need to give key a *value*, too. item === key === value
});

const strBST = new BinarySearchTree;
const str = 'EASYQUESTION';
const strArr = str.split('');

strArr.forEach(item => {
    strBST.insert(item, item.charCodeAt(0)); // convert string value to a ASCII number
});


// WHAT DOES THIS FUNCTION DO?
function sumOfTree(t) {
    if (!t) {
        return 0;
    }
    return sumOfTree(t.left) + t.value + sumOfTree(t.right);
}

console.log('result: ', sumOfTree(intBST));
console.log('result: ', sumOfTree(strBST));
