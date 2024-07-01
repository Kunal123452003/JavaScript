// Primitive 
/*
7 types : String ,Boolean ,Number,BigInt,null
undefined ,Symbol

When we perform any action on the primitive datatypes
it is performed on the copy of that datatype variable

*/
let score = 100
console.log(score)

const a = false
console.log(a)

const bignumber = 648626287702721124n
console.log(bignumber)

const b = null
console.log(b, "type: ",typeof b )

const id1 = Symbol('123')
console.log(id1)

const id2 = Symbol('123')
console.log(id2)

//Despite having same values id2 and id1 both are different, symbol is widely uesd when we want to make a component unique
 console.log(id1 == id2)

 //Reference Datatypes
 /*
types: Array, Objects, Functions
When we perform any operation on reference datatyes js system give the reference of the memory 
of that datatype variable,  so operations are directly performed on the variable
 */

const array = [1,2,3,4,5]
console.log(typeof array)
console.log(array)

// {}  used to create an object 
const obj = {
    name: "Kunal",
    age : 21,
    Gender : "Male"
}
console.log(typeof obj)
console.log(obj)

// function(){} used to create a function
const myFun = function(){
    console.log("Hello world")
}
console.log(typeof myFun)
console.log(myFun())