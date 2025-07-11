/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    if (nums.length <= 0 || nums.length === 1) return false;
    if (nums[0] === nums[nums.length-1]) return true;
    const uniqueItems = new Set();
    let hasDuplicate = false;
    for (const num of nums) {
        if (!uniqueItems.has(num)) {
            uniqueItems.add(num);
            continue;   
        }
        hasDuplicate = true;
    }
    return hasDuplicate;
}
// @lc code=end
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))