var money = 100;
var money1 = '100'
var isSingle = false;
var isSerious;

console.log(typeof money)     // variable type: Number
console.log(typeof money1)    // variable type: String
console.log(typeof isSingle)  // variable type: Boolean
console.log(typeof isSerious) // variable type: Undefined


// Exception: only for ".1 + .2"
// Normal case:
var num1 = .2;
var num2 = .3;
var sum = num1 + num2;
console.log(sum);

//Exception case:
//Advanced Topic:
var num1 = .1;
var num2 = .2;
var sum = num1 + num2;
//var  sum = sum.toFixed(1);
var sum = sum.toFixed(2);
//var  sum = sum.toFixed(3);
var sum = parseFloat(sum)
console.log(sum)
