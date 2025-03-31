const accountId=14587  //const is used to declare a constant variable whose value cannot be changed later in the program
let accountEmail= "anshul@gmail.com" // let allows us to declare a variable that can be reassigned later.
var accountPassword= "12345"
accountCity="Jaipur"

// accountId=2 // Not allowed

accountEmail="hch@hc.com"
accountPassword="12547"
accountCity="Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity])