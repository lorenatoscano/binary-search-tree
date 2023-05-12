"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const BinarySearchTree_1 = require("./classes/BinarySearchTree");
const TreeNode_1 = require("./classes/TreeNode");
const tree = new BinarySearchTree_1.BinarySearchTree();
tree.root = new TreeNode_1.TreeNode(5);
tree.root.left = new TreeNode_1.TreeNode(3);
tree.root.right = new TreeNode_1.TreeNode(8);
tree.root.right.left = new TreeNode_1.TreeNode(6);
tree.root.right.right = new TreeNode_1.TreeNode(9);
const commandMap = {
    IMPRIMA: (param) => {
        const format = parseInt(param);
        console.log(tree.printTree(tree.root, format));
    },
    MEDIANA: () => {
        const median = tree.getMedianElement(tree.root);
        console.log(median);
    },
    ENESIMO: (param) => {
        const index = parseInt(param);
        const element = tree.getElementAtPositionInOrder(index);
        console.log(element);
    },
};
// const data = readFileSync('input.txt', 'utf8');
// for (let value of data) {
//   tree.insert(Number(value));
// }
const data = (0, fs_1.readFileSync)('src/commands.txt', 'utf8');
const commands = data.split('\n');
commands.forEach((command) => {
    const [method, param] = command.trim().split(' ');
    const mappedFunction = commandMap[method];
    if (mappedFunction) {
        mappedFunction(param);
    }
    else {
        console.warn(`Comando inválido: ${command}`);
    }
});
