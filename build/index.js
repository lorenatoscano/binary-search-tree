"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { readFileSync } from 'fs';
const BinarySearchTree_1 = require("./classes/BinarySearchTree");
const TreeNode_1 = require("./classes/TreeNode");
const tree = new BinarySearchTree_1.BinarySearchTree();
tree.root = new TreeNode_1.TreeNode(5);
tree.root.left = new TreeNode_1.TreeNode(3);
tree.root.right = new TreeNode_1.TreeNode(8);
tree.root.right.left = new TreeNode_1.TreeNode(6);
tree.root.right.right = new TreeNode_1.TreeNode(9);
console.log(tree.printTree(tree.root, BinarySearchTree_1.TreeFormat.PARENTHESES));
// const data = readFileSync('input.txt', 'utf8');
// for (let value of data) {
//   tree.insert(Number(value));
// }
