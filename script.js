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

const error = {
  statusCode: 404,
  description: "...",
  retry: false,
  recovery: {
    action: "retry",
    time: 5,
  },
};
