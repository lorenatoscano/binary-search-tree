import { TreeNode } from './TreeNode';

export enum TreeFormat {
  LINES = 1,
  PARENTHESES = 2,
  DEBUG = 3,
}

export class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  contains(value: number): boolean {
    return this._contains(this.root, value);
  }

  private _contains(node: TreeNode | null, value: number): boolean {
    if (!node) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (node.value < value) {
      return this._contains(node.left, value);
    } else {
      return this._contains(node.right, value);
    }
  }

  insert(value: number): void {
    let parentNode: TreeNode | null = null;
    let currentNode: TreeNode | null = this.root;

    while (currentNode !== null) {
      parentNode = currentNode;
      if (value < currentNode.value) {
        currentNode.leftCount++;
        currentNode = currentNode.left;
      } else {
        currentNode.rightCount++;
        currentNode = currentNode.right;
      }
    }

    if (parentNode === null) {
      this.root = new TreeNode(value);
    } else if (value < parentNode.value) {
      parentNode.left = new TreeNode(value);
    } else if (value > parentNode.value) {
      parentNode.right = new TreeNode(value);
    } else {
      throw new Error(`${value} já está na árvore, não pode ser inserido`);
    }
  }

  remove(value: number): void {
    this._remove(this.root, value);
  }

  private _remove(node: TreeNode | null, value: number): TreeNode | null {
    if (!node) {
      throw new Error(`${value} não está na árvore, não pode ser removido`);
    }

    if (value < node.value) {
      node.leftCount--;
      node.left = this._remove(node.left, value);
    } else if (value > node.value) {
      node.rightCount--;
      node.right = this._remove(node.right, value);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const substitute = this.getMinimum(node.right);
        node.value = substitute;
        node.rightCount--;
        node.right = this._remove(node.right, substitute);
      }
    }

    return node;
  }

  getHeight(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  getMinimum(node: TreeNode | null): number {
    while (node && node.left) {
      node = node.left;
    }
    if (!node) {
      throw new Error('A árvore está vazia');
    }

    return node.value;
  }

  getMaximum(node: TreeNode | null): number {
    while (node && node.right) {
      node = node.right;
    }
    if (!node) {
      throw new Error('A árvore está vazia');
    }

    return node.value;
  }

  getElementAtPositionInOrder(index: number): number {
    const element = this._getElementAtPositionInOrder(this.root, index);
    if (!element) {
      throw new Error(`Não foi possível obter o elemento na posição ${index}`);
    }

    return element;
  }

  private _getElementAtPositionInOrder(node: TreeNode | null, index: number): number | null {
    if (!node) {
      return null;
    }

    const leftCount = node.leftCount;

    if (index === leftCount + 1) {
      return node.value;
    } else if (index <= leftCount) {
      return this._getElementAtPositionInOrder(node.left, index);
    } else {
      return this._getElementAtPositionInOrder(node.right, index - leftCount - 1);
    }
  }

  getPositionInOrder(value: number): number {
    const index = this._getPositionInOrder(this.root, value, 0);

    if (!index) {
      throw new Error(`O elemento ${value} não está na árvore`);
    }
    return index;
  }

  private _getPositionInOrder(node: TreeNode | null, value: number, count: number): number | null {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      return this._getPositionInOrder(node.left, value, count);
    } else if (value > node.value) {
      return this._getPositionInOrder(node.right, value, count + node.leftCount + 1);
    } else {
      return count + node.leftCount + 1;
    }
  }

  getNodeByValue(value: number): TreeNode {
    const node = this._getNodeByValue(this.root, value);

    if (!node) {
      throw new Error(`O elemento ${value} não está na árvore`);
    }

    return node;
  }

  private _getNodeByValue(node: TreeNode | null, value: number): TreeNode | null {
    if (!node) {
      return null;
    }

    if (value < node.value) {
      return this._getNodeByValue(node.left, value);
    } else if (value > node.value) {
      return this._getNodeByValue(node.right, value);
    } else {
      return node;
    }
  }

  getMedianElement(): number {
    if (!this.root) {
      throw new Error('A árvore está vazia');
    }

    if (this.root.leftCount === this.root.rightCount) {
      return this.root.value;
    }

    const totalNodes = this.root.leftCount + this.root.rightCount + 1;
    const medianIndex = Math.floor(totalNodes / 2) + (totalNodes % 2);

    return this.getElementAtPositionInOrder(medianIndex);
  }

  getSumOfValues(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    return node.value + this.getSumOfValues(node.left) + this.getSumOfValues(node.right);
  }

  getAverageValue(rootValue: number): number {
    const root = this.getNodeByValue(rootValue);

    if (!root) {
      throw new Error('A árvore está vazia');
    }

    const totalNodes = root.leftCount + root.rightCount + 1;
    const sum = this.getSumOfValues(root);
    console.log(`DEBUG - Subarvore do ${rootValue}: `);
    console.log(root);
    console.log('DEBUG - Total: ', totalNodes);
    console.log('DEBUG - Soma: ', sum);

    return sum / totalNodes;
  }

  isFullBinaryTree(root: TreeNode | null): boolean {
    if (!root || (!root.left && !root.right)) {
      return true;
    }
    if (!root.left || !root.right) {
      return false;
    }

    return this.isFullBinaryTree(root.left) && this.isFullBinaryTree(root.right);
  }

  // @TODO
  isCompleteBinaryTree(root: TreeNode | null): boolean {
    return false;
  }

  preOrderTraversal(): string {
    return this._preOrderTraversal(this.root);
  }

  private _preOrderTraversal(node: TreeNode | null): string {
    let result = '';

    if (node) {
      result += node.value;
      if (node.left) {
        result += ' ' + this._preOrderTraversal(node.left);
      }
      if (node.right) {
        result += ' ' + this._preOrderTraversal(node.right);
      }
    }

    return result;
  }

  inOrderTraversal(): string {
    return this._inOrderTraversal(this.root);
  }

  private _inOrderTraversal(node: TreeNode | null): string {
    let result = '';

    if (node) {
      if (node.left) {
        result += this._inOrderTraversal(node.left);
      }
      result += node.value + ' ';
      if (node.right) {
        result += this._inOrderTraversal(node.right);
      }
    }

    return result;
  }

  postOrderTraversal(): string {
    return this._postOrderTraversal(this.root);
  }

  private _postOrderTraversal(node: TreeNode | null): string {
    let result = '';

    if (node) {
      if (node.left) {
        result += this._postOrderTraversal(node.left) + ' ';
      }
      if (node.right) {
        result += this._postOrderTraversal(node.right) + ' ';
      }
      result += node.value;
    }

    return result;
  }

  printTree(format: TreeFormat): string {
    if (format === TreeFormat.LINES) {
      return this.printWithLines(this.root, 0);
    } else if (format === TreeFormat.PARENTHESES) {
      return this.printWithParentheses(this.root);
    } else if (format === TreeFormat.DEBUG) {
      console.log(this.root);
      return '';
    } else {
      throw new Error('Formato inválido');
    }
  }

  private printWithParentheses(node: TreeNode | null): string {
    let result = '';

    if (node) {
      result = '(' + node.value;

      if (node.left) {
        result += ' ' + this.printWithParentheses(node.left);
      }
      if (node.right) {
        result += ' ' + this.printWithParentheses(node.right);
      }

      result += ')';
    }

    return result;
  }

  private printWithLines(node: TreeNode | null, level: number): string {
    let result = '';

    if (node) {
      const indentation = '\t'.repeat(level);
      const line = '-'.repeat(35 - level * 7);

      result += indentation + node.value + line + '\n';

      result += this.printWithLines(node.left, level + 1);
      result += this.printWithLines(node.right, level + 1);
    }

    return result;
  }
}
