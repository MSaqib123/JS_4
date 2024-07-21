//================== Working with string ==================
//string is primitive  => object
//why ===> Js very smart when we pass string in js ---> behinde the seen it conver tto object
console.log(typeof new String("Pakistan") , " string Primitive")

const airline = 'TAP Air Portugal'
const plane= 'A320'

//1. character by Index
console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log('B737'[0])

//2. string length
console.log(airline.length)
console.log('B737'.length)


//3. indexOf()  index from right | start
console.log(airline.indexOf('P'))
console.log(airline.indexOf('Portugal'))
console.log(airline.indexOf('r'))

//4. index from left | end
console.log(airline.lastIndexOf('r'))
console.log(airline.lastIndexOf('Portugal'))

//5. Slice
console.log(airline.slice(4));  //remove 1st 4 character from string 
//this is  SubString and part of old string
//its return new String 

//5. Slice + end
console.log(airline.slice(4,7));  //remove 1st 4 character from string 
//7-4  3

//----------------------------
//Example 1 : Extract First World
console.log(airline.slice(0, airline.indexOf(' ')) ,' _ First World')
//Example 2 : Extract Last World
console.log(airline.slice(airline.lastIndexOf(' ')+1) , ' _ Last word')
//----------------------------




//Negative --> value
console.log(airline.slice(-2)) //get from end
console.log(airline.slice(1,-1))  //start 1 , end  -1 (last world canceld)

//Example 1 : 
const checkMidleSeat= function(seat){
        const s = seat.slice(-1);
        if(s=== 'B' || s==='C')
        console.log("You got the middle seat'😒");
        else console.log("Your very lucky 😘")
}
checkMidleSeat("1234B")
checkMidleSeat("1D")
checkMidleSeat("14C")
checkMidleSeat("134A")


//_________________ string is Object (Primitive) ______________
//js very smaar when we right string  in  js  its behind the seen convert ot object
//here is
console.log(new String("Pakistan"))
console.log(typeof new String("Pakistan") , " string Primitive")

//there method also return  Object
console.log(typeof new String('Pakistan').slice(1))