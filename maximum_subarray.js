/*
LeetCode Challenge
Date: Jan 21, 2021
Problem: Maximum Subarray
Description: 
- Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
- A subarray is a contiguous part of an array
Example 1. 
- Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
- Output: 6
Example 2
- Input: nums = [1]
- Output: 1
Example 3
- Input: nums = [5,4,-1,7,8]
- Output: 23
Constraint 
- 1 <= nums.length <= 10^5
- 10^4 <= nums[i] <= 10^4
*/

//--------
// Submission result
// Runtime: 150 ms, faster than 24.74% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 48.3 MB, less than 91.98% of JavaScript online submissions for Maximum Subarray.
// 

var maxSubArray = function(nums) {
    let maxSum = -10001;
    let subMax = 0;
    
    for(let i=0; i<nums.length; i++){
        subMax = subMax + nums[i];
        if(maxSum < subMax){
            maxSum = subMax;
        }
        if(subMax < 0){
            subMax = 0;
        }
    }
    
    return maxSum;
};
