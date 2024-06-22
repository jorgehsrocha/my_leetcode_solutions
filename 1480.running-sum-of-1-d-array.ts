/*
 * @lc app=leetcode id=1480 lang=typescript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
    const arrSum: number[] = []
    if (nums.length <= 0 || nums.length > 1000 ) return []
    
    for (let i = 0; i < nums.length; i++) {
        arrSum[i] = (i === 0) ? nums[i] : arrSum[i - 1] + nums[i]
    }
    return arrSum
};
// @lc code=end

