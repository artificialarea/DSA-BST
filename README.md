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

Presumably would convert the string characters to numerical ASCII 
(should I then create hash value with the function `k Mod m`, too?)

```
char    ASCII       Mod     m       hash value / index
E       69
A       65
S       83
Y       89
Q       81
U       85
E       69
S       83
T       84
I       73
O       79
N       78
```

```
            [E]69                              
           /     \                
      [A]65           [S]83                 
         \         /          \                   
        [E]69   [Q]81         [Y]89
                /   \           /     
             [T]73  [S]83    [U]85 
                \              /              
                 [O]79     [T]84
                 /
                [N]78 
```
```
            [E]                              
          /            \                
       [A]             [S]                 
         \          /       \                   
         [E]     [Q]        [Y]
                /   \       /     
              [T]   [S]   [U] 
                \         /              
                 [O]    [T]
                 /
               [N] 
```