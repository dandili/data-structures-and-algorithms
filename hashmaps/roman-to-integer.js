/**
 * @param {string} s
 * @return {number}
 Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */
var romanToInt = function(s) {
    const map = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    let result = 0;
    s.split('').forEach((num, i) => {
        console.log(map[num]);
        if(map[num] < map[s[i+1]]) result -= map[num];
        else result += map[num];
    })
    return result;
};
