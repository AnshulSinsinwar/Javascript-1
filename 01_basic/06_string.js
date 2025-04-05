const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); (Cannot use this coz it is outdated)

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);
 
const gameName = new String('AnshulSingh')

console.log(gameName [0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('n'));

const newSting = gameName.substring(0, 4)
console.log(newSting);

const anotherSting = gameName.slice(-8, 6)
console.log(anotherSting);

const newStringOne = "    anshul   "

console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anshul.com/anshul%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('anshul'));

console.log(gameName.split('-'));

console.log(gameName.toWellFormed());







