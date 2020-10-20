const { seedTree } = require('./seed-tree'); 
const BinarySearchTree = require('./BST-class');

// seed and print some binary trees
const insertNums = [3, 1, 4, 6, 9, 2, 5, 7];
const insertChars = 'EASYQUESTION';
const numBST = seedTree.numTree(insertNums);
const strBST = seedTree.strTree(insertChars);


// Unfortunately, 
// findTreeHeight() unable to parse those trees due to slightly different format
// soooooo, creating another set of trees
const numBST2 = new BinarySearchTree();
insertNums.forEach((num) => numBST2.insert(num));
const strBST2 = new BinarySearchTree();
insertChars.split('').forEach((char) => strBST2.insert(char));


// GET HEIGHT
// (but I don't understand the recursive logic)
function findTreeHeight(tree) {
    // console.log(tree);
    if (tree === null) return 0;

    let left = findTreeHeight(tree.left);
    let right = findTreeHeight(tree.right);
    // console.log(`.LET left: ${tree.left}, right: ${tree.right}`);

    if (left > right) {
        // console.log(`.L>R left: ${left}, right: ${right}`);
        return left + 1;
    } else {
        // console.log(`!L>R left: ${left}, right: ${right}`);
        return right + 1;
    }
}

console.log('TREE HEIGHT: ', findTreeHeight(numBST2), '\n');
console.log(numBST.print());  // levels: 5

console.log('TREE HEIGHT: ', findTreeHeight(strBST2), '\n');
console.log(strBST.print());  // levels: 7



