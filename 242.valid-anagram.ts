/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    
    const charCount = new Map<string, number>();
    
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of t) {
        const count = charCount.get(char);
        if (!count) return false;
        charCount.set(char, count - 1);
    }
    
    return true;
};
// @lc code=end

