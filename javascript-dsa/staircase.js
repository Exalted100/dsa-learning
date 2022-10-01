/*
Staircase detail

This is a staircase of size n=4:

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size n.
*/

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let x = n - 1; x > i; x--) {
            str = str + " ";
        }
        for (let x = 0; x <= i; x++) {
            str = str + "#";
        }
        console.log(str)
    }
   
   }