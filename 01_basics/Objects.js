// // Singleton    we can make a singelon object through constructor

// //Ways to create the objects 

// // 1. Object literals 
// const sym1 = Symbol("sym1")   
// const obj1 = {
// //  Key : Value
//     name: "Kunal",       // In backend the name key is converted to string 
//     "City": "Noida",
//     [sym1] : "This is a Symbol"   // Using the symbol in the obj1 as a key for a value

// }

// console.log(obj1.name)      // Accessing component of obj1 using .
// console.log(obj1["name"])   // Accessing component of obj1 using [""]

// console.log(obj1["City"]) 
// console.log(obj1.City)

// console.log(obj1[sym1])

// //Definig a function as the member of the obj1
// //Syntax:
// // obj_name.function_name = function(){}
//    obj1.greet = function() {
//     console.log("This is a greet function")
// }

// console.log(obj1.greet())
// /*
// Output: This is a greet function
//         undefined
// */
// console.log(obj1.greet)
// /*
// Output: [Function (anonymous)]
// Reason: Function is not executed only the function's reference
//         is returned
// */
// // Another greet fun which displays the name in obj1 
// obj1.greetings = function(){
//     console.log(`Hello ${this.name}`)    //using this keyword to point the obj1
// }

// console.log(obj1.greetings())

// obj1.name = "ABC"
// console.log(obj1)

// Object.freeze(obj1)     //  we can prevent the an person to make changes/modifications in 
//                         // in the key value of the object using the Object.freeze() function
//                         // After freezing an object we cant add or delete any attribute and make any 
//                         // changes
// obj1.name = "DEF"
// console.log(obj1)

// // 2. object Constructor
// const obj2 = new Object()     // BTW this is a singleton object
// console.log(obj2)
// // Assinging data members
// obj2.email = "ABC@gmail.com"
// obj2.city = "Noida"

// console.log(obj2)

// //Nested Object
// const obj3 = {
//     User:{
//         FullName:{
//             LastName: "Deepak",
//             FirstName: "Kumar"
//         },
//         Age: 23,
//         Adddress:{
//             State:{
//                 City:"Noida",
//                 Pincode: 110033
//             }
//         }
//     }
// }
// console.log(obj3.User.FullName)
// console.log(obj3.User)

// //Merging objects
// ob1 = {1:"a",2:"b"}
// ob2 = {3:"c",4:"d"}

// const obj4 = {ob1,ob2}         
// console.log("Obj4",obj4)
// /*
// Output: { ob1: { '1': 'a', '2': 'b' }, ob2: { '3': 'c', '4': 'd' } }
// Reason: same reason as the array case 
// */

// const obj5 = Object.assign({},ob1,ob2)
// console.log("Obj5",obj5)
// /*
// Syntax:
// Object.assign(target,source)
// Object.assign({},ob1,ob2)   here {} represents the empty object where all the elements/data should be stored, 
//                             target object
//                             here ob1,ob2 represents from where the data is gather, 
//                             source objects
// */

// //Another method to combine objects   
// const obj6 = {...ob1,...ob2}      //using ... spread operator
// console.log("Obj6",obj6)

// //Accessing keys and values of the obj2
// console.log(Object.keys(obj2))     //Object.keys() returns all the keys in the array
// console.log(Object.values(obj2))   // Object.values() returns all the values in the array

// //Assing both key value pair
// console.log(Object.entries(obj2))

// //How to check whether a property/data member is present in the Object or not
//console.log(`Is City is present in the obj2: ${obj2.hasOwnProperty("city")}`)

// //Different way of accessing obj9 elemenets
// const obj9 = {
//   name : "Kunal",
//   age: 21,
//   city: "Jahangir puri"
// }
// // Normal way :  
// console.log(obj9.name)

// // Different and mostly used way
// const {name : N} = obj9
// console.log(N)
// JSON file format which is widely used in API
/*
{
    "name" : "Kunal",
    "Age" : 21,
    "City" : "Noida"
}
*/
// API :'https://randomuser.me/api/'
/*
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Mademoiselle",
        "first": "Elif",
        "last": "Guillaume"
      },
      "location": {
        "street": {
          "number": 4813,
          "name": "Rue Bony"
        },
        "city": "Urmein",
        "state": "Graubünden",
        "country": "Switzerland",
        "postcode": 8921,
        "coordinates": {
          "latitude": "-58.4022",
          "longitude": "107.5738"
        },
        "timezone": {
          "offset": "-5:00",
          "description": "Eastern Time (US & Canada), Bogota, Lima"
        }
      },
      "email": "elif.guillaume@example.com",
      "login": {
        "uuid": "46d476e5-33b2-49bb-9f60-a6e8b6e1c6a7",
        "username": "beautifulostrich439",
        "password": "glasses",
        "salt": "mTjMQRZ9",
        "md5": "8836eed5ee75ace4cf6a1ff3ffddb831",
        "sha1": "ecfe4d2fedf18c645e7ba8aa2cc09b39327de873",
        "sha256": "8f0864fb842a18787bef448963592ecafc2ce88eb76d065c873479131d9f6e21"
      },
      "dob": {
        "date": "1995-06-02T15:33:46.176Z",
        "age": 29
      },
      "registered": {
        "date": "2012-04-29T06:11:25.412Z",
        "age": 12
      },
      "phone": "075 736 41 13",
      "cell": "077 459 16 63",
      "id": {
        "name": "AVS",
        "value": "756.2422.6238.11"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/69.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
      },
      "nat": "CH"
    }
  ],
  "info": {
    "seed": "2c3f9e6f142ba23d",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
*/