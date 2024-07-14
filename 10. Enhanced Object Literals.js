
//=====================================================
//============= Enhanced Object Literals ================
//=====================================================
/*let i have  1 object 
let obj = {
  {
  },
  {
  },
}
this syntax is known as  Object Literal*/
//Resturent is also  Object literal


const openingHours = {
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
    }
  };
  
  // ==== but ES6  give  Enhance Ojbect litteral ====
  
  //================= 1_Enhance =================
  const restaurant1 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order : function(startIndex,menuIndex){
      return [this.starterMenu[startIndex] , this.mainMenu[menuIndex]]
    },
  
    //----------------------
    //---- 1 Before ES6 ----
    //----------------------
    //Adding Object to Existing object
    openingHours : openingHours,
  
    //----------------------
    //---- 2 After ES6 ----
    //----------------------
    //but in ES6  we don't need  : 
    openingHours,  //it will auto matcilly well  give property name also
  
    
  };
  
  
  //================= 2_Enhance =================
  const restaurant2 = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    //----------------------
    //---- 1 Before ES6 ----
    //----------------------
    //Adding Object to Existing object
    
    order : function(startIndex,menuIndex){
      return [this.starterMenu[startIndex] , this.mainMenu[menuIndex]]
    },
  
    //----------------------
    //---- 2 After ES6 ----
    //----------------------
    //but in ES6  we don't need  : 
    order (startIndex,menuIndex){
      return [this.starterMenu[startIndex] , this.mainMenu[menuIndex]]
    },
    orderDeliver ({starterIndex =1,mainIndex=0 , time='20:00',address}){
      return [this.starterMenu[startIndex] , this.mainMenu[menuIndex]]
    },
  
  };
  
  
  //================= 3_Enhance =================
  //we can now  (compute or create) Property name  instead of having to writing Manually  and literly
  //we can now  create object Property dynamically
  let  weekdays = ['mon','tue','wed','thi','fri','sat','Sun']
  const openingHoursDynamically = {
    // thu: {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
      open: 0, // Open 24 hours
      close: 24,
    },
    [`day-${2+4}`]: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };
  
  