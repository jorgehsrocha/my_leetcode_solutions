/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let uniqueElCounter: number = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueElCounter] = nums[i];
            uniqueElCounter++;
        }
    }
    return uniqueElCounter;
};
// @lc code=end

