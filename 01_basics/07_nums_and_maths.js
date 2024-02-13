const score = 400
console.log(score);
console.log(typeof(score));

const newScore =new Number(500)
console.log(newScore);
console.log(newScore.toString());// will convert numeric value to string
console.log(newScore.toString().length);
console.log(typeof(newScore));

const num = 123.8966
console.log(num.toPrecision(3));

const hundreds = 100000000 //by default US 
console.log(hundreds.toLocaleString("en-IN"));

const fix = 100
console.log(fix.toFixed(2));

//**********************Math*******************************
// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));

console.log(Math.random())  // Math.random value will always be lie between 0 & 1
console.log((Math.random()*10) + 1); //Minimun value will be 1 not 0
 
/* NOTE:
why we added 1 ? we added 1 because for instance if the value is 0.04 and didn't added the 1 
then the final output will be 0 so to get rid from value 0,added 1.*/

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max-min+1)) + min)