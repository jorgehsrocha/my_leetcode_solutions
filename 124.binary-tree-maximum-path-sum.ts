/*
 * @lc app=leetcode id=124 lang=typescript
 *
 * [124] Binary Tree Maximum Path Sum
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

function maxPathSum(root: TreeNode | null): number {
    let maxInTree = -Infinity;

    function maxInPath(node: TreeNode | null) {
        if (!node) return 0;
        const leftSum = maxInPath(node.left);
        const rightSum = maxInPath(node.right);

        const currentMax = Math.max(
            node.val,
            node.val + leftSum,
            node.val + rightSum,
        );

        maxInTree = Math.max(
            maxInTree,
            currentMax,
            node.val + leftSum + rightSum
        );

        return currentMax;
    }
    if (!root.left && !root.right && root.val) return root.val;
    maxInPath(root);
    return maxInTree;
};
// @lc code=end

