/*
LeetCode Challenge
Date: Jan 17, 2021
Problem: Valid Parentheses
Description: 
- Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`, 
determine if the input string is valid.
- An input string is valid if: 
- 1. Open brackets must be closed by the same type of brackets.
- 2. Open brackets must be closed in the correct order. 
Example 1. 
- Input: s = "()"
- Output: true
Example 2. 
- Input: s = "()[]{}"
- Output: true
Example 3.
- Input: s = "(]"
- Output: false
Constraint 
- 1 <= s.length <= 10^4
- s consists of parentheses only '(){}[]'
*/

//--------
// Submission result
// Runtime: 94 ms, faster than 40.80% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 40.2 MB, less than 25.43% of JavaScript online submissions for Valid Parentheses.
// 

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) { 
    // parentheses: (), {}, []
    // Without Regular Expression
    let ch_stack = [];
    const opening_brackets = ['(', '{', '['];
    const closing_brackets = [')', '}', ']'];
    
    for(let i=0; i<s.length; i++){
        let c = s[i];
        //  if the opening bracket, push to the stack
        let opening_idx = opening_brackets.findIndex(ch => ch === c);
        if(opening_idx >= 0){
            ch_stack.push(c);
        }else{
            let closing_idx = closing_brackets.findIndex(ch => ch === c);
            let popped = ch_stack.pop();
            if(popped !== opening_brackets[closing_idx]){
                return false;
            }
        }
        //  else if the closing bracket, pop a ch from the stack and compare
        //      if nothing matched, return false
        //      else reduce s
    }
        
    return ch_stack.length === 0
};