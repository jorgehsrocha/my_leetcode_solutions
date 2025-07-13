/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode | null): boolean {

    function isValid(node: TreeNode | null, minValue: number, maxValue: number) {
        if (!node || node === null) return true;
        if (node.val >= maxValue || node.val <= minValue) return false;
        return isValid(node.left, minValue, node.val) && isValid(node.right, node.val, maxValue);
    }

    return isValid(root, -Infinity, Infinity);
};
// @lc code=end

