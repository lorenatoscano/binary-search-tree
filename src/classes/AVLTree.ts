import { BinarySearchTree } from './BinarySearchTree';
import { TreeNode } from './TreeNode';

export class AVLTree extends BinarySearchTree {
  search(value: number): boolean {
    return super.contains(value);
  }

  insert(value: number): void {
    super.insert(value);

    this.root = this.balance(this.root, value);
  }

  balance(node: TreeNode | null, value: number): TreeNode | null {
    if (!node) {
      return new TreeNode(value);
    }

    const balanceFactor = this.getBalanceFactor(node);

    // Caso esquerda-esquerda
    if (balanceFactor > 1 && value < node.left!.value) {
      return this.rotateRight(node);
    }

    // Caso direita-direita
    if (balanceFactor < -1 && value > node.right!.value) {
      return this.rotateLeft(node);
    }

    // Caso esquerda-direita
    if (balanceFactor > 1 && value > node.left!.value) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }

    // Caso direita-esquerda
    if (balanceFactor < -1 && value < node.right!.value) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }

  remove(value: number): void {
    super.remove(value);

    this.root = this.balance(this.root, value);
  }

  getBalanceFactor(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rotateLeft(node: TreeNode | null): TreeNode | null {
    if (node === null) {
      return node;
    }

    const newRoot = node.right;

    if (newRoot === null) {
      return node;
    }

    node.right = newRoot.left;
    newRoot.left = node;

    return newRoot;
  }

  rotateRight(node: TreeNode | null): TreeNode | null {
    if (node === null) {
      return node;
    }

    const newRoot = node.left;

    if (newRoot === null) {
      return node;
    }

    node.left = newRoot.right;
    newRoot.right = node;

    return newRoot;
  }

  isBalanced(node: TreeNode | null): boolean {
    if (!node) {
      return true;
    }

    const balanceFactor = this.getBalanceFactor(node);
    if (Math.abs(balanceFactor) > 1) {
      return false;
    }

    return this.isBalanced(node.left) && this.isBalanced(node.right);
  }
}
