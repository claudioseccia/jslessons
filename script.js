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
// }
//shorter syntax:
//same as above (direct return without curly braces for a single operation)
// const calculatePrice = (squareMeters) => 1000 + squareMeters;
// console.log(calculatePrice(5000));
//********************************************** */
//naming for functions:
// always start with a verb: ex: calculate, make, destroy, put, delete etc...
