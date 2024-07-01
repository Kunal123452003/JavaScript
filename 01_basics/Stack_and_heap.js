// Stack memory
//it is used for memory management of primitive datatypes
// like String, Number, Symbol, null, Boolean,BigInt, undefined
let a1 = 3
let a2 = a1
console.log("a2:",a2,"a1",a1)
a2 = 99
console.log("a2:",a2,"a1",a1)
// AS Operations are perform on the copy of the original value of primitive datatypes varibles 
// changes made on the copy wont affect the original

//Heap Memory
// it is used fro memory managemnet of non - primitive datatypes
// like object, function, array
let user1 = {
    name : "kunal@gmail.com",
    age : 21,
    gender : "Male",
    city : "Noida" 
}

//console.log("user1",user1)
let user2 = user1
//console.log("user2",user2)

user2.age = 30
user2.name = "Krishna"

//console.log("user1",user1)
//console.log("user2",user2)

// As we know when we perform operations, 
//in js we got the referance of the Non-primitive datatype variables
// so when user2 = user1 then it means that
// user1 and user2 have same memory referance in the memory that is 
// they are pointing to the same memory address 

//Lets try it with const
const user3 = {
        email : "abc@gmail.com",
        age : 21,
        gender : "Male",
        city : "Model town" 
}

let user4 = user3

console.log("user3",user3)
console.log("user4",user4)

//Now lets make changes to see what will happen

user4.email = 'ABCD@gmail.com'

console.log("user3",user3)
console.log("user4",user4)
// So we can still make changes


//We can use ... operator which is also called spread operator
const user6 = { name: "Alice", age: 25, address: { city: "Wonderland" } };
const user7 = { ...user6 };

user7.name = "Bob";
user7.address.city = "Bobland";

console.log(user6); // { name: "Alice", age: 25, address: { city: "Bobland" } }
console.log(user7); // { name: "Bob", age: 25, address: { city: "Bobland" } }
