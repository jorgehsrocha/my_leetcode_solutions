/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    for (let i=1; i<=k; i++) {
        const last = nums[nums.length-1]
        nums.unshift(last)
        nums.pop()
    }
};
// @lc code=end

