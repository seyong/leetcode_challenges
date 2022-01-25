/*
LeetCode Challenge
Date: Jan 25, 2021
Problem: My Sqrt
Description: 
- Given a non-negative integer x, compute and return the square root of x.
- Since the return type is an integer, the decimal digits are truncated, 
and only the integer part of the result is returned.
- Note: You are not allowed to use any built-in exponent function or operator, 
such as pow(x, 0.5) or x ** 0.5.
Example 1.
- Input: x = 4
- Output: 2
Example 2. 
- Input: x = 8
- Output: 2
Constraint 
- 0 <= x <= 2^31 - 1
*/

//--------
// Submission result
// Runtime: 112 ms, faster than 53.07% of JavaScript online submissions for Sqrt(x).
// Memory Usage: 40.5 MB, less than 33.02% of JavaScript online submissions for Sqrt(x).


/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    // without Math library
    let d = 1;
    while(x >= d*d){
       d = d + 1; 
    }
    return d-1;
};