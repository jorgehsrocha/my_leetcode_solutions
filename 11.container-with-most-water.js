/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let right = height.length - 1;
    let left = 0;
    let maxArea = 0;

    while (left<right) {
        const currentArea = Math.min(height[left], height[right]) * (right-left);
        maxArea = Math.max(maxArea, currentArea);
        if (height[left]<height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}
// @lc code=end

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

