/*
 * @lc app=leetcode id=211 lang=typescript
 *
 * [211] Design Add and Search Words Data Structure
 */
// @lc code=start
class WordDictionary {
    private root: TrieNode;
    
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char)!;
        }
        node.isEnd = true;
    }

    search(word: string): boolean {
        return this.dfs(word, 0, this.root);
    }
    
    private dfs(word: string, index: number, node: TrieNode): boolean {
        if (index === word.length) {
            return node.isEnd;
        }
        
        const char = word[index];
        
        if (char === '.') {
            for (const child of node.children.values()) {
                if (this.dfs(word, index + 1, child)) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node.children.has(char)) {
                return false;
            }
            return this.dfs(word, index + 1, node.children.get(char)!);
        }
    }
}

class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;
    
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

