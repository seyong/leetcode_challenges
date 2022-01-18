/*
LeetCode Challenge
Date: Jan 18, 2021
Problem: Merge Two Sorted Lists
Description: 
- You are given the heads of two sorted linked lists `list1` and `list2`. 
- Merge the two lists in a one sorted list. The list should be made by splicing together 
the nodes of the first two lists. 
- Return the head of the merged linked list.
Example 1. 
- Input: list1 = [1,2,4], list2 = [1,3,4]
- Output: [1,1,2,3,4,4]
Constraint 
- The number of nodes in both lists is in the range [0, 50]
- -100 <= Node.val <= 100
- Both list1 and list2 are sorted in non-decreasing order. 
*/

//--------
// Submission result
// Runtime: 76 ms, faster than 95.74% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.6 MB, less than 42.41% of JavaScript online submissions for Merge Two Sorted Lists.
// 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if(list1 === null){
        return list2;
    }
    
    if(list2 === null){
        return list1;
    }
    
    let dummy = list1;
    list1 = list1.next;
    dummy.next = null;
    let pivot = list2;
    let prev_node = null;
    
    while(pivot !== null){
        if(dummy.val >= pivot.val){
            if(pivot.next === null){
                pivot.next = dummy;
                break;
            }else{
                prev_node = pivot;
                pivot = pivot.next;    
            }
        }else if(dummy.val < pivot.val){
            dummy.next = pivot;
            if(prev_node !== null){
                prev_node.next = dummy;    
            }else{
                list2 = dummy;
            }
            break;
        }
    }
    
    return mergeTwoLists(list1,list2);
};