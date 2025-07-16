/*
 * @lc app=leetcode id=295 lang=typescript
 *
 * [295] Find Median from Data Stream
 */

// @lc code=start
class MedianFinder {
    list: number[];
    constructor() {
        this.list = new Array();
    }

    listSize() {
        return this.list.length;
    }
    addNum(num: number): void {
        if (this.listSize() === 0 || this.list[this.listSize()-1] <= num) {
             this.list.push(num);
        }
        const foundIndex = this.list.findIndex((value) => value > num);
        this.list.splice(foundIndex,0,num);
    }

    findMedian(): number {
        const mid = Math.floor(this.listSize() / 2);
        if (this.listSize() % 2) return this.list[mid];
        else return (this.list[mid - 1] + this.list[mid]) / 2;
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

