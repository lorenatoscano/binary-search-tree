import { readFileSync } from 'fs';
import { AVLTree } from './classes/AVLTree';

type CommandFunction = (param: string) => void;

const tree = new AVLTree();

const commandMap: Record<string, CommandFunction> = {
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
    const isFound = tree.search(value);
    console.log(isFound ? 'Chave encontrada' : 'Não foi possível encontrar');
  },
  CHEIA: () => {
    const isFull = tree.isFullBinaryTree();
    console.log(isFull ? 'A árvore é cheia' : 'A árvore não é cheia');
  },
  COMPLETA: () => {
    const isComplete = tree.isCompleteBinaryTree();
    console.log(isComplete ? 'A árvore é completa' : 'A árvore não é completa');
  },
  BALANCEADA: () => {
    const isBalanced = tree.isBalanced(tree.root);
    console.log(isBalanced ? 'A árvore está balanceada' : 'A árvore não está balanceada');
  },
  PREORDEM: () => {
    console.log(tree.preOrderTraversal());
  },
  ORDEMSIMETRICA: () => {
    console.log(tree.inOrderTraversal());
  },
  POSORDEM: () => {
    console.log(tree.postOrderTraversal());
  },
  IMPRIMA: (param: string) => {
    const format = parseInt(param);
    console.log(tree.printTree(format));
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
