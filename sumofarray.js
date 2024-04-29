// Write a function that takes two parameters and returns their sum.

let number = [10,20]
// console.log("number total sum-",number.length)
let sum = 0
for (let index = 0; index < number.length; index++) {
    // represent index of array
    // console.log("index",index)
    sum = sum + Number(number[index])      //return sum

}

console.log("sum",sum)
