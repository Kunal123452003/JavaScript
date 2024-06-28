let a = "1"
console.log(a,typeof a) // Output: 1 string

// Changing String to number
let b = Number(a)
console.log(b,typeof b)  // Output: 1 number

let a2 = "1abc"
console.log(a2,typeof a2)  // Output: 1abc string

//Changing String to number and displaying the value after conversion
let b2 = Number(a2)
console.log(b2,typeof b2)  
/*
Output:
NaN number      Here NaN means Not a Number as "1abc" also has abc which cant be converted to a number
                so it shows a NaN value  
*/

let c = 1
let d = 0

console.log(c,typeof c)
console.log(d,typeof d)

// Converting to boolean values
let c1 = Boolean(c)
let d1 = Boolean(d)
console.log(c1,typeof c1)   // After boolean conversion 1 becomes true and 0 becomes false
console.log(d1,typeof d1)