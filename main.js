/* complete the makeDrink method so that it:

Only allows you make a drink if it's a drink in the drinkRequirements object. 
Otherwise alert, "Sorry, we don't make DRINKNAME".
If the drink is part of the drinkRequirements object, reduce the amount of beans by the number 
of beans required for that drink.
If there are not enough beans to make that drink, alert, "Sorry, we're all out of beans!".*/


var coffeeShop = {
  beans: 40,
  money:10,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  drinkPrice: {
    latte: 2,
    americano: 3,
    doubleShot: 4,
    frenchPress: 5

  },
//here we add money to coffeeshope.money follwing a purchse
buyDrink: function (drinkType){
      coffeeShop.money += coffeeShop["drinkPrice"][drinkType];
      coffeeShop.makeDrink(drinkType);

  },
//check if there enought beans and of we have that drink to sell
    makeDrink: function (drinkType) {
  
    if (coffeeShop["drinkRequirements"][drinkType] && coffeeShop["drinkRequirements"][drinkType] < coffeeShop.beans) {
        alert("Here is your drink bro");
        coffeeShop.beans-= coffeeShop["drinkRequirements"][drinkType];
    } 
    else if (coffeeShop["drinkRequirements"][drinkType] > coffeeShop.beans){
     alert("we're out of beans"); 
    }
    else {
      alert("Sorry, we don't make" + " " + drinkType);
    }
  },
/*Now give the coffeeShop a money property and the ability to buy more supplies with a buySupplies method. 
It should reduce 
the amount of money depending on how many beans are purchased. You decide how much the beans cost ;) */
  buySupplies: function (beansPurchased){
    var beanPrice = 1;
    coffeeShop.money-= beansPurchased * 1;
    coffeeShop.beans+= beansPurchased;

  }

};

coffeeShop.buyDrink("latte");



