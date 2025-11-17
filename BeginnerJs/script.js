// -- variables (var/let/const) & data types/structures (strings/numbers/booleans/arrays/objects) --
//VAR
// var description = "We need a new floor.";
// var squareMeters = 100; //camel case

//var test = 5;
//var test = 10; //overwrites previous value

// //CONST
//const testTwo = 5;
// //const testTwo = 10; //throws error

// //LET can change the value
// let testThree = 5;
// testThree = 10;

// //BOOLEAN
// const specialCoating = true; //true or false

//boolean //string //number //array //object //null //undefined
//null //undefined //0 //false ---> falsy
// const value = 0; //falsy
// if (value) {
//   //if (true) {...}
//   console.log("Value is true");
// }

// if (!value) {
//   //if (false) {...}
//   console.log("Value is false");
// }

// //ARRAY
// const floorOptions = ["carpet", "hardwood", "tiles", 99, true, null];

// const houseOptions = [
//   "bathroom",
//   "kitchen",
//   "living room",
//   ["bedroom 1", "bedroom 2", ["color 1", "color 2 questo"]],
//   {
//     ownerName: "John",
//   },
// ]; //multi-dimensional array
// const color2 = houseOptions[3][2][1];
// console.log(color2);

// const renovationJob = {
//   ownerName: "John",
//   maximumPrice: 5000,
//   category: "bathroom",
//   newShower: true,
//   newTowel: false,
//   colorOptions: ["red", "blue", "green"], //array inside object
//   calculatePrice: () => 3000 + squareMeters, //functions
//   owner: {
//     name: "Max",
//     age: 30,
//     address: "123 Main St",
//     city: "New York",
//   },
// };
// const maximumPrice = renovationJob.maximumPrice;
// const secondColorOption = renovationJob.colorOptions[1];
// console.log(
//   "maximumPrice",
//   maximumPrice,
//   typeof maximumPrice,
//   "secondColorOption ---->",
//   secondColorOption,
//   "owner address ---->",
//   renovationJob.owner.address
// );
// let error = {
//   statusCode: 404,
//   description: "...",
//   retry: false,
//   recovery: {
//     action: "retry",
//     time: 5,
//   },
// };

// using console.log
// console.log("access individual variable", description);
// console.log("access array element", floorOptions[1]);
// console.log("access object element", renovationJob.category);
// console.log("access whole object", error);

//********************************************** */

// {
//   //BLOCK SCOPE
//   const price = 1000 + 3000; //block scoped
//   let tax = 0.15; //block scoped
//   var total = price + price * tax; //<---- var is accessible outside the block
// }
// console.log("price", price, "tax", tax, "total", total);
// console.log(total);
// -- traditional functions vs arrow functions --
//traditional function - named function
// function calculatePrice() {
//   const price = 1000 + 3000;
//   console.log(price);
// }
// // calculatePrice(); //call the function
// console.log(price);
//adding a parameter
// function calculatePrice(squareMeters) {
//   const price = 1000 * squareMeters;
//   console.log(price);
// }
// calculatePrice(5000); //call the function
// console.log(1000 + "5000");

//returning something from a function
// function calculatePrice(squareMeters) {
//   const price = 1000 * squareMeters;
//   return price;
//   //same as above;
//   // return 1000 * squareMeters;
// }
// const result = calculatePrice(5000); //call the function
// console.log(result);

//********************************************** */
//assign name to anonymous function
// const calculatePrice = function (squareMeters) {
//   return 1000 * squareMeters;
// };

// console.log(calculatePrice(5000));
//********************************************** */
//arrow function
// const calculatePrice = (squareMeters) => {
//   return 1000 + squareMeters;
// };
//shorter syntax:
//same as above (direct return without curly braces for a single operation)
// const calculatePrice = (squareMeters) => 1000 * squareMeters;
// console.log(calculatePrice(5000));

// var hello = "hello"; //global scope
// const consoleHello = (helloString) => {
//   //console.log(helloString);
//   hello = helloString;
// };
// consoleHello("Ciao");
// console.log(hello);
// //********************************************** */
//naming for functions:
// always start with a verb: ex: calculate, make, destroy, put, delete etc...

