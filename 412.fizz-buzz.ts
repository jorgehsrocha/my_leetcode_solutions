/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
    const toCheck = Array(n).fill(true).map((_, index) => index + 1);
    return toCheck.map(num => {
        if (num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
        if (num % 3 != 0 && num % 5 != 0) return num.toString();
        return num % 3 == 0? "Fizz" : "Buzz";
    }) as string[];
};
// @lc code=end

