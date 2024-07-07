function add(num1, num2){
    console.log(num1+num2)
}

function adding(num1, num2){
    console.log(num1+num2)
}
//add(1,2)  // Output: 3
//num3 = adding(1,3)   //Output: 4
                     //        undefined
//console.log(num3)

function addition(num1, num2){
    return num1 +num2
}
const num4 = addition(1,2) 
console.log(num4)

function greet(name){
    if(!name){     //  (!name) means (name === undefined)
        console.log(`Please enter name`)
        return
    }
    return `Hello ${name}`
}

console.log(greet("Kunal"))

function calculateCartPrice(...num){
    return num
}

console.log(calculateCartPrice(200))          // in this case fun() will work 
console.log(calculateCartPrice(200,300,400))  //But in case of multiple arguments it will not work
                                              // so we need to modify fun() using ... spread operator  
                                              // as calculateCartPrice(...num)   now it will work
                                              // Output: [ 200, 300, 400 ]

const obj1 = {
    name: "Kunal",
    age : 21,
    city: "Jahangir puri"
}

function Object_display(anyObject){
    console.log(`${anyObject.name} is ${anyObject.age} yrs old and live in ${anyObject.city}`)
}

console.log(Object_display(obj1))

// Global scope
let a = 100

//Block / Local scope
if (true){
    let a = 200
    console.log(`Value of a in local scope ${a}`)
}

console.log(`Value of a in global scope ${a}`)

//nested function and scope
function parent(){
    const parentname = "Kunal"
     
    function child(){
        const childname = "Deepak"
        console.log(`Parent name : ${parentname}`)
    }

    // console.log(`Child name : ${childname}`)
    // as childname is inside the child() function so it will not be accessible 
    // outside  as it is in local scope
    child()
}
parent()

//==================Mini hoisting ==============
//case 1:
function sum(num){
    return num + 1
}

sum(3)

const ADD = function(num){
    return num + 1
}

ADD(3)
// in case 1 sum() is called after when we properly defined sum() function
// similarly anonymous function is then value is stored in the ADD variable 

// //case 2:
// sum(3)
// function sum(num){
//     return num + 1
// }


// //addition(3)      function called here 

// const addition = function(num){
//     return num + 1
// }
// // in case 2 sum() is called before when we properly defined sum() function so will run
// // similarly addition() is called before when we properly defined addition() function and is stored
// // in the addition variable so it wont run and show error
// // why does this happen, well it happens due to the concept of hoisting in js
// // which tell about the scope, how to declare a function and how to declare variables and how js treat variables


