/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
    // your code
    var news = s.split("");
    let returned = [];
    for (let i = 0; i < news.length; i++) {
    let sing = [];
    sing.push(news[i].toUpperCase());
    sing.push(news[i].repeat(i).toLowerCase());
    let singer = sing.join("");
    returned.push(singer);
    }
    return returned.join("-");
  }