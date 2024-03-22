// Variables
// create your variables here...
const img = document.querySelector("#menu img");
const div = document.querySelector("#menu div");
const h2 = document.querySelector("#menu h2");
const pFirst = document.querySelector("#menu p:first-of-type");
const pLast = document.querySelector("#menu p:last-of-type");

const $breakfastBtn = document.querySelector("#breakfast");
const $drinkBtn = document.querySelector("#drinks");
const $lunchBtn =  document.querySelector("#lunch");
const $dessertBtn = document.querySelector("#dessert");
const $dinnerBtn = document.querySelector("#dinner");

const $menu = document.querySelector("#menu");

//
//Select all items that is ul li
// const $itemButtons = document.querySelectorAll('ul li');
// let prevSelectedItem = null;


// Menu Class

class Menu {
  constructor(image,name,price,description){
    this.image = image;
    this.name = name;
    this.price = price;
    this.description = description;
  }
  // add a constructor here...
   // add a function here...

    display(){

    img.src = this.image;
    h2.textContent = this.name;
    pFirst.textContent = `$${this.price}`;
    pLast.textContent = this.description;
   }
}

// Objects
// create 5 Menu objects here...
// const breakfast = new Menu(parameter, parameter, parameter, parameter);
const breakfast = new Menu('./image/omelette.jpg',
"Omelette",
'12.99',
"Eggs, bacon, potatoes");
const lunch = new Menu('./image/burger-fries.jpg', "Burger with Fries", "13.99", "With a side of fries");
const dinner = new Menu('./image/steak.jpg','Steak' ,'17.99', 'Comes With mashed potatoes and green beans' );
const dessert = new Menu('./image/lava-cake.jpg', 'Chocolate Lava Cake', "7.99", 'Chocolate cake with hot chocolate inside');
const drink = new Menu('./image/soda.jpg','Soda', '1.99', 'Glass of soda of your choice');

// Listens for when the webpage loads
window.addEventListener("load", () => {
  breakfast.display();
});

// Button Event Listeners
// add code here...

$breakfastBtn.addEventListener("click", function () {
  breakfast.display();
});

$drinkBtn.addEventListener("click", function () {
  drink.display();
});

$lunchBtn.addEventListener("click", function () {
  lunch.display();
});

$dinnerBtn.addEventListener("click", function () {
  dinner.display();
});

$dessertBtn.addEventListener("click", function () {
  dessert.display();
});


//
// const handleItemClick = (item) => {
//   return () => {
//     if (prevSelectedItem) {
//       prevSelectedItem.style.textDecoration = "none";
//       prevSelectedItem.style.backgroundColor = "white";
//     }
//     item.style.textDecoration = "underline";
//     item.style.backgroundColor = "aquamarine";
//     prevSelectedItem = item;

//     // Display the corresponding menu item
//     switch (item.id) {
//       case "breakfast":
//         breakfast.display();
//         break;
//       case "lunch":
//         lunch.display();
//         break;
//       case "dinner":
//         dinner.display();
//         break;
//       case "dessert":
//         dessert.display();
//         break;
//       case "drinks":
//         drink.display();
//         break;
//       default:
//         break;
//     }
//   };
// };

// $itemButtons.forEach((button) => {
//   button.addEventListener("click", handleItemClick(button));
// });
