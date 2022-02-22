"use strict";

//1:

// function sumTwoSmallestNumbers(...args){
//     if(sortedArray.length >1){
//         let sortedArray = args.sort((a, b) => a - b);
//         return sortedArray[0] + sortedArray[1];
//     } else {
//         console.error("Передано менее 2-х чисел") ;
//     }
// };

// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
// console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

//2:

function createCalculator(number) {

    let object = {
        sum: function (arg){
            number += arg;
            return number;
        },
        mult: function (arg){
            number = number * arg;
            return number
        },
        sub: function (arg) {
            number = number - arg;
            return number
        },
        div: function (arg) {
            number = number / arg;
            return number
        }
    }
    return object;
}
const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
//
//







