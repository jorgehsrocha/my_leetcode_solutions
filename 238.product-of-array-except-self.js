/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    const answer = new Array(nums.length);
    if (nums.length <= 0) return [];
    if (nums.length === 1) return nums[0];

    const prefixArr = [];
    const sufArr = new Array(nums.length);

    // Create Prefix Array
    for (const [index, _] of nums.entries()) {
        if (index === 0) {
            prefixArr.push(1);
            continue;
        }
        const previousFromPrefix = prefixArr[index-1];
        const previousFromNums = nums[index-1];
        prefixArr.push(previousFromPrefix * previousFromNums);
    }

    // Create Suffix Array
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            sufArr[i] = 1;
        } else {
            sufArr[i] = sufArr[i+1] * nums[i+1];
        }
        answer[i] = sufArr[i] * prefixArr[i];
    }
    return answer;
}
// @lc code=end
console.log(productExceptSelf([1,4,6,2,3]))

