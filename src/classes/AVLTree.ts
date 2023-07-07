import { BinarySearchTree } from './BinarySearchTree';
import { TreeNode } from './TreeNode';

export class AVLTree extends BinarySearchTree {
  search(value: number): boolean {
    return super.contains(value);
  }

  insert(value: number): void {
    super.insert(value);

    this.root = this.balanceTree(this.root);
  }

  remove(value: number): void {
    this.root = this.removeAndBalance(this.root, value);
  }

  getBalanceFactor(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }
    return this.getHeight(node.right) - this.getHeight(node.left);
  }

  private balanceTree(node: TreeNode | null): TreeNode | null {
    if (!node) {
      return null;
    }

    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor > 1) {
      if (this.getBalanceFactor(node.right) < 0) {
        node.right = this.rotateRight(node.right);
        return this.rotateLeft(node);
      } else {
        return this.rotateLeft(node);
      }
    }
    if (balanceFactor < -1) {
      if (this.getBalanceFactor(node.left) > 0) {
        node.left = this.rotateLeft(node.left);
        return this.rotateRight(node);
      } else {
        return this.rotateRight(node);
      }
    }

    // Balanceamento dos filhos
    node.left = this.balanceTree(node.left);
    node.right = this.balanceTree(node.right);

    return node;
  }

  private removeAndBalance = (node: TreeNode | null, value: number): TreeNode | null => {
    if (!node) {
      throw new Error(`${value} não está na árvore, não pode ser removido`);
    }

    if (value < node.value) {
      node.left = this.removeAndBalance(node.left, value);
    } else if (value > node.value) {
      node.right = this.removeAndBalance(node.right, value);
    } else {
      // Nó com um filho à direita
      if (!node.left) {
        node = node.right;
      }
      // Nó com um filho à esquerda
      else if (!node.right) {
        node = node.left;
      }
      // Nó com dois filhos
      else {
        const minValue = this.getMinimum(node.right);
        node.value = minValue;
        node.right = this.removeAndBalance(node.right, minValue);
      }
    }

    // Chama o método balanceTree nos ancestrais do nó removido
    return this.balanceTree(node);
  };

  private rotateLeft(node: TreeNode | null): TreeNode | null {
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

  private rotateRight(node: TreeNode | null): TreeNode | null {
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
