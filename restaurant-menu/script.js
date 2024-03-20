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
    pFirst.textContent = this.price;
    pLast.textContent = this.description;
   }
}

// Objects
// create 5 Menu objects here...
// const breakfast = new Menu(parameter, parameter, parameter, parameter);
const breakfast = new Menu('./image/omelette.jpg',
"omelette",
'12.99',
"Eggs, bacon, potatoes");

const lunch = new Menu('')
// Listens for when the webpage loads
window.addEventListener("load", () => {
  breakfast.display();
});

// Button Event Listeners
// add code here...

$breakfastBtn.addEventListener("click", function () {
  console.log('Breakfast World!');


});

$drinkBtn.addEventListener("click", function () {
  console.log('Drink World!');

});

$lunchBtn.addEventListener("click", function () {
  console.log("Lunch World!");
});

$dinnerBtn.addEventListener("click", function () {
  console.log("Dinner World!");
});

$dessertBtn.addEventListener("click", function () {
  console.log("Dessert World!");
});
