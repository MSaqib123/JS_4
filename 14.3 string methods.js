//============ String method part3 ==================
//1. split()
//this splite the string base on value and  return Array []
console.log('a+b+very+Nice+string'.split('+'))
console.log('Muhammad Saqib'.split(' '))

let FullName = "Owase Raza Bhitti";
let [firstName,...lastName] = FullName.split(' ')
console.log("FirstName : ",firstName)
console.log("LastName : ",...lastName)

//2. Join()
//this join  the String with another string
let newName =  ['Mr.',firstName,...lastName].join(' ');
console.log(newName)



//=== Exmaple : Captialize Mutlple words =======
let capitalizeMutlipleWords = function(name){
        let spliteNmaeArray = name.split(" ")
        let nameUperCase = []
        for(let n of spliteNmaeArray){
                //console.log(n[0].toUpperCase() + n.slice(1).toLowerCase())
                nameUperCase.push(n[0].toUpperCase() + n.slice(1).toLowerCase())
        }
        //1 way
        console.log(nameUperCase.join(' '))
        //2 way
        console.log(...nameUperCase)
}

capitalizeMutlipleWords("jessica Living ston");
console.log(" ")
capitalizeMutlipleWords("kHuram manzooor shaab");
console.log(" ")
capitalizeMutlipleWords("saqib bhiTTI shaab");



//3. padStart()  , padEnd()
//Note
//if String = 5 legth  
//padStart 10-legth(5)   --->  5 *****  
//padEnd  10-legth(5) --->  5  *****
const message = "I love pakistna";
console.log(message.length)
console.log(message.padStart(30,"*").padEnd(45,"*"))

console.log("Saqib".length)
console.log("Saqib".padStart(10,"*").padEnd(15,"*"))

// Example :  Cradit Cart Pattern
let creditCartNumber = function(number){
        let numberString = number +'';
        let legth = numberString.length;
        let last = numberString.slice(-4)  //end ka  show krnaa haaan bs 4 digit
        console.log(last)
        console.log(legth)
        console.log(last.padStart(legth,'*'))
}
console.log(" ")
creditCartNumber(123456789)
console.log(" ")
creditCartNumber(123456789123456789)
console.log(" ")
creditCartNumber(112233445)


//4. repeat()  repeate the string
console.log("Pakistan is Goood⛳⛳⛳⛳ \n".repeat(5) )

let thePlansInline = function(planeCount){
        let singleMulti;
        if (planeCount>1)
                singleMulti = 'are'
        else singleMulti = 'is';
        console.log(`There ${singleMulti} ${planeCount} plane in Line ${'✈️'.repeat(planeCount)}`)
}
thePlansInline(5)
thePlansInline(10)
thePlansInline(3)
thePlansInline(1)
