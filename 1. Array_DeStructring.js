
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


//--------------------- Array DeStructring ------------------
const arr = [5,9,10];
//old js
// let a = arr[0];
// let b = arr[1];
// let c = arr[2];

//ES6
let [a,b,c] = arr;

let [x,,z] = arr;

//-- Swappint 2 value ----
[a,b] = [b,a]
console.log(a);
console.log(b);

//--------------------- Array DeStructring ------------------
//--- inside the array still
//console.log(restaurant.order(0,0));

//--- Destructing by Index with  Order method ---
let [starter,menu] = restaurant.order(0,0);
console.log(starter,menu);

//--------------------- Nested Array DeStructring ------------------
let nested = [2,4,[5,7]]
// let [i,,j] = nested;
// console.log(i,j);
let [i,,[j,k]] = nested;
console.log(i,j,k);

//--------------------- default value Array DeStructring ------------------
//if array value is not exist or empyt then it will set default value
const[l=1,m=1,n=1] = [5,4]
console.log(l);
console.log(m);
console.log(n);

