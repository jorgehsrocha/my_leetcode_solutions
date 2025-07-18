/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
    const answer: number[][] = [];
    const combination: number[] = [];
    let sum = 0;

    function dfs(startIndex: number): void {
        if (sum === target) {
            answer.push(combination.slice());
            return;
        }
        for (let i = startIndex; i < candidates.length; ++i) {
            const c = candidates[i];
            if (sum + c > target) continue;

            sum += c;
            combination.push(c);

            dfs(i);
            
            sum -= c;
            combination.pop();
        }
    }

    dfs(0);
    
    return answer;
};
// @lc code=end

