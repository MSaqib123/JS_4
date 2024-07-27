//--------------- Maps  iteration -=------------

//1. New Map
const questions = new Map([
    ['question','What is the best programming langauge in the world'],
    [1,'C#'],
    [2,'Java'],
    [3,'Javascript'],
    ['correct',3],
    [true,'Correct 🏆'],
    [false,'Try Again'],
])
console.log(questions);

//2.  Object.entries  __ Convert Object to Maps
console.log(restaurant.openingHours) //object
console.log(Object.entries(restaurant.openingHours)) //map

let hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);


//---- 3.  Iteration   (Maps are also iterable becuase the contain array) ---
//1. item 1 by 1
for (let item of questions) {
    console.log(item)
}
//2. key , value
for (let [key,value] of questions) {
    console.log(key," => ",value)
}

//------- 4. Convert Map to Array -------------
//it will give 2d array   = 1.key , 2.value
console.log([...questions])
console.log([...questions.keys()])
console.log([...questions.values()])


//-------------------------------------------
//-------------- Example --------------------
//-------------------------------------------
console.log(questions.get('question'))
for (let [key,value] of questions) {
    if(typeof key === 'number')
     console.log(key," => ",value)
}
const ans = Number(prompt("Your answer"))

// if(questions.get('correct') === ans){
//         console.log(questions.get(true))
// }
// else{
//         console.log(questions.get(false))
// }

console.log(questions.get(questions.get('correct') === ans))