export class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
  leftCount: number;
  rightCount: number;
  height: number;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.leftCount = 0;
    this.rightCount = 0;
    this.height = 1;
  }
}
