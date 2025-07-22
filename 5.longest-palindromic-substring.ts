/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let result = "";
    
    for (let i = 0; i < s.length; i++) {

        let odd = expand(s, i, i);
        let even = expand(s, i, i + 1);
        
        // Pega o maior entre os dois
        let longest = odd.length > even.length ? odd : even;
        
        // Atualiza resultado se encontrou um maior
        if (longest.length > result.length) {
            result = longest;
        }
    }
    
    return result;
}

function expand(s: string, left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}
// @lc code=end