/*
Given a 6 * 6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in Arr is a subset of values with indices falling in this pattern in arr's graphical representation:

a b c
  d
e f g
There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 * 6.

Example

arr =
-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
The 16 hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
The highest hourglass sum is 28 from the hourglass beginning at row 1, column 2:

0 4 3
  1
8 6 6
*/

function hourglassSum(arr) {
    let arr2 = []
    for (let i = 0; i < 4; i++) {
        for (let e = 0; e < 4; e++) {
            arr2.push(arr[i][e] + arr[i][e + 1] + arr[i][e + 2] + arr[i + 1][e + 1] + arr[i + 2][e] + arr[i + 2][e + 1] + arr[i + 2][e + 2])
        }
    }
    
    return Math.max(...arr2)
}
