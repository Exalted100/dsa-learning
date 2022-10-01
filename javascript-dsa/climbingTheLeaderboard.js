//Link: https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

function climbingLeaderboard(ranked, player) {
    // Write your code here
    let newArr = []
    let positions = []
    for (let i  = 0; i < ranked.length; i++) {
        if (ranked[i] !== ranked[i - 1]) newArr.push(ranked[i])
    }
    
    for (let i = 0; i < player.length; i++) {
        if (player[i] < newArr[newArr.length - 1]) {
                positions.push(newArr.length + 1)
            } else {
                for (let e = 0; e < newArr.length; e++) {            
                    if (player[i] >= newArr[e]) {
                        positions.push(e + 1)
                        break
                    }
        }
            }
    }
    
    return positions
}