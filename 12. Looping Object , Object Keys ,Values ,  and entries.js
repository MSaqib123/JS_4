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
  };
  
  
  let openingHours = {
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
  }
  
  //_______________ Looping Object : Object Keys ,Values ,  and entries __________
  //Keys = Object property name
  //value = object propertie value
  //entries =   Loop on Entire object and give   => Array of Array Result
  
  //_____ 1. Key _______
  console.log(Object.keys(openingHours))
  
  //____ 2. Values _____
  console.log(Object.values(openingHours))
  
  //____ 3. Entries _____
  console.log(Object.entries(openingHours))
  
  
  //________ Examples 1 _________
  const properties = Object.keys(openingHours);
  //console.log(`We are open on ${properties.length} days in Week`)
  let days = ''
  for(const day of Object.keys(openingHours)){
    //console.log(day)
    days += ` ${day},`;
  }
  let openString = `We are open on ${properties.length} days : ${days} in Week`;
  console.log(openString)
  
  
  //________ Examples 2 _________
  const entries = Object.entries(openingHours)
  
  for(let x of entries){
    console.log(x)
  }
  
  //destruckter on x
  for(let [key,value] of entries){
    console.log(`On ${key} : ${value}`)
    console.log(`On ${key} : ${Object.entries(value)}`)
  }
  
  //destruckter on vlaue   == further Entries ke bjay mana usaaa Further descructure kr lyaa
  for(let [key,{open , close}] of entries){
    console.log(`On ${key} we open at ${open} and close at ${close}`)
  }