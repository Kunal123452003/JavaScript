const language = ["C++","C","Java","js","python"]

//Syntax : array.filter( (argument) => condition)   //filter function needs callback function which is nothing but arrow function 
const a = language.filter( (item) => item)  // Normally if we want to return the output we need to use .filter() function
console.log(a)

//Another way

const book =[
    {name:"A", pgname: 234, genre: "History"},
    {name:"B", pgname: 200, genre: "Comedy"},
    {name:"C", pgname:4500 , genre: "Horro"},
    {name:"D", pgname: 600, genre: "Action"}
    ]

// const userbook = book.filter( (bk) => bk.pgname>200)
const userbook = book.filter( (bk) => bk.pgname>200)
console.log(userbook)

const user = book.map(bk => bk.name)
console.log(user)

const num = [1,2,3,4,5,6,7]
const by_10 = num.map(num => num *10)
console.log(by_10)

book.forEach((element) => {
    console.log(element.name)
});

console.log(book.filter((obj)=> obj.pgname>=250).map((obj) => obj.name).map((name) => name+" book"))

