var math = require('./math.js');//'./' in this 



var command = process.argv[2];
var firstArg = +process.argv[3];
var secondArg = +process.argv[4];

var result = math[command](firstArg, secondArg);

console.log(result);
// var num = +process.argv[2] //'+'change string to number

// console.log(num + math.x); //10



// console.log(process.argv[0])
// console.log(process.argv[1])
// console.log(process.argv[2])
// console.log(process.argv[3])