//*************************************************************************************************** */
// -- string concatenation vs template literals --

//string concatenation
// const price = 9000;
// const result = "The total cost will be: " + price + " USD"; //string concatenation, the whole thing will be treated as a string
// console.log(result, typeof result);
// const name = "John";
// const age = 12;
// const result = "Name is " + name + " and his age is " + age + " years old";
// console.log(result);
//template literal
// const price = 9000;
// const result = `The total cost will be: ${price}`; //template literal

//multiple lines in template literal
// const price = 9000;
// const result = `The total cost will be
// a very cheap price,
// to fulfill the demand: ${price}`; //template literal

// console.log(result);
//*************************************************************************************************** */
// -- if-else vs ternary operator --
//< > operators and if conditional

// > greater than
// < less than
// const price = 5000;
// const totalPrice = 6000;
// const qty = 12;
// if (totalPrice > 2000) {
//   console.log("Price is more than 2000");
// } else {
//   console.log("Price is too low"); //<---- this will be printed
// }

// == vs ===
// = assignment
// == comparison //useful only when values are numbers
// === strict comparison

// let num1 = 3;
// let num2 = "3";
// console.log("normal comparison", num1 == num2);
// console.log("strict comparison", num1 === num2);
// num1 = num2;
// console.log("assignment", typeof num1);

//loose comparison:
// compares only value
// const price = '5000';
// price == 5000 ---> true
// price == '5000' ---> true

//strict comparison:
//compares type and value
// const price = "5000";
// price === 5000 ---> false! price is a string and 5000 is a number
// price === '5000' ---> true
// if (price === "5000") {
//   console.log("Price is 5000");
// }

//IF ELSE OPERATOR
// const price = 5001;
// if (price === 5000) {
//   console.log("Price is 5000"); //<--- this will be printed
// } else if (price === 100000) {
//   console.log("Price 100000");
// } else {
//   console.log("Price is NOT the expected value");
// }

// >= greater than or equal to
// // <= less than or equal to
// const price = 5000;
// if (price >= 5000) {
//   console.log("Price is greater or more than 5000");
// }
// if (price <= 5000) {
//   console.log("Price is less or equal than 5000");
// }

// //!= vs !==
// ! + = vs ! + ==
// const price = 6000;
// if (price != 6000) {
//   console.log("Price is NOT 6000");
// }
// if (price !== "6000") {
//   console.log("Price is NOT '6000' as a string");
// }

//&& operator
//all the conditions have to be met
// const price = 5000;
// const weather = "bad";
// const falsy = 0;

// if (price && weather && falsy) {
//   console.log("Price is 5000 and weather is bad");
// }

//if one of the statements are false the entire thing is false
// price === 5000 && weather === "bad" ---> true
// if (price === 100000 && weather === "bad") {
//   console.log("Price is 5000 and weather is bad");
// }
// price === 100000 && weather === "bad" ---> false
// if (price === 5000 && weather === "bad") {
//   console.log("Price is 5000 and weather is bad");
// }
// if (price === 100000 && weather === "bad") {
//   console.log("Price is 100000 and weather is bad"); //NOT SHOWING, THE IF STATEMENT IS FALSE
// } else {
//   console.log(
//     "If one of the statements concatenated with && is false the entire thing is false"
//   );
// }

// math operators sequence and priority
// const price = 5000 + 1000 * 2; //return 7000
// console.log("price: ", price);

//TERNARY OPERATOR
// const price = 5000;
// price > 3000
//   ? console.log("Price is more than 3000")
//   : console.log("Price is less than 3000");
// price > 3000
//   ? price === 5000
//     ? console.log("Price is 5000")
//     : console.log("Price is more than 3000")
//   : console.log("Price is less than 3000");

// if (price > 3000) {
//   if (price === 5000) {
//     console.log("Price is REALLY 5000");
//   }
//   console.log("Price is more than 3000");
// } else {
//   console.log("Price is less than 3000");
// }

//truthy and falsy values
// a value with something assigned is by default truthy, except with value as 0 or false
// const price = 5; //true
// const price = true; //true
// const price = false; //false
// const price = -1; //true
// const price = 0; //false
// const price = false; //false
// if (price) {
//   console.log("Price is truthy");
// } else {
//   console.log("Price is falsy");
// }

