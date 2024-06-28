"use strict"; // Treat all JS code as newer version code and perform actions according to that

/* alert(3+3) // Here we are using Node.js, not a browser, so it will not work here
The alert() function in JavaScript is used to display a simple dialog box with a specified message and an OK button. 
It is often used for debugging purposes or to provide information to the user. 
*/

// Use TC39 and MDN for documentation of JS

// Datatypes
let a = 1;         // number limit is 2^53; we can also use bigint for values greater than 2^53
let b = "Kunal"; 
let c = 1.2;       // same as number 
let d = null;      // null is object type which can be a fault or not of the language
let e = true;
let f;             // undefined type 

console.log(a, "type", typeof a);
console.log(b, "type", typeof b);
console.log(c, "type", typeof c);
console.log(d, "type", typeof d);
console.log(e, "type", typeof e);
console.log(f, "type", typeof f);

let a1 = [a, b, c, d, e, f];
let a2 = [typeof a, typeof b, typeof c, typeof d, typeof e, typeof f];

let data = a1.map((value, index) => ({
    Value: value,
    Type: a2[index]
}));

console.table(data);
