const BinarySearchTree = require ('./BST-class');
const { seedTree } = require('./seed-bst'); 

const num = [3, 1, 4, 6, 9, 2, 5, 7];
const str = 'EASYQUESTION';

numBST = seedTree.numTree(num);
strBST = seedTree.strTree(str);

console.log(numBST);
console.log(strBST);




