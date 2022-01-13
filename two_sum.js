/*
LeetCode Challenge
Date: Jan 11, 2021
Problem: Two Sum
Description: 
- Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
- You may assume that each input would have exactly one solution, and you may not use the same element twice. 
- You can return the answer in order. 
Example 1. 
- Input: nums = [2,7,11,15], target = 9
- Output: [0, 1]
Constraint 
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10&9
- only one valid answer exists
*/

//--------
// Submission result
// Runtime: 237 ms, faster than 10.14% of JavaScript online submissions for Two Sum.
// Memory Usage: 39.1 MB, less than 95.89% of JavaScript online submissions for Two Sum.
// 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    /*
    Constraint 
    - 2 <= nums.length <= 10^4
    - -10^9 <= nums[i] <= 10^9
    - -10^9 <= target <= 10&9
    - only one valid answer exists
    Things to consider
    - Fail cases
    */
    for(let i=0; i<nums.length; i++){
      let val1 = nums[i];
        
      for(let j=i+1; j<nums.length; j++){
          if(val1 + nums[j] === target){
              return [i,j]
          }    
      }
    }  
      
  };