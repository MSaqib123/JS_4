const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
        starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
        order : function(startIndex,menuIndex){
                return [this.starterMenu[startIndex] , this.mainMenu[menuIndex]]
        },

        openingHours: {
                thu: {
                        open: 12,
                        close: 22,
                },
                fri: {
                        open: 11,
                        close: 23,
                },
                sat: {
                        open: 0, // Open 24 hours
                        close: 24,
                },
        },

        orderPastaa:function(ing1,ing2,ing3){
                console.log(`Here is your declicious pasta with ${ing1} , ${ing2} and ${ing3}`)
        },
        orderPizza:function(mainIngredient, ...otherIngredient){
                console.log(mainIngredient)
                console.log(otherIngredient)
        },
};


//--- last we learn about Falsy Values ---
//&& || Use AnyDataType , return Any data types,  Short-circuting

//========================== || ==========================
console.log("---------- || ----------")
console.log(0 || 25)
console.log(4 || 'a')
console.log('' || 'pk')
console.log(true || 0)
console.log(undefined || null)

//jhan pr true value ho ga waha break kr da gaa
console.log(0 || true || 2 || '' || "Paksta")

//with Ternary Operator
//let numGuest;       // value will 10 which right
//let numGuest = 23;  // value will be 23
let numGuest = 0;   //on 0 the value will be 10  which is wrong
const guest1 = numGuest ? numGuest : 10
console.log(guest1,"guest1")

//with || Operator
let guest2 = numGuest || 10;
console.log(guest2,"guest2")

//========================== && ==========================
console.log("---------- && short sircuting ----------")
console.log(0 && 25)
console.log(4 && 'a')
console.log('' && 'pk')
console.log(true && 0)
console.log(undefined && null)

//jhan pr false ho ga waha break kr da gaa
console.log(0 && true && 2 && '' && "Paksta")

//let if we want to check any Property,Method in object
if(restaurant.orderPizza){
        restaurant.orderPizza("EggPizza")
}

//same with && 
restaurant.orderPizza && restaurant.orderPizza("mushroom","lalla badshaa")
