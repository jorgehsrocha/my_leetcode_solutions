/*
 * @lc app=leetcode id=424 lang=typescript
 *
 * [424] Longest Repeating Character Replacement
 */

// @lc code=start
function characterReplacement(s: string, k: number): number {
    if (s.length === 0) return 0;
    let maxLength = 0;
    let left = 0;
    let maxFreq = 0;
    const charCount = new Map<string, number>();

    for (let right = 0; right<s.length; right++) {
        const rightChar = s[right];
        charCount.set(rightChar, (charCount.get[rightChar] || 0) + 1);

        maxFreq = Math.max(maxFreq, charCount.get(rightChar)!);

        const windowSize = right - left + 1 

        if (windowSize - maxFreq > k) {
            const leftChar = s[left];
            charCount.set(leftChar, charCount.get(leftChar)! - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right-left+1);
    }

    return maxLength;
};
// @lc code=end

