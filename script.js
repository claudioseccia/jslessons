// -- variables (var/let/const) & data types/structures (strings/numbers/booleans/arrays/objects) --
//VAR
var description = "We need a new floor.";
var squareMeters = 100; //camel case

var test = 5;
var test = 10; //overwrites previous value

//CONST
const testTwo = 5;
//const testTwo = 10; //throws error

//LET
let testThree = 5;
testThree = 10;

//BOOLEAN
const specialCoating = true;

//ARRAY
const floorOptions = ["carpet", "hardwood", "tiles", 99, true];

const houseOptions = [
  "bathroom",
  "kitchen",
  "living room",
  ["bedroom 1", "bedroom 2", ["color 1", "color 2"]],
  {
    ownerName: "John",
  },
]; //multi-dimensional array

const renovationJob = {
  ownerName: "John",
  maximumPrice: 5000,
  category: "bathroom",
  newShower: true,
  newTowel: false,
  colorOptions: ["red", "blue", "green"], //array inside object
  calculatePrice: () => 3000 + squareMeters, //functions
  owner: {
    name: "Max",
    age: 30,
    address: "123 Main St",
    city: "New York",
  },
};

let error = {
  statusCode: 404,
  description: "...",
  retry: false,
  recovery: {
    action: "retry",
    time: 5,
  },
};

// using console.log
// console.log("access individual variable", description);
// console.log("access array element", floorOptions[1]);
// console.log("access object element", renovationJob.category);
// console.log("access whole object", error);

//********************************************** */

// {
//   //BLOCK SCOPE
//   const price = 1000 + 3000;
//   let tax = 0.15;
//   var total = price + price * tax; //<---- var is accessible outside the block
// }
// console.log(total);
// -- traditional functions vs arrow functions --
//traditional function - named function
// function calculatePrice() {
//   const price = 1000 + 3000;
//   console.log(price);
// }
// calculatePrice(); //call the function

//adding a parameter
// function calculatePrice(squareMeters) {
//   const price = 1000 * squareMeters;
//   console.log(price);
// }
// calculatePrice(5000); //call the function

//returning something from a function
// function calculatePrice(squareMeters) {
//   // const price = 1000 * squareMeters;
//   // return price;
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
// const calculatePrice = (squareMeters) => 1000 + squareMeters;
// console.log(calculatePrice(5000));
//********************************************** */
//naming for functions:
// always start with a verb: ex: calculate, make, destroy, put, delete etc...

//*************************************************************************************************** */
// -- string concatenation vs template literals --

//string concatenation
// const price = 9000;
// const result = "The total cost will be: " + price + " USD"; //string concatenation, the whole thing will be treated as a string

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
// if (price > 2000) {
//   console.log("Price is more than 2000");
// } else {
//   console.log("Price is too low"); //<---- this will be printed
// }

// == vs ===
// = assignment
// == comparison //useful only when values are numbers
// === strict comparison

// const num1 = "3";
// const num2 = "3";
// console.log("hello", num1 === num2);

//loose comparison:
//compares only value
//const price = '5000';
//price == 5000 ---> true
// price == '5000' ---> true

//strict comparison:
//compares type and value
// const price = '5000';
// price === 5000 ---> false! price is a string and 5000 is a number
// price === '5000' ---> true

//IF ELSE OPERATOR
// const price = 5000;
// if (price === 5000) {
//   console.log("Price is 5000"); //<--- this will be printed
// } else {
//   console.log("Price is NOT the expected value");
// }

// >= greater than or equal to
// // <= less than or equal to
// const price = 5000;
// if (price >= 5000) {
//    console.log("Price is greater or more than 5000");
// }
// if (price <= 5000) {
//    console.log("Price is less or equal than 5000");
// }

// //!= vs !==
// ! + = vs ! + ==
// const price = 5000;
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
const price = 5000;
// price > 3000
//   ? price === 5000
//     ? console.log("Price is 5000")
//     : console.log("Price is more than 3000")
//   : console.log("Price is less than 3000");

if (price > 3000) {
  if (price === 5000) {
    console.log("Price is REALLY 5000");
  }
  console.log("Price is more than 3000");
} else {
  console.log("Price is less than 3000");
}
