let a1 = "Kunal"
//console.log("a",a1, typeof a1)
//console.log("a[3] = ",a1[3], ",type: ",typeof a1)

let a2 = String("Kunal12345")
console.log(`a2 : ${a2} , type ${typeof a2}`)

//------------------string methods/ functions--------------
console.log(`String = ${a2}`)
console.log(a2.length)
console.log(a2.indexOf("l"))   // to find an element's index
console.log(a2.toUpperCase())   // to convert the string to the upper case
console.log(a2.substring(3,7))  // to select a specific part of the string
console.log(a2.charAt(8))       // to find the element at an given index 
console.log
console.log(a2.slice(3,8))
console.log(a2.slice(-7,-2))
let a3 = new String("  Kunal    ")
console.log(a3.trim())   // used to remove blank spaces and new line character \n
console.log(a2.replace("23","2003"))// used to replace a part of a string with a different/ new part

let a4 = "ABC-DE-FGH-I"
console.log(a4.split("-"))  // split the string acc to argumnet and return them in a array 

console.log(`Character code of ${a2[3]}: ${a2.charCodeAt(3)}`)  //returns the character code of given argument


