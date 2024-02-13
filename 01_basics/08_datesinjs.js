//DATE
// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

let myCreateDate = new Date(2024,0,5)
console.log(myCreateDate.toDateString());

let myCreateDate1 = new Date(2024,0,5,15,3)
console.log(myCreateDate1.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);
console.log(myCreateDate.timeStamp);

//How to convert into milliseconds to seconds
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday: "long",
})
