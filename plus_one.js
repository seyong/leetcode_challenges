/*
LeetCode Challenge
Date: Jan 24, 2021
Problem: Plus One
Description: 
- You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
- The digits are ordered from most significant to least significant in left-to-right order. 
- The large integer does not contain any leading 0's.
- Increment the large integer by one and return the resulting array of digits.
Example 1. 
- Input: digits = [1,2,3]
- Output: [1,2,4]
Example 2. 
- Input: digits = [9]
- Output: [1,0]
Example 3. 
- Input: digits = [9,9]
- Output: [1,1,0]
Constraint 
- 1 <= digits.length <= 100
- 0 <= digits[i] <= 9
- digits does not contain any leading 0's
*/

//--------
// Submission result
// Runtime: 98 ms, faster than 35.7% of JavaScript online submissions for Plus One.
// Memory Usage: 38.2 MB, less than 94.10% of JavaScript online submissions for Plue One.
// 

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let addup = 0;
    digits[digits.length-1]++;
    
    for(let i = digits.length - 1; i>=0; i--){
        let d = digits[i];
        d = d + addup;
        if(d < 10){
            digits[i] = d;
            return digits;
        }else{
            digits[i] = d%10;
            addup = Math.round(d/10);
        }
    }
    
    if(addup > 0){
        digits.unshift(addup)
    }
    return digits;
}