/*
LeetCode Challenge
Date: Jan 31, 2021
Problem: Merge Sorted Array
Description: 
- You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
- Merge nums1 and nums2 into a single array sorted in non-decreasing order.
- The final sorted array should not be returned by the function, 
but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, 
where the first m elements denote the elements that should be merged, 
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
Example 1.
- Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
- Output: [1,2,2,3,5,6]
Example 2. 
- Input: nums1 = [1], m = 1, nums2 = [], n = 0
- Output: [1]
Example 3.
- Input: nums1 = [0], m = 0, nums2 = [1], n = 1
- Output: [1] 
Constraint 
- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- 109^ <= nums1[i], nums2[j] <= 10^9
*/

//--------
// Submission result
// Runtime:57 ms, faster than 99.20% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 42.6 MB, less than 5.86% of JavaScript online submissions for Merge Sorted Array.
// 

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
    let n1len = m;
    let n2idx = 0;
    
    for(let i=0; i<n+m; i++){ //loop over 'n+m' times
        //get element from nums1 and nums2
        let n2 = nums2[n2idx];
        let n1 = nums1[i];
        
        //if out-ouf-range
        //  add at the end of real nums1
        if(i >= n1len){
            nums1.splice(i,0,n2);
            nums1.pop();
            n2idx = n2idx+1; 
            n1len = n1len+1;
        }else{
            if(n2 < n1){
                nums1.splice(i,0,n2);
                nums1.pop(); // delete 0 at the end.
                n2idx = n2idx + 1;
                n1len = n1len + 1;
            }
        }
    }  
};
