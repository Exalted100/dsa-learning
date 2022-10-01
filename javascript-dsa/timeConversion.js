/* Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format */

function timeConversion(s) {
    /*
     * Write your code here.
     */
    const timeArr = s.split("")
    
    let mutatedArr = [...timeArr]
    mutatedArr.shift()
    mutatedArr.shift()
    
    let newArr = [timeArr[0] + timeArr[1], ...mutatedArr]
    
    if (timeArr[timeArr.length - 2] === "A" && newArr[0] === "12") {
        mutatedArr.pop()
        mutatedArr.pop()
        return ["00", ...mutatedArr].join("")
    } else if (timeArr[timeArr.length - 2] === "A") {
        timeArr.pop()
        timeArr.pop()
        return timeArr.join("")
    } else if (timeArr[timeArr.length - 2] === "P" && newArr[0] === "12") {
        timeArr.pop()
        timeArr.pop()
        return timeArr.join("") 
    } else {
        mutatedArr.pop()
        mutatedArr.pop()
        return [+newArr[0] + 12, ...mutatedArr].join("")
    }

}