/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let profit = 0
    for (let i = 0; i<=prices.length; i++) {
        if (prices[i+1] > prices[i]) {
            profit += prices[i+1] - prices[i]
        } 
    }
    return profit
    
};
// @lc code=end

