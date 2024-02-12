const user = "Manaswi"
const repoCount = 50

console.log(user + repoCount);
console.log(`My name is ${user} and my repo count is ${repoCount} `)

// 2nd way to declare String
const gameName = new String("Candy Crush")
// console.log(gameName.length);
// console.log(__proto__);
// console.log(gameName.anchor);

console.log(typeof gameName);

const userName = new String("hitesh/hc/com")
console.log(userName.slice(-8,4)); //in slice we can take -ve values
console.log(userName.substring(0,4)) //in substring we can not take -ve values

const name = new String("    Amit   ")
console.log(name);
console.log(name.trim());

const url ="https://manaswi.com/manaswi%20Sharma"
console.log(url.replace('%20','_'));
console.log(url.includes("Manaswi"));
console.log(url.includes("manaswi"));

console.log(userName.split("/"))
