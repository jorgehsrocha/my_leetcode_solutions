/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    type frequency = number;

    const rank: Map<number,frequency> = new Map();
    const topK = new Array();

    for (const num of nums) {
        rank.set(num, (rank.get(num) || 0)+1);
    }

    return Array.from(rank.keys())
        .sort((keyA: number, keyB: number) => rank.get(keyB)! - rank.get(keyA)!)
        .slice(0,k);
}
// @lc code=end

