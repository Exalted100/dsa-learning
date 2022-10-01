/*
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
*/

function list(names){
    //your code here
    if (names.length === 1) {
      return names[0].name;
    }
    else if (names.length === 2) {
      return names[0].name + " & " + names[1].name;
    }
    else if (names.length === 0) {
      return "";
    } else {
        let arr = [];
        for (let i = 0; i < names.length - 2; i++) {
          arr.push(names[i].name);
        }
        let str = arr.join(", ");
        return str + ", " + names[names.length - 2].name + " & " + names[names.length - 1].name;
    }
  }