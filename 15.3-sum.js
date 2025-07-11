/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

/*
 * @lc afunction threeSum(nums) {
    const answer = [];
    const sortedNums = nums.sort((a, b) => a - b);

    for(const [index,num] of sortedNums.entries()) {etcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const answer = [];
    const sortedNums = nums.sort((a,b) => a-b);

    for(const [index,num] of sortedNums.entries()) {
        if (index>0 && num === sortedNums[index-1]) {
            continue;
        }

        let left = index + 1;
        let right = sortedNums.length -1;
        
        while(left<right) {
            const sum = num + sortedNums[left] + sortedNums[right];
            if (sum>0) {
                right--;
            } else if (sum<0) {
                left++;
            } else { 
                answer.push([num, sortedNums[left], sortedNums[right]]);
                left++;
                while (sortedNums[left] === sortedNums[left-1] && left < right) {
                    left++;
                }
            }
        }

    }

    return answer;
}
// @lc code=end

console.log(threeSum([-1,0,1,2,-1,-4])); //[[-1,-1,2],[-1,0,1]]
