// JS Array are resizable
// Two types of copy of array can be made
// 1. sallow copy: array which have the same memory referenace 
// 2. deep copy: array which dont have the same memory referenace

let arr1 = [1,2,3,4,5]
let arr2 = [10,110,20,'Kunal',3.4]
//console.log(`Arr1: ${arr1} \nArr2: ${arr2}`)

let arr3 = new Array(1,2,3,4,5)
//console.log(`Arr3 ${arr3}`)

// Array methods 
arr1.push(45)    //To add elements in array 
console.log(`arr1 ${arr1}`)

let arr4 = [...arr1]   // Deep copy used ... spread operator
console.log(`arr4 ${arr4}`)

arr1[2] = 77
console.log(`arr1 ${arr1}`)
console.log(`arr4 ${arr4}`)

arr1.pop()       // to delete last value in array
console.log(`arr1 ${arr1}`)

arr1.unshift(90)   // adds ele at the starting of array, 
                   //as the ele is add at the starting all the elements have to be shift which can increase processing time
console.log(`arr1 ${arr1}`)

arr1.shift(90)   // remove ele at the starting of array, 
                   //as the ele is remove at the starting all the elements have to be shift which can increase processing time
console.log(`arr1 ${arr1}`)

console.log(arr1.length)  

console.log(arr1.includes(5)) //it is used to check whether element is in the array returns "true"  if not returns "false"

console.log(arr1.indexOf(5)) // if ele is in the array it returns its index , if not retruns -1
