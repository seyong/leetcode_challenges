/*
LeetCode Challenge
Date: Jan 13, 2021
Problem: Palindrome Number
Description: 
- Given an integer `x`, return `true` if `x` is palindrome integer. 
- An integer is palindrome when it reads the same backward as forward
Example 1. 
- Input: x = 121
- Output: true
Exampel 2.
- Input: x = -121
-Output: false
Constraint 
- -2^31 <= x <= 2^31 - 1
*/

//--------
// Submission result
// Runtime: 348 ms, faster than 15.73% of JavaScript online submissions for Palindrome Number
// Memory Usage: 49 MB, less than 13.94% of JavaScript online submissions for Palindrome Number.
// 

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let xstr = x.toString();
    for(let i=0; i<xstr.length; i++){
        if(xstr[i] === xstr[xstr.length-1-i]){
            let newstr = xstr.substr(i,xstr.length-2);
            if(newstr === "" || newstr.length === 1){
                return true;
            }
        }else{
            return false;
        }
    }
};