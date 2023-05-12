import { TreeNode } from './TreeNode';

export enum TreeFormat {
  LINES = 1,
  PARENTHESES = 2,
}

export class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
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

  getMedianElement(root: TreeNode): number {
    return root.value;
  }

  getAverageValue(root: TreeNode): number {
    return root.value;
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

    if (format === TreeFormat.PARENTHESES) {
      result = '(' + root.value;

      if (root.left) {
        result += ' ' + this.printTree(root.left, format);
      }

      if (root.right) {
        result += ' ' + this.printTree(root.right, format);
      }

      result += ')';
    }

    return result;
  }
}
