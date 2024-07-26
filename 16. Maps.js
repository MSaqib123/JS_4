//===================== Maps  (is not Map) its data structure ===================
//Maps are more usedfull  then  Set
//Maps are used with DOM Elements very usefull

const rest = new Map();

//1. Map.set()   (return curret Map object)
rest.set("name","M Saqib")
rest.set(1,"My favourt Lang is JS")
console.log(rest.set(2,"Dill Dill Pakistan"))

//2. Multiple Set()
rest
.set("Categories",["Itel","Real Me","LG","Moto"])
.set("Fruites","WaterMeloan")
.set("open",11)
.set("close",23)
.set(true,'we are open :D')
.set(false,'we are close :C')

console.log(rest)

//3. .get()    
//get by key values with Same datatype   very usefull
//return the value
console.log(rest.get('name'))
console.log(rest.get(1))
console.log(rest.get(true))
console.log(rest.get(3))

//Example
const time = 8;//21;
console.log(rest.get(time>rest.get('open') && time<rest.get('close')))


//4. has()
//return true  , false
console.log(rest.has(1))
console.log(rest.has('xyz'))
console.log(rest.has('name'))

//5. Conceptual thing

//worng
// rest.set([1,2],"test")  
//this will not work due to    Raim storing  (Primitive vs Object)
// console.log(rest.get([1,2]))

//correct 
const arr = [1,2]
rest.set(arr,'Testing Array as key')
console.log(rest.get(arr))