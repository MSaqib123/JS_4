// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
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
};

//=================================================
//================= Looping Array _ For Of Loop ==================
//=================================================
const menu = [...restaurant.starterMenu,...restaurant.mainMenu]

//1. item
for (let item of menu) console.log(item)
        console.log(" ")

//2. entrieds
console.log(...menu.entries())//menu.entries())
console.log(" ")

//3. item with index
for (let item of menu.entries()) {
        console.log(item[0] + " : " +item[1])
}
console.log(" ")

//4. entries [i,item]
for (let [i,item] of menu.entries()) {
        console.log(i + " : " + item);
}
console.log(" ")


for (let [i,item] of menu.entries()) {
  console.log(i+1 + " : " + item);
}



