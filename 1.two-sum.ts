/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const arrayMap = new Map();
    let result: number[] = []
    for (let i=0; i<=nums.length; i++) {
        const currentNum = nums[i];
        if (arrayMap.has(target-currentNum)) {
            result = [i,arrayMap[target-currentNum]];
            return [i,arrayMap[target-currentNum]]
        }
    }
    return result;
};
// @lc code=end

