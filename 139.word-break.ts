/*
 * @lc app=leetcode id=139 lang=typescript
 *
 * [139] Word Break
 */

// @lc code=start
function wordBreak(s: string, wordDict: string[]): boolean {
    const dict = new Set(wordDict);
    const dp = new Array(s.length+1).fill(false);
    dp[0] = true;
    for (let i=0; i<=s.length; i++) {
        for (let j=0; j < i; j++) {
            if (dp[j] && dict.has(s.substring(i,j))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
};
// @lc code=end

