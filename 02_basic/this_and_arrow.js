const obj1 = {
    name: "Kunal",
    age: 21,

    greet: function(){
        console.log(`Hello ${this.name}`);
    },
    show : function(){
        console.log(this)
    }
}

// console.log(obj1.greet())  Run
obj1.greet()                //Run

console.log(this)
/*
Output: {}
Reason: In this the global object is an empty object that's why the answer is {}
but in case of browsers the global object is window so when we use console.log(this) we got the global object as windows and its properties 
this happens because in earlier time We use browsers to run javascript codes and global objects are windows so we can easily use it and perform opeartions on windows
but now in separate softwares like "node" ,"dino" this all are separate software through which we can run our javascript code hence object is empty

In the Browser
When you run console.log(this) in the global scope of a browser environment, this refers to the global window object.

In Node.js
When you run console.log(this) in the global scope of a Node.js module, this refers to the module's exports, which is an empty object {} by default.
*/

function run(){
    console.log(this)
}

run()

//  arrow function
const Run = () => {
    console.log(`This is arrow function`)
}

Run()

const a = () => {
    name = "Kunal"
    console.log(this);
}
a()          // in arrow function this keyowrd cant be used
obj1.show()  // in normal member function this keyword shows the properties of obj1
run()         // also this keyword also show information of global object 

// Arrow function

const add = (num1,num2) => {
    return num1 + num2
}
console.log(add(1,3))

//Similarly when their is only one of statement/code 
//in the function we can write is as
const addTwo = (num1,num2) => num1+num2
console.log(addTwo(1,3))

// also we can use () parenthesis
const addition = (num1,num2) => (num1+num2)
console.log(addition(1,3))

// returning object  needs () parenthesis
const obj_return = () => ({ name :"Kunal",age:21})
console.log(obj_return())

//Summary 
/*
   function () {}     may use return keyword or may not
   () => {}           arrow function may use return keyword may not
   () =>              dont uses return keyword
   () = > ()          used when we return object and also dont use return keyword  
*/