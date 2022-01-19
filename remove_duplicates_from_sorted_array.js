/*
LeetCode Challenge
Date: Jan 19, 2021
Problem: Remove Duplicates from Sorted Array
Description: 
- Given an integer array `nums` sorted in non-decreasing order, remove the duplicates `in-place` such that each unique element appears only once. The relative order of the elements should be kept the same.
- Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array `nums`. More formally, if there are `k` elements after removing duplicates, then the first `k` elements of `nums` should be hold the final result. It does not matter what you leave beyond the first `k` elements. 
- Return `k` after placing the final result in the first `k` slots of `nums`
- Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory. 
Custom Judge:
- The judge will test your solution with the following code:
<code>
int[] nums = [...]; 
int[] expectedNums = [...];
int k = removeDuplicates(nums);
assert k == expectedNums.length;
for(int i=0; i < k; i++){
    assert nums[i] == expectedNums[i];
}
</code>
Example 1. 
- Input: nums = [1,1,2]
- Output: 2, nums = [1,2,_]
Constraint 
- 0 <= nums.length <= 3 * 10^4
- -100 <= nums[i] <= 100
- `nums` is sorted in non-decreasing order.
*/

//--------
// Submission result with comments
// Runtime: 146 ms, faster than 34.00% of JavaScript online submissions for Remove Duplicates From Sorted Array.
// Memory Usage: 42.2 MB, less than 18.02% of JavaScript online submissions for Remove Duplicates From Sorted Array.
// 

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    
    let numLen = nums.length;
    let count = 0;
    for(let i=0; i < numLen; i++){
        let d = nums[i];
        if(isNaN(d)){
            continue;
        }else{
            count++;
        }
        // looping through the end
        // check duplicates of d
        
        for(let j=i+1; j<numLen; j++){
            if(d === nums[j]){
                //splice(start, deleteCount, item1)
                nums[j] = NaN;
            }
        }
    }
    //sort the array. But be careful with sorting mechanism.
    // Array.sort()'s default sort order is ascending, 
    // built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values
    
    nums.sort((a,b) => {
        // sort b before a, if return value is > 0
        // sort a before b, if return value is < 0
        if(isNaN(a)){
            return 1;
        }else if(isNaN(b)){
            return -1;
        }else{
            return a-b
        }
    });
    return count;
};

// Version 2 with an advantage from contraints.
/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates2 = function(nums) {
    
    let numLen = nums.length;
    let count = 1;
    let pivot = nums[0];
    
    for(let i=1; i< numLen; i++){
        let d = nums[i];
        if(d === pivot){
            nums[i] = 101;
        }else{
            count++;
            pivot = nums[i];
        }
    }
    nums.sort((a,b) => a-b);
    
    return count;
};