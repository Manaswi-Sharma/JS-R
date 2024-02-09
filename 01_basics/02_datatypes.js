"use strict";
//alert(3+2) //we are using Node.js, not browser

let name = "Manaswi"
let age = 21
let accountDetails = true

//primitive dt
//number 
//bigint
//string
//boolean
//null(standalone value =>representation of empty value)
//undefined(value is not assigned)

console.log(typeof name);
console.log(typeof "Manaswi");

console.log(typeof null); //output=object
console.log(typeof undefined);//output=undefined

//Reference (non-primitive)
//array
const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "Manaswi",
    age: 21
}
console.log(heros);
console.log(myObj);

let myFunction = function(){
    console.log("Hello World!!");
}
// console.log(myFunction);