/*
 * @lc app=leetcode id=55 lang=typescript
 *
 * [55] Jump Game
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    if (!nums || nums.length === 0) return false;
    if (nums.length === 1) return true;
    const memo = new Map<number, boolean>();

    function jump(position: number) {
        if (position >= nums.length - 1) return true;
        if (nums[position] === 0) return false;
        if (memo.has(position)) return memo.get(position)!;
        
        for (let steps = 1; steps <= nums[position]; steps++) {
            if (jump(position + steps)) {
                memo.set(position, true);
                return true;
            }
        }
        
        memo.set(position, false);
        return false; 
    }
    return jump(0);
};
// @lc code=end

