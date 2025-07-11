/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const arrayMap = new Map();
    let result = []
    for (let i=0; i<=nums.length; i++) {
        const currentNum = nums[i];
        if (arrayMap.has(target-currentNum)) {
            result = [i,arrayMap.get(target-currentNum)];
            return result;
        }
        arrayMap.set(currentNum, i);
    }
    return result;
};
// @lc code=end

