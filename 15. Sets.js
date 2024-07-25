//=================== Sets ==============
//basicall we have only    (Object , Array) 
//but in ES6    2 more  dataStructer were interduce    Sets , Maps

//set is Collection of Unique Values  --> no Repeated Values

//we know  iterables (array , list , strings , sets)
const orderset = new Set([
    'pakistan',
    'India',
    'Srlanka',
    'pakistan',
    'Australia',
    'India'
])
console.log(orderset)

let stringIterable = new Set('Pakistan')
console.log(stringIterable)

//Properties & methods

//1. Size
console.log(orderset.size)
console.log(stringIterable.size)

//2. has()
console.log(orderset.has('India'))
console.log(orderset.has('pakistan'))
console.log(orderset.has('australia'))

//3. add()

console.log(orderset.add("dill Pakistan"));
console.log(orderset.add("dill Pakistan"));
console.log(orderset.add("Good India"));

//4. delete()
console.log(orderset.delete("India"));
console.log(orderset.size)

//5. clear()
//orderset.clear()
console.log(orderset)


//_______ for of loop _____
for (const orders of orderset) console.log(orders)


//_______ Example ________
let resturentStaff = ["Saqib","Rashid","Noman","Pakistan","Talha","Saqib","Rashid"]
console.log(resturentStaff)

//i need unqiue names staff
let uniqueStaff = new Set(resturentStaff);
console.log(uniqueStaff.size)

uniqueStaff = [...uniqueStaff] //convert to Arrray object again from set
console.log(uniqueStaff)
