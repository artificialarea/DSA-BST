const { seedTree } = require('./seed-tree'); 

// seed some binary trees
const num = [3, 1, 4, 6, 9, 2, 5, 7];
const str = 'EASYQUESTION';
const numBST = seedTree.numTree(num);
const strBST = seedTree.strTree(str);

console.log(numBST);
console.log(numBST.print());
console.log(strBST);
console.log(strBST.print());





