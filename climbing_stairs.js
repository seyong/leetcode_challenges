/*
LeetCode Challenge
Date: Jan 26, 2021
Problem: Climbing Stairs
Description: 
- You are climbing a staircase. It takes n steps to reach the top.
- Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Example 1. 
- Input: n = 2
- Output: 2
Example 2. 
- Input: n = 3
- Output: 3
- Explanations: There are three ways to climb to the top.
- - 1 step + 1 step + 1 step
- - 2 step + 1 step
- - 1 step + 2 step
Constraint 
- 1 <= n <= 45
*/

//--------
// Submission result
// Runtime: 76 ms, faster than 61.99% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 38.9 MB, less than 7.96% of JavaScript online submissions for Climbing Stairs.
// 

/**
 * Using factorial function.
 * @param {number} n
 * @return {number}
 */
 function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }
  
  var climbStairs = function(n) {
      
      let nTwo = Math.floor(n / 2); // 2
      let count = 1; // only 1 step
      for(let i=1; i <= nTwo; i++){
          let nOne = n - 2*i; // i=1, nOne = 3
          let nSlot = nOne + i; // nSlot = 4;
          // compute combination, nSlot_nComb_i
          let denom = factorial(i) * factorial(nSlot - i);
          let numer = factorial(nSlot);
          let comb = numer / denom;
          count = count + comb;
  
      }
      return count;  
  };

/**
 * Without Factorial, Use an Arithmetical progression.
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    let one_before = 1;
    let two_before = 1;
    let count = 1;

    for(let i=2; i<=n; i++){
        count = one_before + two_before;
        two_before = one_before;
        one_before = count;
    }
    
    return count;
};

// n = 1 / 1
// n = 2 / 2
// n = 3 / 3
// n = 4 / 5
// n = 5 / 8
// n = 6 / 13
// n = 7 / 21
// n = 8 / 34
// n = 9 / 55