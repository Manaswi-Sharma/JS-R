let score = "89ab"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1=>true; 0=>false
// ""=>false
//"manu"=>true

// console.log("1" + 2 + 2); //o/p=> 122
// console.log(1 + 2 +"2"); //o/p=> 32

let a = 7
const b = a++
console.log({a},{b}); //readabilty and clarity

let x = 7
const y = ++x
console.log(x,y);