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