"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeNode = void 0;
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.leftCount = 0;
        this.rightCount = 0;
    }
}
exports.TreeNode = TreeNode;
