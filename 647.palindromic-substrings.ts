/*
 * @lc app=leetcode id=647 lang=typescript
 *
 * [647] Palindromic Substrings
 */

// @lc code=start
function countSubstrings(s: string): number {
    let count = 0;

    function expandAroundCenter(left: number, right: number): void {
        console.log(s[left],s[right]);
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        // Palindromos de comprimento ímpar (centro em i)
        expandAroundCenter(i, i);
        // Palindromos de comprimento par (centro entre i e i+1)
        expandAroundCenter(i, i + 1);
    }
    
    return count; 
};
// @lc code=end

console.log("qwerty", countSubstrings("qwerty"))
