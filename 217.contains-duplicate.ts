/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const uniqueEls = new Set(nums)
    return uniqueEls.size < nums.length
};
// @lc code=end

