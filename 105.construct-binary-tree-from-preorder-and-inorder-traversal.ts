/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        function build(preorderQueue: number[], inorder: number[]): TreeNode | null {
            if (inorder.length === 0) {
                return null;
            }
            
            const rootVal = preorderQueue.shift()!;
            const idx = inorder.findIndex((val) => val === rootVal);
            const root = new TreeNode(rootVal);
            
            root.left = build(preorderQueue, inorder.slice(0, idx));
            root.right = build(preorderQueue, inorder.slice(idx + 1));
            
            return root;
        }
        
        return build([...preorder], inorder);
};
// @lc code=end

