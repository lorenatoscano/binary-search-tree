import { readFileSync } from 'fs';
import { BinarySearchTree, TreeFormat } from './classes/BinarySearchTree';
import { TreeNode } from './classes/TreeNode';

type CommandFunction = (param: string) => void;

const tree = new BinarySearchTree();

const commandMap: Record<string, CommandFunction> = {
  IMPRIMA: (param: string) => {
    const format = parseInt(param);
    console.log(tree.printTree(tree.root, format));
  },
  ENESIMO: (param: string) => {
    const index = parseInt(param);
    const element = tree.getElementAtPositionInOrder(index);
    console.log(`Elemento na posição ${param}: ${element}`);
  },
  POSICAO: (param: string) => {
    const value = parseInt(param);
    const index = tree.getPositionInOrder(value);
    console.log(index);
  },
  MEDIANA: () => {
    const median = tree.getMedianElement(tree.root);
    console.log(median);
  },
  CHEIA: () => {
    const isFull = tree.isFullBinaryTree(tree.root);
    console.log(isFull);
  },
  COMPLETA: () => {
    const isComplete = tree.isCompleteBinaryTree(tree.root);
    console.log(isComplete);
  },
  REMOVA: (param: string) => {
    const value = parseInt(param);
    tree.remove(value);
  },
};

function executeCommandsFromFile() {
  const data = readFileSync('src/input/commands.txt', 'utf8');

  const commands = data.split('\n');

  commands.forEach((command) => {
    const [method, param] = command.trim().split(' ');

    const mappedFunction = commandMap[method];

    if (mappedFunction) {
      mappedFunction(param);
    } else {
      console.warn(`Comando inválido: ${command}`);
    }
  });
}

function buildTree() {
  const data = readFileSync('src/input/tree.txt', 'utf8');
  const values = data.split(' ');

  values.forEach((value) => tree.insert(Number(value)));
}

buildTree();
executeCommandsFromFile();
console.log(`Altura da árvore: ${tree.getHeight(tree.root)}`);
console.log(`Pré-ordem: ${tree.preOrderTraversal()}`);
console.log(`Ordem simétrica: ${tree.inOrderTraversal()}`);
console.log(`Pós-ordem: ${tree.postOrderTraversal()}`);
