/*
 * @lc app=leetcode id=1672 lang=typescript
 *
 * [1672] Richest Customer Wealth
 */

// @lc code=start
function maximumWealth(accounts: number[][]): number {
    const amounts = accounts.map(customer => {
        return customer.reduce((acc, curr) => acc + curr, 0);
    })
    return Math.max(...amounts);
};
// @lc code=end

