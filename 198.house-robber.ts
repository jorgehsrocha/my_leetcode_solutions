/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function rob(nums: number[]): number {
    let currentTotal: number = 0,
    previousTotal: number = 0;

    for (const num of nums) {
        const currentMaxTotal = Math.max(currentTotal, previousTotal + num);
        previousTotal = currentTotal;
        currentTotal = currentMaxTotal;
    }

    return Math.max(currentTotal, previousTotal);
};
// @lc code=end

