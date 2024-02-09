console.log(null > 0);  //false
console.log(null == 0); //false
console.log(null >= 0); //true

//the reason is that == and other comparison are treated different 
//comparisons convert "null" to 0 but only in case of ">", ">=", "<" "<="