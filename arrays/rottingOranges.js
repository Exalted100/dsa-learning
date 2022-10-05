// https://leetcode.com/problems/rotting-oranges/

const orangesRotting = (grid) => {
    const normalizePosition = (item) => {
        if (item[0] < 0 || item[0] >= grid.length) return 0;
        return grid[item[0]][item[1]]
    }

    let minutes = 0;
    let freshPresent = true;
    let toChange = [];

    while (freshPresent === true) {
        minutes++;
        freshPresent = false;

        for (let i = 0; i < grid.length; i++) {
            for (let e = 0; e < grid[i].length; e++) {
                if ((normalizePosition([i - 1, e]) === 2 || normalizePosition([i + 1, e]) === 2 || grid[i][e - 1] === 2 || grid[i][e + 1] === 2) && grid[i][e] === 1) {
                    toChange.push([i, e])
                    freshPresent = true;
                }
            }
        }

        for (let i = 0; i < toChange.length; i++) {
            grid[toChange[i][0]][toChange[i][1]] = 2;
        }
        
        toChange = [];
    }

    for (let i = 0; i < grid.length; i++) {
        for (let e = 0; e < grid[i].length; e++) {
            if (grid[i][e] === 1) {
                return -1
            }
        }
    }

    return minutes - 1;
}

console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))

// Try using breadth first: https://www.geeksforgeeks.org/minimum-time-required-so-that-all-oranges-become-rotten/