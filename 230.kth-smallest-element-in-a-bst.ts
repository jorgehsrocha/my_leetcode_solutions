/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    const inOrderPath: number[] = [];

    function inOrderTraversal(node: TreeNode | null) {
        if (!node) return;
        inOrderTraversal(node.left);
        inOrderPath.push(node.val);
        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);
    return inOrderPath[k-1];
}
// @lc code=end

