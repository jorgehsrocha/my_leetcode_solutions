/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    const cleanedWord = (s.replace(/[^a-zA-Z0-9]/g, '').split(' ').join('')).toLowerCase()
    return cleanedWord === reverseWord(cleanedWord)
};



function reverseWord(word: string): string {
    const chars = Array.from(word)
    let palindromo: Array<string> = []
    for (let i=chars.length; i>=0; i--) {
        palindromo.push(chars[i])
    }
    return palindromo.join('').trim()
}
// @lc code=end

