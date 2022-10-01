// problem: https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true

function sockMerchant(n, ar) {
    // Write your code here
    let pairs = 0
    ar.sort()
    
    for (let i = 0; i < n; ar[i + 1] === ar[i] ? i = i + 2 : i++) {
        if (ar[i] === ar[i + 1]) {
            pairs++;
        }
    }
    
    return pairs;
}