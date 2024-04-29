// Create an array of numbers and implement a function to find the sum,
//  average, and maximum value in the array

let marks = [10,20,30,40];
let sum = 0;
function getsum(){
    for(let i=0;i<marks.length;i++){
        sum += marks[i];
    }
    console.log("sum of element:" + sum);
}
getsum();


function getavrage(){
    let avg = sum/marks.length;
    console.log("Avrage of element:" +avg);
}
getavrage();

let max = marks[0];
function getmaxvalue(){
    for(let i=0;i<marks.length;i++){
        if(marks[i] > max){
            max = marks[i];
        }
    }
    console.log(max);

}

getmaxvalue();


