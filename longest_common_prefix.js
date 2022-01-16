/*
LeetCode Challenge
Date: Jan 16, 2021
Problem: Longest Common Prefix
Description: 
- Write a function to find the longest common prefix string amongst an array of strings.
- If there is no common prefix, return an empty string `""`.
Example 1. 
- Input: strs = ["flowers","flow","flight"]
- Output: "fl"
Example 2. 
- Input: strs = ["dogs","racecars","car"]
- Output: ""
Constraint 
- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lower-case English letters.
*/

//--------
// Submission result
// Runtime: 119 ms, faster than 20.61% of JavaScript online submissions.
// Memory Usage: 40.7 MB, less than 35.57% of JavaScript online submissions.
// 

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    // Find shortest str 
    let shortest = 201; // according to constraint
    let shortestIdx = -1;
    let prefix = "";
    for(let i=0; i<strs.length ;i++){
        let s = strs[i];
        if(s.length < shortest){
            shortest = s.length;
            shortestIdx = i;
        }
    }
    
    for(let i=0; i<strs[shortestIdx].length; i++){
        let c = strs[shortestIdx][i];
        for(let j=0; j<strs.length; j++){
            if(strs[j][i] !== c){
                return prefix;
            }        
        }
        prefix = prefix + c;
    }
    return prefix;
};