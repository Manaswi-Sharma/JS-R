//Stack(primitive) & Heap(non-primitive)

let myYoutubeName = "manu.com"
let anotherName = myYoutubeName
anotherName = "manaswi.com"

console.log(myYoutubeName);
console.log(anotherName);

let obj = {
    email: "manu@google.com",
    upi:"upi@ybl.com"
}
let obj1 = obj
obj1.email = "manaswi@google.com"
console.log(obj);
console.log(obj1);

