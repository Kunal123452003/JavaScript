//console.log("2">1)
//console.log(2 > "1")

console.log(null > 0) 
/* 
Output: false
reason:
when null compared with comparision opeartors like
> , < , >=, <=   null is converted to 0    
*/

console.log(null == 0)
/* 
Output: false
reason:
The == operator checks for equality after type coercion,
but null is only loosely equal to undefined and not to any other value,
including 0.
*/

console.log(null >= 0)
/*
Output: true
reason:
when null compared with comparision opeartors like
> , < , >=, <=   null is converted to 0    
*/

console.log("2" === 2) // === checks the data type