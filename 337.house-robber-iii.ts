/*
 * @lc app=leetcode id=337 lang=typescript
 *
 * [337] House Robber III
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

function rob(root: TreeNode | null): number {
    /**
     * 
        DFS recursivo: Para cada nó, calculamos o máximo se roubarmos ou não
        Estado: [nãoRoubar, roubar] - máximo dinheiro para cada escolha
        Transição:
        Não roubar = máximo dos filhos (eles podem ou não ser roubados)
        Roubar = valor atual + soma dos filhos não roubados
        Resultado: Máximo entre roubar ou não roubar a raiz
        Complexidade: O(n) tempo, O(h) espaço (altura da árvore).
     */
    function treeRob(node: TreeNode | null): [number, number] {
        if (!node) return [0,0];
        const [leftNotRob, leftRob] = treeRob(node.left);
        const [rightNotRob, rightRob] = treeRob(node.right);

        const notRob = Math.max(leftNotRob, leftRob) + Math.max(rightNotRob, rightRob);
        const rob = node.val + leftNotRob + rightNotRob;
        return [notRob, rob];
    }
    const [not, rob] = treeRob(root);
    return Math.max(not, rob);
};
// @lc code=end

