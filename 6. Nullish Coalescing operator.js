//============  Nullish Coalescing operator   (??) ES6-2022 =============
//Nullish : work with null and undefined    (not = '',0) 

//it work same as   || operator but  --> it fix  (0)  error issue
let numGuest = 0;   //on 0 the value will be 10  which is wrong ----> we use  ?? operator
const correctValue =  numGuest ?? 10;// numGuest ? numGuest : 10
console.log(correctValue,"guest1")

