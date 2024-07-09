// for loop
let array = ["A","b","c","d"]
for (let i = 0;i<array.length;i++){
  //  console.log(array[i])
}
num = 0
while(num<array.length){
   // console.log(array[num])
    num++
}

//forof 
for (const num of array){
    console.log(num)
}

let name = "Kunal"
for (const n of name){
    console.log(n)
}

//MAP
const map = new Map()
map.set(1,"A")
map.set(2,"B")
map.set(3,"C")
map.set(4,"D")

console.log(map)
for (const [key,value] of map){
    console.log(key, ":-",value)
}

//for objects using forin
const myobj = {
    name:"kunal",
    age:21,
    gender:"Male",
    city: "Jahangir puri"
}

for (const key in myobj){
    console.log(myobj[key])
}

//for array using forin
for (const key in array){
    console.log(`${key} : ${array[key]}`);
}

const ok = ()=> {
    console.log("World")
}
console.log(typeof ok)

const language = ["python","java","js","C","C++"]

language.forEach( function (element, index, array){   //by declaring the function
        console.log(element,index,array)
})
 
language.forEach( (element) => {     //by declaring the arrow function
    console.log(element)
})

function show(element) {   //created a function first
    console.log(element)
}

language.forEach(show)     //passing the reference of the function