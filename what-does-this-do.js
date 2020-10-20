const BinarySearchTree = require('./BST-class');

// seed binary tree ///////////////////////////////
const intBST = new BinarySearchTree;
const intArr = [3, 1, 4, 6, 9, 2, 5, 7];

intArr.forEach(item => {
    intBST.insert(item);
});
console.log(intBST._printInOrder());


// WHAT DOES THIS FUNCTION DO?
function tree(t){
    // console.log(t);
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right);
}

console.log('result: ', tree(intBST));
