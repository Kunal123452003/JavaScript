//truthy values which are considerd always true
//falsy values which are considered always false
//IN CASE OF STRING
//const a = "Kunal"
const a = ""
if(a){
    console.log("As a have any value it is TRUE")
}
else{
    console.log("As a is empty string it is FALSE")
}

//IN CASE OF ARRAY
const b = []
if(b){
    console.log("As a have any value it is TRUE")
}
else{
    console.log("As a is empty string it is FALSE")
}

//Falsy values: false,0,-0,BigINt 0n, "", null, undefined, NaN
//Truthy values: all except falsy values,
//               "0"," ",'false', [], {}, function(){}

num = []
if(num.length == 0 ) console.log("Array is empty")

let obj1 = {}
if (Object.keys(obj1)==0) console.log("obj1 is empty as it don't have any keys")

// Nullish Coalescing Operator (??): null undefined
let val1;
val1 = undefined ?? 10
console.log(val1)  
let val2;
val2 = null ?? 0 ?? 12
console.log(val2)
// this is different val3 = 10>2 ? 3 : -1
// console.log(val3)