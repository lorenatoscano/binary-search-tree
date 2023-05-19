import { readFileSync } from 'fs';
import { BinarySearchTree, TreeFormat } from './classes/BinarySearchTree';
import { TreeNode } from './classes/TreeNode';

type CommandFunction = (param: string) => void;

const tree = new BinarySearchTree();

const commandMap: Record<string, CommandFunction> = {
  IMPRIMA: (param: string) => {
    const format = parseInt(param);
    console.log(tree.printTree(format));
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
    const median = tree.getMedianElement();
    console.log(`Mediana: ${median}`);
  },
  CHEIA: () => {
    const isFull = tree.isFullBinaryTree(tree.root);
    console.log(isFull ? 'A árvore é cheia' : 'A árvore não é cheia');
  },
  COMPLETA: () => {
    const isComplete = tree.isCompleteBinaryTree(tree.root);
    console.log(isComplete ? 'A árvore é completa' : 'A árvore não é completa');
  },
  INSIRA: (param: string) => {
    const value = parseInt(param);
    tree.insert(value);
    console.log(`${value} adicionado`);
  },
  REMOVA: (param: string) => {
    const value = parseInt(param);
    tree.remove(value);
    console.log(`${value} removido`);
  },
  BUSCAR: (param: string) => {
    const value = parseInt(param);
    const isFound = tree.contains(value);
    console.log(isFound ? 'Chave encontrada' : 'Não foi possível encontrar');
  },
  PREORDEM: () => {
    console.log(tree.preOrderTraversal());
  },
};

function executeCommandsFromFile() {
  const data = readFileSync('src/input/commands.txt', 'utf8');

  const commands = data.split('\n');

  commands.forEach((command) => {
    const [method, param] = command.trim().split(' ');

    const mappedFunction = commandMap[method];

    if (mappedFunction) {
      try {
        mappedFunction(param);
      } catch (error) {
        console.warn((error as Error).message);
      }
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
console.log(`Ordem simétrica: ${tree.inOrderTraversal()}`);
