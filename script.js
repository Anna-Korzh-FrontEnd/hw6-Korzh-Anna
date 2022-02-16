"use strict";

//1:

// function sumTo(n) {
//     if ( n === 1) {
//         return 1;
//     }else {
//         return n + sumTo(n-1);
//     }
// }
// console.log(sumTo(3));
// console.log(sumTo(5));

//2:
const sentance = "Lorem ipsum dolor sit amet";
function findShort (str){
    let shortestWord = str.split(" ").sort(function(a, b) {
        return a.length - b.length;
    });
    return shortestWord[0];
}


console.log(findShort(sentance)); // sit
console.log(findShort("Hello world")); // Hello
console.log(findShort("Hi")); // Hi
console.log(findShort("She is David's sister")); // is










