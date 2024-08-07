
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


//--------------------- object DeStructring ------------------
//--- name should be same as object property ---
const {name,categories,openingHours} = restaurant;
console.log(name,categories,openingHours);

//--- diferentname ---
const {
    name:resturentName,
    categories:cat,
    openingHours:oH
} = restaurant;
console.log(resturentName,cat,oH);

//--- set default values ---
const {
    menu = [],
    name:resturent=[],
} = restaurant;

console.log(menu,resturent);

//--- Replace object ---
let obj = {a:23,b:7,c:14};
({a,b} = obj)
console.log(a,b);

//--- Nested object ---
const {
    fri:{open,close}
} = openingHours
// console.log(fri);
console.log(open,close);


//--- Nested object with custom name ---
const {
    fri:{open:o,close:c}
} = openingHours
console.log(o,c);
