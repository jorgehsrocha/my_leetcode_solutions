/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
    if (nums.length <= 0) return 0;
    if (nums.every((num) => num === num[0])) return 1;
    if (nums.length === 1) return 1;

    const dp: Array<number> = new Array(nums.length).fill(1);
    
    for (let i=0; i<nums.length; i++) {
        for (let j=0; j<i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j]+1)
            }
        }
    }
    return Math.max(...dp);
};
// @lc code=end

