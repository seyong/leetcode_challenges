#====
# Leet Code Challenge
# Date: Jan 11, 2021
# Problem: Tenth Line
# Description:
# Given a text file file.txt, print just the 10th line of the file.
#
# Example:
#
# Assume that file.txt has the following content:
#--file.txt
# Line 1
# Line 2
# Line 3
# Line 4
# Line 5
# Line 6
# Line 7
# Line 8
# Line 9
# Line 10
#--
# Your script should output the tenth line, which is:
# >> Line 10
# Note:
# 1. If the file contains less than 10 lines, what should you output?
# 2. There's at least three different solutions. Try to explore all possibilities.

# Read from the file file.txt and output the tenth line to stdout.
filename='file.txt'
n=1
while read line; do
# reading each line
if [ $n -eq 10 ]; 
    then
        echo $line
fi
n=$((n+1))
done < $filename