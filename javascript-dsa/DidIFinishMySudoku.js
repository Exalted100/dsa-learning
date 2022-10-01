/*
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. 
If the board is valid return 'Finished!', otherwise return 'Try again!'
*/


function doneOrNot(board){
    let test = 'Finished!'
      
      for (let i = 0; i < board.length; i++) {
      
        if ( board[i].includes(1) && board[i].includes(2) && board[i].includes(3) && board[i].includes(4) && board[i].includes(5) && board[i].includes(6) && board[i].includes(7) && board[i].includes(8) && board[i].includes(9) && board[i].length === 9 ) {
          
        } else {
            test = 'Try again!'
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
            test = 'Try again!'
        }
      }
      
      for (let i = 0; i < 9; i = i + 3) {
        if (board[i][0] + board[i][0+1] + board[i][0+2] + board[i+1][0] + board[i+1][0+1] + board[i+1][0+2] + board[i+2][0] + board[i+2][0+1] + board[i+2][0+2] === 45) {
    
        } else {
            test = 'Try again!'
        }
      }
      
      return test
  }

  // Other People's solutions

  function doneOrNot(rows){

    var columns = []
    ,    blocks = [];
    
    for (var i = 0; i < 9; i++) {
      columns[i] = [];
      
      for (var j = 0; j < 9; j++) {
        var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
        blocks[k] = blocks[k] || [];
        
        blocks[k].push(rows[i][j]);
        columns[i].push(rows[j][i]);
      }
    }
    
    var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
    
    var is_valid = rows.every(is_valid_row) 
      && columns.every(is_valid_row) 
      && blocks.every(is_valid_row);
    
    return is_valid ? 'Finished!' : 'Try again!';
  }

  function doneOrNot(board){
    var set1Array = new Set(),
        set2Array = new Set(),
        set3Array = new Set();
    
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++){
        set1Array.add(board[i][j]);
        set2Array.add(board[j][i]);
        set3Array.add(board[(i%3)*3+j%3][Math.floor(i/3)*3+Math.floor(j/3)]);
      }
      if (set1Array.size != 9 || set2Array.size != 9 || set3Array.size != 9 )
        return "Try again!";
      set1Array.clear();
      set2Array.clear();
      set3Array.clear();
    }
    return "Finished!";
  }

  function doneOrNot(board) {
    results = new Array(27).fill(0);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let flag = 1 << board[i][j];
        results[i] |= flag;
        results[9 + j] |= flag;
        results[18 + Math.floor(i / 3) * 3 + Math.floor(j / 3)] |= flag;
      }
    }
    return results.every(n => n === 0b1111111110) ? 'Finished!' : 'Try again!';
  }