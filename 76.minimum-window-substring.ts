/*
 * @lc app=leetcode id=76 lang=typescript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
function minWindow(s: string, t: string): string {
    const need = new Map<string, number>();
    for (const char of t) {
        need.set(char, (need.get(char) || 0) + 1);
    }

    // Variáveis da sliding window
    let left = 0;
    let right = 0;
    let valid = 0; // quantos caracteres únicos de t já foram satisfeitos
    let minLen = Infinity;
    let start = 0; // início da substring mínima
    
    const window = new Map<string, number>();
    while (right < s.length) {
        const rightChar = s[right];
        right++;

        if (need.has(rightChar)) {
            window.set(rightChar, (window.get(rightChar) || 0) + 1);
            if (window.get(rightChar) === need.get(rightChar)) {
                valid++;
            }
        }

        // Contrair janela: quando todos caracteres de t estão incluídos
        while (valid === need.size) {
            // Atualizar resultado se encontramos janela menor
            if (right - left < minLen) {
                minLen = right - left;
                start = left;
            }
            
            // Remover caractere da esquerda
            const leftChar = s[left];
            left++;
            
            if (need.has(leftChar)) {
                if (window.get(leftChar) === need.get(leftChar)) {
                    valid--;
                }
                window.set(leftChar, window.get(leftChar)! - 1);
            }
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);

};
// @lc code=end

