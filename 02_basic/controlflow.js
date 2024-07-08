// This code will work 
if(true){
    var a = 1
    console.log(a)
}

console.log(a)   // a will be accessable outside the if block as a is global variable

if(true){
    let b = 1
    console.log(b)
}

//console.log(b) // this will not work as b is a local variable only accessable within if condition

// Also we can write if(condition){ //Code } in one line if their is one code statement 
const num = 10
if(num>1) console.log(`${num} > 1`)

// Also another way when we have multiple code statement lines
const num1 = 10
if(num>1) console.log(`${num1} > 1`),console.log(`${num1} is greater than 1`)
// But this is not recommended
const num2 = 20
if(num2>30){
    console.log("Yes")
}
else if(num2>1){
    console.log("YEs greater than 30")
}
else{
    console.log("Just executed")
}

/*
Switch(key){
    case value1:
        break;
    case value2:
        break;
    default:
        break;
}
*/