const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
// With the help of this (toString)  we can change the datatype of number to string
// and after this we can use the properties of the string

console.log(balance.toFixed(2)); //Number of digits after the decimal point

const otherNumber = 23.8965

console.log(otherNumber.toPrecision(1));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
// This will print the number with indian number formate 

//****************************Maths**************************** (It is defalut library comes with js)

console.log(Math);
console.log(Math.abs(-4)); // example, the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9)); // floor is the opposite of ceil
console.log(Math.sqrt(25)); // square root of 25 is 5
console.log(Math.min(1, 6, 8, 87));
console.log(Math.max(1, 6, 8, 87));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min);








