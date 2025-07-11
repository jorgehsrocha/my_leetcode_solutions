/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let leftPricePosition = 0;
    let rightPricePosition = 1;
    let maxPrice = 0;
    while (rightPricePosition<prices.length) {
        const leftPrice = prices[leftPricePosition];
        const rightPrice = prices[rightPricePosition];

        if (leftPrice < rightPrice) {
            const profit = rightPrice-leftPrice;
            maxPrice = Math.max(maxPrice, profit);
        } else { 
            leftPricePosition = rightPricePosition;
        }
        rightPricePosition ++;
    }
    return maxPrice;
};

// @lc code=end

