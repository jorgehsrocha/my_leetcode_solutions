/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack: string[] = [];
    const pairs: { [key: string]: string } = 
        { 
            '(': ')',
            '{': '}',
            '[': ']'
        };
    
    for (const char of s) {
        if (pairs[char]) {
            stack.push(char); // É um char de abertura
        } else {
            // É um char de fechamento
            const last = stack.pop(); 
            if (pairs[last!] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
// @lc code=end

console.log("(]", isValid("(]"));
console.log("({[]})", isValid("({[]})"));
console.log("((((({[{[{}]}]})))))", isValid("((((({[{[{}]}]})))))"));
console.log("()", isValid("()"));

