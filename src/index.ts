import { readFileSync } from 'fs';
import { BinarySearchTree } from './classes/BinarySearchTree';

type CommandFunction = (param: string) => void;

const tree = new BinarySearchTree();

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
    const isFound = tree.contains(value);
    console.log(isFound ? 'Chave encontrada' : 'Não foi possível encontrar');
  },
  ENESIMO: (param: string) => {
    const index = parseInt(param);
    const element = tree.getElementAtPositionInOrder(index);
    console.log(element);
  },
  POSICAO: (param: string) => {
    const value = parseInt(param);
    const index = tree.getPositionInOrder(value);
    console.log(index);
  },
  CHEIA: () => {
    const isFull = tree.isFullBinaryTree();
    console.log(isFull ? 'A árvore é cheia' : 'A árvore não é cheia');
  },
  COMPLETA: () => {
    const isComplete = tree.isCompleteBinaryTree();
    console.log(isComplete ? 'A árvore é completa' : 'A árvore não é completa');
  },
  MEDIANA: () => {
    const median = tree.getMedianElement();
    console.log(median);
  },
  MEDIA: (param: string) => {
    const value = parseInt(param);
    const median = tree.getAverageValue(value);
    console.log(median);
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
tree.printTree(2);
executeCommandsFromFile();
