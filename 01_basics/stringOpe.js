// Normal string
let a = "Kunal"
console.log(a)

// Normal arithematic operations
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**3)

// Normal string operations
let b = 'ABC'
let c = "DEF"
console.log(b + c)

// String + Number
console.log("1" + 2)    //Number + string = string
//Number + string
console.log(1 + "2")

// what happens when 
// String + Number + Number
console.log("1" + 2 + 2)    // Output: 122  when "1"(String) + 2(Number) it becomes "12"(String) then "12"(String) + 2(Number) it becomes "122"(String)
                            // it is guideline and rule in js that when a Number + string = string

console.log(1 + 2 + "2")    // Output: 32 when 1(Number) + 2(Number) = 3(Number) then 3(Number) + "2"(String) it becomes "32"(String)

// Prefix
let x = 3
let y = x++          
console.log("x:", x , "y:",y)
/* Output:  x: 4 y: 3    
first assign value to y then increment it
its like 
  x = 3 
  y = x
  x++
*/

//Postfix
let d = 4
let e =++d
console.log("d:",d,"e:",e)
/*
Output:
d: 5 e: 5
first increment then assign value to e
 d = 4
 ++d  or d++
 e = d
*/
let x1 = 3;
const y1 = ++x;
console.log(x1 , y1)
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
console.log(x2,y2)
// x2 is 4n; y2 is 4n
