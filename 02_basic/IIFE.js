// IIFE: Immediately Invoked Function Expressions
// When we want certain function to be invoked during the starting of a program,execution 
// we use IIFE
// Syntax: ( #Code )();    ";" is used to stop the invoked function
// same as normal function function_name(argument);
(function A1(){
    // this function is a named IIFE
    console.log("A1 function is invoked");
})();

( () => {
    // this is an unnamed IIFE
    console.log("() arrow function is also invoked")
})();

( (name) => {
    console.log(`Hello ${name}`)
})("Kunal");

