/*
LeetCode Challenge
Date: Jan 20, 2021
Problem: Implement strStr()
Description: 
- Implement `strStr()` function
- Return the index of the first occurence of needle in haystack, or -1 if `needle` is not part of `haystack`.
- Return 0, if `needle` is an empty string
Example 1. 
- Input: haystack="hello", needle = "ll"
- Output: 2
Example 2. 
- Input: haystack="aaaaa", needle = "baa"
- Output: -1
Example 3. 
- Input: haystack="", needle = ""
- Output: 0
Constraint 
- 0 <= haystack.length, needle.length <= 5 * 10^4
- haystack and needle consist of lower-case English characters.
*/

//--------
// Submission result
// Runtime: 154 ms, faster than 36.39% of JavaScript online submissions for Two Sum.
// Memory Usage: 40.6 MB, less than 32.63% of JavaScript online submissions for Two Sum.
// 

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // regular expression version.
    if(needle === "") return 0;
    
    let re = new RegExp(needle,'g');
    const reResult = re.exec(haystack);
    //console.log(reResult);
    return (reResult === null)? -1 : reResult.index;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr2 = function(haystack, needle) {
    // loop version
    if(needle.length < 1) return 0;
    
    let firstCh = needle[0];
   
    for(let i=0; i < haystack.length; i++) {      
        if(firstCh === haystack[i]){
            const candidate = haystack.substring(i,needle.length+i);
            if(candidate === needle){
                return i;
            }
        }
    }
    
    return -1;
};