/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!subRoot) return true;
    if (!root) return false;
    
    function isSameTree(rootA: TreeNode | null, rootB: TreeNode | null) {
        if (!rootA && !rootB) return true;
        if (rootA && rootB && (rootA.val === rootB.val)) {
            return isSameTree(rootA.left, rootB.left) && isSameTree(rootA.right, rootB.right);
        }
        return false;
    }

    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};
// @lc code=end

