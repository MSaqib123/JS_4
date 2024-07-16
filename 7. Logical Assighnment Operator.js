//Logical Assighnment operator

const emp1 = {
    name:"saqib",
    //age:25
    age:0
}

const emp2 = {
    name:"Rashid",
    job:"Developer",
    owner: "Government"
}
//______________ logn proccess _________________
// emp1.age = emp1.age || 10;
// emp2.age = emp2.age || 10;

//______________ Or Assignment _________________
// emp1.age ||= 10;
// emp2.age ||= 10;

emp1.age ??= 10;
emp2.age ??= 10;

console.log(emp1.age)
console.log(emp2.age)

//______________ And Assignment _________________
// emp1.owner = emp1.owner && '<ANNOYMOUSE' //undefined because its not in    empl1
// emp2.owner = emp2.owner && '<ANNOYMOUSE'

emp1.owner &&= '<ANNOYMOUSE'
emp2.owner &&= '<ANNOYMOUSE'

console.log(emp1)
console.log(emp2)