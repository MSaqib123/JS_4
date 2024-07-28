//======================== Optional Chaning ===================
//ES6 giv  Optional Chaning
//optinal chaning means    Struckture lie  Chaning
//i have  [ obj1{  p1, p2 , nestObj { op }}]   and want to  Acces  op  ???  what i will do
// i will use Optional Chaning

//---------- Old ----------
//Let i want to get opning our for Munday
if(restaurant.openingHours.mon && restaurant.openingHours.mon.open) 
    console.log(restaurant.openingHours.mon.open) //without if give error  becuase  mon is not exist
    console.log(restaurant.openingHours.mon)
  
  //---------- Optinal Chaning ES6 ----------
  //if monday Prop existes then it will check to Open 
  //else will return   undefined
  //its used to Avoide errors
  console.log(restaurant.openingHours.mon?.open) //Monday is optional
  console.log(restaurant.openingHours?.mon) //openingHours is option
  
  //you can check all
  console.log(restaurant?.openingHours)
  console.log(restaurant?.openingHours?.mon)
  
  
  
  //------ Example -------
  const days= ['mon','tue','wed','thu','fri','sat','sun'];
  
  for( let day of days){
    const open = restaurant.openingHours[day]?.open ?? "Close"; // || "Close";   0 issue
    console.log(`On ${day} , we open at ${open}`);
  }
  
  
  //------ On Method ------
  console.log(restaurant.order(0,1))
  console.log(restaurant.orderPizza?.(0,1) ?? "Method Does not Exist")
  console.log(restaurant.order?.(0,1)?? "Method Does not Exist")
  
  
  //------ On Array -------
  const users = [
    // {
    //   name:'Jones',
    //   email:'m435777535@gmail.com'
    // }
    //after removing user there will be earror
  ]
  //let add  Optional Chaning + Nullish coleasan
  console.log(users[0]?.name ?? 'UserArray is Empty');
  
  
  
  //without Optional Chaning
  if (users.length > 0)
    console.log(users[0]?.name)
  else 
    console.log("User array is empty");
  