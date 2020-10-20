# Working with binary search trees

**[Thinkful Data Structures & Algorithms assignment](https://courses.thinkful.com/dsa-v1/checkpoint/8#assignment)**

To run any of these scripts, in terminal command line enter: `node script-name.js`

<br />

## 1. Draw a Binary Search Tree (BST)

**1 ]** Given the data `3,1,4,6,9,2,5,7`, if you were to insert this into an empty binary search tree, what would the tree look like? (Draw the tree, no coding needed here.)
```
            [3]                              
           /   \                
        [1]     [4]                 
           \       \                   
            [2]     [6]   
                   /   \                
                [5]     [9]
                       /              
                    [7]
```

**2 ]** Draw the BST with the keys - E A S Y Q U E S T I O N

> Presumably would convert the string characters to numerical ASCII 
> (Question: should I then create hash value with the hash function `k Mod m`, too?)

![bst](./draw-bst.jpg)

## 2. Remove the root

Show how the above trees would look like if you deleted the root of each tree. (Draw the trees, no coding needed here.)

![bst](./draw-bst-remove.jpg)


## 3. Create a BST class (Need help!)

see: **[`BST-class.js`](https://github.com/artificialarea/DSA-BST/blob/main/BST-class.js)** + **[`create-bst.js`](https://github.com/artificialarea/DSA-BST/blob/main/create-bst.js)**

> Was unable to printout full tree in typical ways >_< 

> `console.log(BST);` results in incomplete printout of object, prematurely ending at the 3rd level

> `console.log(JSON.stringify(BST));` results in "TypeError: Converting circular structure to JSON" 

> Thankfully there is a **[`print-bst`](https://www.npmjs.com/package/print-bst)** npm package that enables printout of the full tree and a visual respresentation too!!

```
  __3          
 /   \         
1     4__      
 \       \     
  2       6__  
         /   \ 
        5     9
             / 
            7  
```

This printout confirms my original diagram is incorrrect. The duplicate characters of `E` and `S` are included in the BST. Per the `insert()` method, if new `key === this.key` node, it proceeds down the right-hand subtree branch...
```
  E__________          
 /           \         
A             S______  
             /       \ 
      ______Q         Y
     /               / 
    E             __U  
     \           /     
      I__       S      
         \       \     
          O       T    
         /             
        N        
```