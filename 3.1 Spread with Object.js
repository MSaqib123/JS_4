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



//============= Object  Spread =============
        //ES6  Speard also work with  Ojbect  hahaha
        const newResturentObject = {
            foundedIn:1998,
            ...restaurant,
            founder:"Saqib"
    }
    console.log(newResturentObject)

    //change name values of new object and compair theme
    newResturentObject.name = "Saqib Resturent"


    console.log("New Resturemnt Object  name : ",newResturentObject.name)
    console.log("old Resturemnt Object  name : ",restaurant.name)