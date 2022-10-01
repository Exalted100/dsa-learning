// problem: https://www.hackerrank.com/challenges/drawing-book/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

function pageCount(n, p) {
    // Write your code here
    let pageTurns = 0;
    
    if (p === 1 || (p === n - 1 && n % 2 !== 0)) {
        pageTurns = 0;
    } else if (n - p === 1 && n % 2 === 0) {
        pageTurns = 1;
    } else if (n - p <= p - 1) 
    {
        pageTurns = Math.floor((n - p) / 2)
    } else {
        pageTurns = Math.ceil((p - 1) / 2)
    }
    
    return pageTurns
}