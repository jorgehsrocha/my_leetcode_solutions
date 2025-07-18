/*
 * @lc app=leetcode id=91 lang=typescript
 *
 * [91] Decode Ways
 */

// @lc code=start
function numDecodings(s: string): number {
    if (s.length <= 0 || s[0] === '0') return 0;
    const dp: number[] = new Array(s.length + 1).fill(0);
    dp[0] = 1; //Caso base: string vazia
    dp[1] = 1; // Primeiro caractere não é '0', é válido
    
    for (let i = 2; i <= s.length; ++i) {
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        
        const twoDigits = parseInt(s.substring(i - 2, i));
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[s.length];
};
// @lc code=end

