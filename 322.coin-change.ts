/*
 * @lc app=leetcode id=322 lang=typescript
 *
 * [322] Coin Change
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
    if (coins.length < 1 || coins.length > 12 ) return -1;
    if (amount > 10**4 || amount <= 0) return -1;

    const dp: number[] = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    
    for (let i=1; i<=amount; i++) {
        for (const coin of coins) {
            if (coin<=i && dp[i-coin] !== Infinity) {
                dp[i] = Math.min(dp[i], dp[i-coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end

