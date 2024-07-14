//__________ The Spread Operators ( = ...)  Nekaalta ha Array sa                rightside paa ____________
//spread alwaysed to build array only 
//we use spread operator to expend(Out) an Array elmenets  and used it in new Array
const arr = [7,8,9]

// old js
const BadNewArray = [1,2,arr[0],arr[1],arr[2]] 
console.log(BadNewArray)

// ES6
const GoodNewArray = [1,2,...arr]
console.log(GoodNewArray)

const spredNewArray = [...arr]
console.log(spredNewArray)

// let add  BURGER to  MenMenu of Resturent
const newMenu = [...restaurant.mainMenu,'BURGER']
console.log(newMenu)


//========== Use Cases of Serprad operators ==========
//1. Copy Array
let mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy,"copy array by Sepread Operator")

//2. Join 2 array
let joinArray = [...mainMenuCopy,...newMenu]
console.log(joinArray,"Join 2 array by Sepread Operator")

//======== Note =======
//spread work with only    Iterables

//=============== Iterables ===============
//Arrays , strings, Map , Set    ====>  ( Not Object )

//1. String 
let str = "Saqib"
let latters = [...str,'','a' ]
console.log(latters)
console.log(...str)
//Bad
//console.log(`${...str}`) 


//================ Real World Example ================
//let make pasta for this   atlest  3  elements required
const ingradients = [prompt("Ingradiant 1"),prompt("Ingradiant 2") , prompt("Ingradiant 3")]
console.log(ingradients)

//1st way
restaurant.orderPastaa(ingradients[0],ingradients[1],ingradients[2])

//2nd way  (...spread)
restaurant.orderPastaa(...ingradients)  //this is best Modern  JS

//3rd  for
let args = [];
ingradients.forEach(function(item){
        args.push(item)
})
restaurant.orderPastaa.apply(null,args)