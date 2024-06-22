/*
 * @lc app=leetcode id=1342 lang=typescript
 *
 * [1342] Number of Steps to Reduce a Number to Zero
 */

// @lc code=start

function numberOfSteps(num: number): number {
    let steps = 0
    while (num > 0) {
        if (num % 2 == 0) {
            num /= 2
        } else {
            num --
        }
        steps++
    }
    return steps
}
// @lc code=end

