const accId = 144553
let accEmail = "Kunal123452003@gmail.com"
var accPassword = "12345"
//   accCity      // here value would not be undefined, it will show error: "accCity is not defined"
accCity = "Noida"

let accState       // its value willbe undefined as there is no value is defined here 

//   accId = 23  // As AccID is  constant variable it cant be changed

 accEmail = "user@gmail.com"
 accPassword = "2003"
 accCity = "Jahangir puri"

 // Printing using console.log()
 console.log("Acc ID",accId)
 console.log("Acc Email",accEmail)
 console.log("Acc Password",accPassword)
 console.log("Acc city",accCity)

 // Printing data in a tabular form
console.table([accId,accEmail,accPassword,accCity,accState])

/*
Difference btw the var and let is of scope 
in early verions of js var is used to declare a variable and when same variable's value is changed a program 
it got changed for all the places in a program   
because there is no concept of scope{} 
so to tackle that problem let is used now 
AVOID use of var 
*/