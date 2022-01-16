/*
LeetCode Challenge
Date: Jan 16, 2021
Problem: Roman to Integer
Description: 
- Roman numbers are represented by seven different symbols: I, V, X, L, C, D, and M
- Each symbols represented following integer values:
- - 'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D': 500, 'M':1000
- For example, 2 is written as `II` in Roman numeral. 12 is written as `XII`
- Roman numerals are usually written largest to smallest from left to right. However, the numeral 
for four is not IIII. Instead, the number four is written as IV. Because the one is before 
the five we subtract it making four. The same principle applies to the number nine, 
which is written as IX. There are six instances where subtraction is used:
- - I can be placed before V (5) and X (10) to make 4 and 9. 
- - X can be placed before L (50) and C (100) to make 40 and 90. 
- - C can be placed before D (500) and M (1000) to make 400 and 900.
Example 1. 
- Input: s = "LVIII"
- Output: 58
Example 2.
- Input: s = "MCMXCIV"
- Output: 1994

Constraint 
- s <= s.length <= 15
- `s` contains only the characters (`I`, `V`, `X`, `L`, `C`, `D`, `M`)
- It is guaranteed that `s` is valid roman numeral in the range [1, 3999]

//--------
// Submission result
// Runtime: 112 ms, faster than 99.97% of JavaScript online submissions for Roman-to-Integer
// Memory Usage: 44.8 MB, less than 65.32% of JavaScript online submissions for Roman-to-Integer.

/**
 * @param {string} s
 * @return {number}
 */
// This code didn't consider the constraints explained above.
 var romanToInt = function(s) {
    const symbols = {'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D': 500, 'M':1000};
    
    let ret = 0;
    for(let i=0; i<s.length; i++){
        let sym = s[i];
        let symNext = s[i+1];
        //let val = symbols[sym];
        
        // consider 4,9,40,90,400,900
        if(sym === 'I'){
            if(symNext === 'V' || symNext === 'X'){
                ret = ret + symbols[symNext] - symbols[sym];
                i = i+1;
            }else{
                ret = ret + symbols[sym];
            }
        }else if(sym === 'X'){
          if(symNext === 'L' || symNext === 'C'){
            ret = ret + symbols[symNext] - symbols[sym];
            i = i+1;
          }else{
              ret = ret + symbols[sym];
          }
        }else if(sym === 'C'){
          if(symNext === 'D' || symNext === 'M'){
            ret = ret + symbols[symNext] - symbols[sym];
            i = i+1;
          }else{
              ret = ret + symbols[sym];
          }
        }else{
            ret = ret + symbols[sym];
        }
        // exceptions
        // IV: 4, IX: 9, XL: 40, XC: 90, CD:400, CM:900
        // I, II, III, IV, V, VI, VII, VIII, IX
    }
    return ret;
};
