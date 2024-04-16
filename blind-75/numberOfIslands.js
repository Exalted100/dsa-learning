// https://leetcode.com/problems/number-of-islands/description/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numOfIslands = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let e = 0; e < grid[i].length; e++) {
            if (grid[i][e] === 1 && !((grid[i][e - 1] === 1) || (grid[i - 1] && grid[i - 1][e] === 1) || (grid[i][e + 1] === 1) || (grid[i + 1] && grid[i + 1][e] === 1))) {
                numOfIslands++;
            }
        }
    }

    return numOfIslands;
};

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]))