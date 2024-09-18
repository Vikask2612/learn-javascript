const accountId = 123456
let accountEmail = "vikas@google.com"
var accountPassword = "12345"
accountCity = "Nashik"
let accountState;

//  accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "3652674"
accountCity = "pune"

console.log(accountId);

/* prefer not to use "var"
because of issue in block scope and functional scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 