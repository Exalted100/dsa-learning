/*Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.

I added a condition to make the function work even where the array has more than nine values, but not when there are more than nine arrays.
*/

//My solution

function validSolution(board){
    //TODO
    let test = true
    
    for (let i = 0; i < board.length; i++) {
    
      if ( board[i].includes(1) && board[i].includes(2) && board[i].includes(3) && board[i].includes(4) && board[i].includes(5) && board[i].includes(6) && board[i].includes(7) && board[i].includes(8) && board[i].includes(9) && board[i].length === 9 ) {
        
      } else {
          test = false
      }
    }
    
    firstArr = []
    secondArr = []
    thirdArr = []
    fourthArr = []
    fifthArr = []
    sixthArr = []
    seventhArr = []
    eightArr = []
    ninthArr = []
    
    for (let i = 0; i < 9; i++) {
      firstArr.push(board[i][0])
    }
    
      for (let i = 0; i < 9; i++) {
      secondArr.push(board[i][1])
    }
    
      for (let i = 0; i < 9; i++) {
      thirdArr.push(board[i][2])
    }
    
      for (let i = 0; i < 9; i++) {
      fourthArr.push(board[i][3])
    }
    
      for (let i = 0; i < 9; i++) {
      fifthArr.push(board[i][4])
    }
    
      for (let i = 0; i < 9; i++) {
      sixthArr.push(board[i][5])
    }
    
      for (let i = 0; i < 9; i++) {
      seventhArr.push(board[i][6])
    }
    
      for (let i = 0; i < 9; i++) {
      eightArr.push(board[i][7])
    }
    
      for (let i = 0; i < 9; i++) {
      ninthArr.push(board[i][8])
    }
    
    let boardOther = [firstArr, secondArr, thirdArr, fourthArr, fifthArr, sixthArr, seventhArr, eightArr, ninthArr]
    
    for (let i = 0; i < 9; i++) {
    
      if ( boardOther[i].includes(1) && boardOther[i].includes(2) && boardOther[i].includes(3) && boardOther[i].includes(4) && boardOther[i].includes(5) && boardOther[i].includes(6) && boardOther[i].includes(7) && boardOther[i].includes(8) && boardOther[i].includes(9) && boardOther[i].length === 9 ) {
        
      } else {
          test = false
      }
    }
    
    for (let i = 0; i < 9; i = i + 3) {
      if (board[i][0] + board[i][0+1] + board[i][0+2] + board[i+1][0] + board[i+1][0+1] + board[i+1][0+2] + board[i+2][0] + board[i+2][0+1] + board[i+2][0+2] === 45) {
  
      } else {
          test = false
      }
    }
    
    return test
  }


//Other solutions
function equals45(n){
    return n == 45;
  }
  
  function validSolution(board){
    var sumh = [0,0,0,0,0,0,0,0,0];
    var sumv = [0,0,0,0,0,0,0,0,0];
    osums = [[0,0,0],[0,0,0],[0,0,0]];
    for (var i=0;i<9;i++){
      for (var j=0;j<9;j++){
        sumh[i] += board[i][j];
        sumv[j] += board[i][j];
        osums[Math.floor(i/3)][Math.floor(j/3)] += board[i][j];
      }
    }
    for (var i=0;i<3;i++) if (!osums[i].every(equals45)) return false;
    return (sumh.every(equals45) && sumv.every(equals45));
  }

  function validSolution(board){
    var validSet = s => s.size == 9 && !s.has(0);
    var rowSet = i => board[i].reduce((s,v) => s.add(v), new Set());
    var columnSet = i => board.reduce((s,v) => s.add(v[i]), new Set());
    var boxSet = ([r,c]) => board.slice(r,r+3).reduce((s,v) => v.slice(c,c+3).reduce((s,v) => s.add(v), s), new Set());
    var boxCorner = i => [Math.floor(i / 3) * 3,(i % 3) * 3];
    for (var i = 0; i < 9; i++)
      if ( !validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i))) )
        return false;
    return true;
  }

  function validSolution(board){
    // check horizontal lines
    for(var j=0; j<9; j++){
      if(!check(board[j])) return false;
    }
    
    // check vertical lines
    for(var j=0; j<9; j++){
      var line = [];
      for(var k=0; k<9; k++){
        line.push(board[k][j]);
      }
      if(!check(line)) return false;
    }
    
    // check 3x3 squares
    for(var j=0; j<9; j+=3){
      for(var k=0; k<9; k+=3){
        var square = [];
        for(var l=j; l<j+3; l++){
          for(var m=k; m<k+3; m++){
            square.push(board[l][m]);
          }
        }
        if(!check(square)) return false;
      }
    }
    
    // if it hasn't returned false so far then we
    // have a valid 9x9 square, so return true
    return true;
  }
  
  // checks that an array of length 9 contains 
  // exactly the numbers 1, 2, ..., 9
  function check(numbers){
    return numbers.slice(0).sort().every(function(e, i){return e==i+1;});
  }