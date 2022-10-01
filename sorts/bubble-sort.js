const bubbleSort = (arr) => {
    let shifted = true;
    let e = arr.length;

    while (shifted === true) {
        shifted = false;
        for (let i = 0; i < e; i++) {
            if (arr[i] > arr[i + 1]) {
                const firstValue = arr[i];
                const secondValue = arr[i + 1];
                arr[i] = secondValue;
                arr[i + 1] = firstValue;
                shifted = true;
            }
        }
        e--;
    }

    return arr;
}

console.log(bubbleSort([3, 2, 1, 0]))
console.log(bubbleSort([1, 2, 3, 4]))