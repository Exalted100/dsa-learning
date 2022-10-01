const binarySearch = (arr, num) => {
    let low = 0;
    let high = arr.length;

    for (let i = 0; i < arr.length; i++) {
        let midPoint = Math.floor(low + (high - low) / 2)
        if ((midPoint < 1 && num !== arr[0]) || (midPoint > arr.length - 2 && num !== arr[arr.length - 1])) {
            return false;
        }
        if (arr[midPoint] === num) {
            return true
        } else if (arr[midPoint] > num) {
            high = midPoint;
        } else {
            low = midPoint
        }
    }
}

console.log(binarySearch([1,2,3,4,5,6], 7))