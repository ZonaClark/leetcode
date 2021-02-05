// Regular Expression Matching
var isMatch = function(s, p) {
    let pl = p.length, sl = s.length;
    let memo = Array(sl+1).fill().map(val => Array(pl+1).fill(-1));
    let dp = (i, j) => {
        if(memo[i][j] === -1) {
            let ans, firstMatch;
            if (j === pl) {
                ans = i === sl;
            } else {
                firstMatch = s[i] !== undefined && (p[j] === s[i] || p[j] === '.');
                if(p[j+1] === '*') {
                    ans = dp(i, j+2) || firstMatch && dp(i+1, j);
                }
                else {
                    ans = firstMatch && dp(i+1, j+1);
                }
            }
            memo[i][j] = ans;
        }
        return memo[i][j];
    }
    return dp(0, 0);
}

console.log(isMatch("mississippi", "mis*is*p*."));
