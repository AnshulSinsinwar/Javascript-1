let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString()); // returns the date in the format "Mon Jan 01 2018"
console.log(myDate.toISOString()); // returns the date in the format "2018-01-01T00:00:00.
console.log(myDate.toLocaleString()); // returns the date in the format "1/1/2018, 12:00:00

let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 25 , 12, 30);
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMinutes());
console.log(newDate.getFullYear() + 1);

// `${newDate.getFullYear()} and the time is ${newDate.getHours()}`

// newDate.toLocaleString('defalut',{
//     weekday: "narrow"
// })

console.log(newDate.toLocaleString('defalut',{
    weekday: "long"
}));




