/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {return false;}

    var sCount = {};
    var tCount = {};

    for (let i = 0; i < s.length; i++) {
        if (!sCount[s[i]]) sCount[s[i]] = 0;
        if (!tCount[t[i]]) tCount[t[i]] = 0;
        sCount[s[i]]++;
        tCount[t[i]]++;
    }
    for (let freq in sCount) {
        if (sCount[freq] !== tCount[freq]) return false;
    }
    return true;
};

const s = "anagram", t = "nagaram";
const s1 = "car", t1 = "cat";
const s2 = "read", t2 = "dear";
const s3 = "happy", t3 = "yapph";

console.log(isAnagram(s,t));
console.log(isAnagram(s1,t1));
console.log(isAnagram(s2,t2));
console.log(isAnagram(s3,t3));
