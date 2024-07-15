/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */
// [1,1,1,1,2,2,2,2,3]
// @lc code=start
function removeDuplicates(nums: number[]): number {
    if (!nums.length) return 0;
    const mappedNums = nums.filter((value,indexes) => ({
        num: value,
        indexes,
    }));
    console.log('mappedNums', mappedNums);
    
    return 1
};
// @lc code=end

