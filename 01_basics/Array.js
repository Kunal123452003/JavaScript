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

let arr4 = [...arr1]   // Deep copy used ... spread operator to convert the ele of the array into individual values
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

let arr5 = arr1.join()         //.join function make the copied array elements as string
console.log(`Arr5: ${arr5}, ${typeof(arr5)}`)

// Difference between slice() and splice()
let arr6 = arr1.slice(2,4)
console.log(`Arr1 : ${arr1}, Arr6: ${arr6}`)   
/*
Output: Arr1 : 1,2,77,4,5, Arr6: 77,4
reason : using the slice func we can easily select the no of elements from another array
it won't change the ele of the original array
*/

let arr7 = arr1.splice(2,4)
console.log(`Arr1 : ${arr1}, Arr7: ${arr7}`)
/*
Output: Arr1 : 1,2, Arr7: 77,4,5
reason : using the slice func we can easily select the no of elements from another array, 
         as this function remove/sliced the part from that array  
it would change the original array
*/

let a1 = ["a","b","c"]
let a2 = ["d","e","f"]
a1.push(a2)
console.log("Arr:",a1)
/*
Output: Arr: [ 'a', 'b', 'c', [ 'd', 'e', 'f' ] ]
reason:  as we put any type of ele in the array so a2 is an array and
         when we push the a2 array its entire data is pushed in array from
         not as an individual array elements
*/

// So to merge two or more array we can use concat() function
let a3 = ["a","b","c"]
let a4 = ["d","e","f"]
//a3 = a3.concat(a4)
//console.log("A3:",a3)

// Aslo another way that is widely used is ... spread operator
a3 = [...a3, ...a4] // ... operator spread the elements and convert them to individual ele
console.log("A3: ",a3)

let a8 = [1,2,3,[4,5,2],[2,3[78,5[34,4]],78]] 
a8 = a8.flat(Infinity)     // AS the name suggest this function converts the array which have multi - d elements to 
                           // to single ele 
console.log("a8:",a8)

// We can make array using Array.from()  form the give argument  
console.log(Array.from("Kunal"))
console.log(Array.of(a1,a2,a3))    // Array.of() returns the ele in array acc to the agruments pass to the functions
console.log(Array.of(a1,a2,a3).flat(Infinity))
