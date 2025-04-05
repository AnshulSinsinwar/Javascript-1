// In the js there is two types of dataypes:

// 1. Primitive
//  // 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTremp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId= Symbol('123')

 console.log(id === anotherId);
 
// const bigNumber = 654654895341354684

// 2. Reference (non- primitive)

// Array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObej = {
    name: "Aanvi",
    age: 22,
} 

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof bigNumber); //undefined

console.log(typeof id); //symbol


//*****************Memory*******************

//Stack (Primitive), Heap (Non-primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gmail.com",
    upi:"user@upi"

}

let userTwo = userOne

userTwo.email = "Anshul@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);
// Here the userOne and Two both declared into stack but take refernce from heap.