//var vs let
//var is scoped globally and also in functions (only in function blocks)
//let is block scoped and also in functions
// if (5000) {
//   //truthy
//   let hello = "hello"; //let is scoped to the block
//   console.log(hello, "inside the block");

//   const world = "world"; //const is scoped to the block
//   console.log(world, " world inside the block");

//   var hi = "hi";
//   console.log(hi, "inside the block");
// }
// console.log(hi, "outside the block"); //hi is accessible inside and outside a block
// console.log(hello, "outside the block"); //outside it throws an error, hello is not defined in this scope (outside the block)
// console.log(world, " world outside the block");

// /* The function `someFunc()` is defining two variables `ok` and `good` inside its block scope. */
// var ok = true;
// function someFunc() {
//   var ok = 100;
//   console.log(ok, "inside the function");
//   let good = 50;
//   console.log(good, "inside the function");
//   const world = "world"; //const is scoped to the block
//   console.log(world, " world inside the block");
// }
// someFunc();
// console.log(typeof ok, "outside the function"); //throws an error, ok is not defined outside the function
// console.log(good, "good outside the function"); //throws an error, good is not defined outside the function
// console.log(world, "world outside the function");
//*************************************************************************************************** */
// -- manipulating HTML and CSS --

//MANIPULATE HTML
// hello; //throws an error:script.js:240 Uncaught ReferenceError: hello is not defined
//console; //this is something that exists in the browser, it doesn't throw an error
// console.log //accessing a method of the console object with the point notation
// console.error("this is an error");
//document; //document object is also something that exists in the browser, it doesn't throw an error
//ex: document.images ---> it gives all the images in the page
// console.log(document.images);
//getElementsByClassName ---> selects a class name
// const heading = document.getElementsByClassName("heading");
// const title = document.getElementById("title"); //#title
// querySelector ---> selects a class name or id name or a element tag name
// const headingTag = document.querySelector("#title"); //select by tag name (in this case returns the first Element within the document that matches the specified selector)
// console.log("headingTag", headingTag); //only returns the first h1 on the page
// const headingClass = document.querySelector(".heading"); //select by class name
// console.log("headingClass", headingClass); //only returns the first element with that class name on the page
// const headingId = document.querySelector("#title"); //select by id
// console.log("headingId", headingId); //return the element with the specified identifier

//convention to name a variable assigned to an HTML element: append El to variable name
// const headingEl = document.querySelector(".heading");

//_________________________ QUI
//textContent --->  changes the text content of the element, textContent is both setter and getter
// console.log("text content", headingEl.textContent); //getter
//headingEl.textContent = "Hello <span class='heading--big'>everyone</span>!"; //setter ---> it doesn't inject html
//this one will change the text to: Hello <span class='heading--big'>everyone</span>! literally, it doesn't inject html

//innerHtml ---> changes the HTML content of the element, innerHtml is both setter and getter
//console.log("innerHTML", headingEl.innerHTML); //getter
//headingEl.innerHTML = "Hello <span class='heading--big'>everyone</span>!"; //setter <-- THIS WILL INJECT HTML

//insertAdjacentHTML
//adds element before or after another element
// headingEl.insertAdjacentHTML(
//   "afterend",
//   "Hello <span class='heading--big'>everyone</span>!"
// );

//MANIPULATE STYLE
//.style //not raccomended
// headingEl.style.color = "#ff0000"; //.style changes an attribute
// headingEl.style.fontSize = "55px"; //
//classList
// headingEl.classList.add("heading--big"); //add a class

//*************************************************************************************************** */
// -- events and functions for handling events (also called "event handlers") --
// const headingEl = document.querySelector(".heading");
//addEventListener('EVENT_TYPE', FUNCTION)

//handler function, usually called with the event type + Handler
// const clickHandler = () => {
//   headingEl.style.color = "red";
//   console.log("changed color");
// };
// headingEl.addEventListener("click", clickHandler);

//with an anonymous function
// headingEl.addEventListener("click", () => {
//   headingEl.style.color = "red";
//   console.log("changed color");
// });
