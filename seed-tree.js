// Service Object to create Binary Trees
// const BinarySearchTree = require('./BST-class');
const BinarySearchTree = require('print-bst'); 

const seedTree = {
    numTree: function(numArr) {
        const numBST = new BinarySearchTree;
        // const numArr = [3, 1, 4, 6, 9, 2, 5, 7];

        numArr.forEach(item => {
            numBST.insert(item);
        });

        return numBST;
    },
    strTree: function(str) {
        const strBST = new BinarySearchTree;
        // const str = 'EASYQUESTION';
        const strArr = str.split('');

        strArr.forEach(item => {
            strBST.insert(item);
        });

        return strBST;
    },

};

module.exports = {
    seedTree,
}