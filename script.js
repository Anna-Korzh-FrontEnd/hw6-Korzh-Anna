"use strict";

//1:

// function sumTwoSmallestNumbers(...args){
//     let sortedArray = args.sort((a, b) => a - b);
//     if(sortedArray.length >1){
//         return sortedArray[0] + sortedArray[1];
//     } else {
//         console.error("Передано менее 2-х чисел") ;
//     }
// };
//
// console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
// console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
// console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")

//2:

function createCalculator(number) {
    let object = {
        x: number,
        sum: function (arg){
            object.x += arg;
            return object.x
        },
        mult: function (arg){
            object.x = object.x * arg;
            return object.x
        },
        sub: function (arg) {
            object.x = object.x - arg;
            return object.x
        },
        div: function (arg) {
            object.x = object.x / arg;
            return object.x
        }
    }
    return object;
}
const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11









