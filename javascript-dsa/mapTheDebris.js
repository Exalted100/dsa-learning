/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
*/

function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var finalArr = []
    for (let i = 0; i < arr.length; i++) {
      finalArr.push({name: arr[i].name, orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + 6367.4447, 3) / 398600.4418))})
    }
    return finalArr;
  }