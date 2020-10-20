const BinarySearchTree = require('./BST-class');
const printBinarySearchTree = require('print-bst'); // to printout trees


// BST1 ///////////////////////////////
const intBST = new BinarySearchTree;
const intArr = [3, 1, 4, 6, 9, 2, 5, 7];

intArr.forEach(item => {
    intBST.insert(item);
});


// BST2 ///////////////////////////////
const strBST = new BinarySearchTree;
const str = 'EASYQUESTION';
const strArr = str.split('');

strArr.forEach(item => {
    strBST.insert(item);
});



// PRINTOUT TREES /////////////////////////////////////////
// Unable to printout full tree in typical ways >_< 

// v1. 
// console.log(intBST); 
// incomplete printout of object

// v2. 
// console.log(JSON.stringify(intBST));
// "TypeError: Converting circular structure to JSON" 

// v3 !!!!!!!!!!!!!!!!!!! =D
// thanks to this npm, can printout full tree... with visual respresentation too!!
// however need to create new `print-bst` class object to do so
// src: https://www.npmjs.com/package/print-bst

// PRINTOUT BST1
const intPrintBST = new printBinarySearchTree;
intArr.forEach(item => {
    intPrintBST.insert(item);
});
console.log(intPrintBST.print());

// PRINTOUT BST2
const strPrintBST = new printBinarySearchTree;
strArr.forEach(item => {
    strPrintBST.insert(item);
});
console.log(strPrintBST.print());