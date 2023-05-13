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
      return;
    }
  }

  getHeight(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  getElementAtPositionInOrder(index: number) {
    return index;
  }

  getPositionInOrder(value: number): number {
    return value;
  }

  getMedianElement(root: TreeNode | null): number {
    return root?.value ?? 0;
  }

  getAverageValue(root: TreeNode | null): number {
    return root?.value ?? 0;
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

  isCompleteBinaryTree(root: TreeNode | null): boolean {
    return false;
  }

  preOrderTraversal(): string {
    return '';
  }

  inOrderTraversal(): string {
    return '';
  }

  postOrderTraversal(): string {
    return '';
  }

  printTree(root: TreeNode | null, format: TreeFormat): string {
    if (!root) {
      return '';
    }

    let result = '';
    if (format === TreeFormat.DEBUG) {
      const queue: TreeNode[] = [];
      queue.push(root);
      while (queue.length) {
        let node = queue.pop();
        if (node?.left) {
          queue.push(node.left);
        }
        if (node?.right) {
          queue.push(node.right);
        }
        console.log(node);
      }
    } else if (format === TreeFormat.PARENTHESES) {
      result = '(' + root.value;

      if (root.left) {
        result += ' ' + this.printTree(root.left, format);
      }

      if (root.right) {
        result += ' ' + this.printTree(root.right, format);
      }

      result += ')';
    } else {
      throw new Error('Formato inválido');
    }

    return result;
  }

  remove(value: number): void {}
}
