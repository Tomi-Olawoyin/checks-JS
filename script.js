// Reverse a String: Write a function that reverses a given string.
// Count Characters: Create a function that counts the number of characters in a string.
// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
let strOne = "emmanuel"
const revStr = (str)=>{
    let result = ""
    for(let i = 7; i >=0;i--){
        result = result + str[i]
    }
    return result
}

console.log(revStr(strOne))

const countChar= (x)=>{
    let result = 0
    for(let i = 0; i <=x.length; i++){
        result ++
    }
    return result
}
console.log(countChar(strOne))

// let sent = "i am the gOAT"
// for(let i = 0; i <=sent.length;i++){
//     console.log(sent[i].charAt().toUpperCase())

// console.log(sent.())
// const captSent = ()=>{

// }

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
// Sum of Array: Create a function that calculates the sum of all elements in an array.
// Filter Array: Implement a function that filters out elements from an array based on a given condition.
let x = [1,2,3,4,5,6,7,8,9]
const minMax = (y)=>{
    let result = []
let num = Math.min(y)
let numTwo =Math.max(y)
result=[num,numTwo]
return result
}

console.log(minMax(x))

function allEle(a){
    let result = 0
for(let i = 0; i <=a.length-1;i++){
    result = result + a[i]
}
 return result
}

console.log(allEle(x))
let b = [1,2,3,4,5,6,7,8,9]

function filtNum(a){

    a.filter((y)=>{
    y % 2 === 0?console.log(y):y
    })
}

console.log(filtNum(b))