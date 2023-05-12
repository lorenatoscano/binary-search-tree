// import { readFileSync } from 'fs';
import { BinarySearchTree, TreeFormat } from './classes/BinarySearchTree';
import { TreeNode } from './classes/TreeNode';

const tree = new BinarySearchTree();

tree.root = new TreeNode(5);
tree.root.left = new TreeNode(3);
tree.root.right = new TreeNode(8);
tree.root.right.left = new TreeNode(6);
tree.root.right.right = new TreeNode(9);

console.log(tree.printTree(tree.root, TreeFormat.PARENTHESES));

// const data = readFileSync('input.txt', 'utf8');

// for (let value of data) {
//   tree.insert(Number(value));
// }
