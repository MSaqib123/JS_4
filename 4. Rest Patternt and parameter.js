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
    }
};



//________________ 4. Rest Patternt and Parameters  (... = ) compress krta ha Array me   leftside paa ____________
//its opposite to  Spread Operator


//====================== 1. Destructure =========================

//____ Array rest ___
const [a,b, ...others] = [1,2 ,4,5,9,10]
console.log(a,b)
console.log(others)  //it condense other  element to  array


let [pizza,,risotoo,...other] = [...restaurant.mainMenu,...restaurant.starterMenu]
console.log(pizza,risotoo,other)


//____ Object rest ___
const {sat,...weekeend} = restaurant.openingHours
console.log(sat,weekeend)

//====================== 2. Functionaling =========================

const add = function (...numbers){ //infinite   parameter or  paramter vari krain ga  dynamically
        let sum = 0
        for(let i = 0 ; i< numbers.length;i++) sum += numbers[i];
        console.log(sum)
}
add(2,3)
add(2,3,7,2,4)
add(211,3,7,222)

const x = [25,444,111]
add(...x)


//====================== 3. Real World Example on Restorent =========================
restaurant.orderPizza("dabalRootee","Ketucb", "Chatnee","lalar palar")


