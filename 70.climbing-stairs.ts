/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    const BASE_VALUE_OF_STAIR = 1;
    let memo: {[key: number]: number} = {};
    
    function waysToClimb(n: number, memo:{}) {
        if (n<=1) return BASE_VALUE_OF_STAIR;
        if (memo[n]) return memo[n];
     
        memo[n] = waysToClimb(n-1, memo) + waysToClimb(n-2, memo)
        
        return memo[n];
    }
    if (n<=BASE_VALUE_OF_STAIR) return BASE_VALUE_OF_STAIR;
    
    return waysToClimb(n, memo);
};
// @lc code=end

