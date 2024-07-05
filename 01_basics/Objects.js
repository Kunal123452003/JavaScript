// Singleton    we can make a singelon object through constructor

//Ways to create the objects 

// 1. Object literals 
const sym1 = Symbol("sym1")   
const obj1 = {
//  Key : Value
    name: "Kunal",       // In backend the name key is converted to string 
    "City": "Noida",
    [sym1] : "This is a Symbol"   // Using the symbol in the obj1 as a key for a value

}

console.log(obj1.name)      // Accessing component of obj1 using .
console.log(obj1["name"])   // Accessing component of obj1 using [""]

console.log(obj1["City"]) 
console.log(obj1.City)

console.log(obj1[sym1])

//Definig a function as the member of the obj1
//Syntax:
// obj_name.function_name = function(){}
   obj1.greet = function() {
    console.log("This is a greet function")
}

console.log(obj1.greet())
/*
Output: This is a greet function
        undefined
*/
console.log(obj1.greet)
/*
Output: [Function (anonymous)]
Reason: Function is not executed only the function's reference
        is returned
*/
// Another greet fun which displays the name in obj1 
obj1.greetings = function(){
    console.log(`Hello ${this.name}`)    //using this keyword to point the obj1
}

console.log(obj1.greetings())

obj1.name = "ABC"
console.log(obj1)

Object.freeze(obj1)     //  we can prevent the an person to make changes/modifications in 
                        // in the key value of the object using the Object.freeze() function
                        // After freezing an object we cant add or delete any attribute and make any 
                        // changes
obj1.name = "DEF"
console.log(obj1)