//================ String method part 2 ==========================
let airline = 'TAP Air Portugal'

//1. toLowerCase()  = small
console.log(airline.toLowerCase())

//2. toUpperCase()  = capital
console.log(airline.toUpperCase())


//Example 1 := do 1st letter captial and other lower
let passenger = 'sAqIB';
let passengerLower = passenger.toLowerCase();
let passengerCorrect = passengerLower[0].toUpperCase()+passengerLower.slice(1)
console.log(passengerCorrect)

let inSingleLine = passengerLower.toLowerCase()[0].toUpperCase()+passengerLower.slice(1)
console.log(inSingleLine)

const checkPassendgerName = function(pas){

        let correctPassenger = (pas.toLowerCase())[0].toUpperCase()+pas.toLowerCase().slice(1)
        console.log(correctPassenger)
}
checkPassendgerName("iNdia")
checkPassendgerName("paKIstAN")

//3. Trim()     remove extra spaces
let email = "m435777535@gmail.com"
let loginEmail = '   m435777535@gmail.com \n'
loginEmail = loginEmail.trim()

if (email === loginEmail)
        console.log("Login successfully")
else console.log("Login fail")


//4. replace()     to replace something
let priceGB = '288,97£'
let replacePrice = priceGB.replace('£',"$").replace(',','.');
console.log(priceGB)
console.log(replacePrice)

//5. ReplaceAll by  simple regular Expression
//replace all matching value by Regular 
//=> step_1  /string/ 
//=> step_2  g  (global) all
let announc = "All passengers come to boarding door 23, Boarding door 23!";
console.log(announc.replace(/door/g , 'Pakistan'))


//6. replaceAll()  ES6   to replace something
let announcement = "All passengers come to boarding door 23, Boarding door 23!";
console.log(announcement.replace('door','gate'))
console.log(announcement.replaceAll('door','gate'))


//7. Includes()    case Sensitive
//return Boolean  exist or not
const airPlane = "Airbus A320neo";
console.log(airPlane.includes('A320'))
console.log(airPlane.includes('Boeing'))
console.log(airPlane.includes('Air'))


//8. startWith()  and endWith()
let Plane = "Airbus A320neo";
if (Plane.startsWith('Air') && Plane.startsWith('neo'))
        console.log('its Part of Neo Bus Family')   
else    console.log('not a family')   

//============== Example : Security Checking for GUN , Knife =============
let SecutiryCheckForAirplane = function(items){
        let itemLower = items.toLowerCase();
        if (itemLower.includes('gun') || itemLower.includes('knife'))
                console.log("Your not welcome in the AirPlane")
        else console.log("You are welcome the board")
}

SecutiryCheckForAirplane('I have Bag with cloths and bocked mony and mobile')
SecutiryCheckForAirplane('I have Gun for Safty and knife for fruite Cuts')
SecutiryCheckForAirplane('I have Umbrella for Raining')
