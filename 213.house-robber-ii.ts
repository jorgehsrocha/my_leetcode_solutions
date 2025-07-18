/*
 * @lc app=leetcode id=213 lang=typescript
 *
 * [213] House Robber II
 */

// @lc code=start
function rob(nums: number[]): number {
    if(nums.length === 1) return nums[0];

    function handler(houses: number[]) {
        let total = 0;
        let previousTotal = 0

        for (const money of houses) {
            const current = Math.max(total, previousTotal+money);
            previousTotal = total;;
            total = current;
        }
        return total;
    }
    const scenario1 = handler(nums.slice(0, -1));
    const scenario2 = handler(nums.slice(1))

    return Math.max(scenario1, scenario2);
};
// @lc code=end

