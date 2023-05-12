"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.TreeFormat = void 0;
var TreeFormat;
(function (TreeFormat) {
    TreeFormat[TreeFormat["LINES"] = 1] = "LINES";
    TreeFormat[TreeFormat["PARENTHESES"] = 2] = "PARENTHESES";
})(TreeFormat = exports.TreeFormat || (exports.TreeFormat = {}));
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    getHeight(node) {
        if (!node) {
            return 0;
        }
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    }
    getElementAtPositionInOrder(index) {
        return index;
    }
    getPositionInOrder(value) {
        return value;
    }
    getMedianElement(root) {
        var _a;
        return (_a = root === null || root === void 0 ? void 0 : root.value) !== null && _a !== void 0 ? _a : 0;
    }
    getAverageValue(root) {
        var _a;
        return (_a = root === null || root === void 0 ? void 0 : root.value) !== null && _a !== void 0 ? _a : 0;
    }
    isFullBinaryTree(root) {
        if (!root || (!root.left && !root.right)) {
            return true;
        }
        if (!root.left || !root.right) {
            return false;
        }
        return this.isFullBinaryTree(root.left) && this.isFullBinaryTree(root.right);
    }
    isCompleteBinaryTree(root) {
        return false;
    }
    preOrderTraversal() {
        return '';
    }
    inOrderTraversal() {
        return '';
    }
    postOrderTraversal() {
        return '';
    }
    printTree(root, format) {
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
exports.BinarySearchTree = BinarySearchTree;
