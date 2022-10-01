/*
In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
*/

function aVeryBigSum(ar) {
    let num = 0;
    
    for (let i = 0; i < ar.length; i++) {
        num = num + ar[i]
    }

    return num
}