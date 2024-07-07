const obj1 = {
    name: "Kunal",
    age: 21,

    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

// console.log(obj1.greet())  Run
// obj1.greet()               Run

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