//STRINGS
// const text = "Hello everyone!   ";
//length (number of characters)
// console.log("text.length", text.length);
//includes  true or false
// console.log(text.includes("o")); //true
// console.log(text.includes("i")); //false
// //toUpeercase()
// console.log(text.toUpperCase()); //converts to uppercase
// //trim()
// const trimmedText = text.trim();
// console.log("text.length", trimmedText.length);
// console.log(text.trim()); //removes white spaces
// //substring
// console.log(text.substring(0, 4)); //Hell
// console.log(text.substring(1)); //ello everyone!

// //chaining
// const result = text.toUpperCase().trim().substring(4);
// console.log("result", result);
// //*************************************************************************************************** */
// //NUMBERS
// const total = 1543.95345;
// //toFixed(0) //only integer values
// console.log(total.toFixed());
// //toFixed(2) //2 decimal values
// console.log(total.toFixed(2));
// console.log(typeof total); //number
// //*************************************************************************************************** */
// //BOOLEANS
// //when checking a string
// const nycText = "Map of NYC";
// console.log("nycText", nycText);
// // if (nycText.includes("NYC")) {
// if (!nycText.includes("NYC")) {
//   console.log("includes NYC");
// } else {
//   console.log("does not include NYC");
// }
// //when dealing with a server
// const response = {
//   statusCode: 500,
//   ok: false,
//   data: [1, 2, 3],
//   error: -1,
// };

// FALSY
// false (The Boolean value itself)
// 0 (The number zero)
// -0 (Negative zero, though it behaves identically to 0 in most cases)
// "" (An empty string)
// null (The intentional absence of any object value)
// undefined (A variable that has been declared but not assigned a value)
// NaN (Not a Number)

//NULLISH
// null (The intentional absence of any object value)
// undefined (A variable that has been declared but not assigned a value)

// if (!response.error) {
//   console.log("Something went wrong");
// }
// //*************************************************************************************************** */
// //ARRAYS
// const numbers = [99, 5, 8, 16];
// console.log("numbers", numbers);
// // //length (number of elements in the array)
// console.log(numbers.length);
// //push() //add an element
// numbers.push(9);
// console.log("numbers", numbers);
// //pop() //remove an element
// numbers.pop();
// console.log(numbers);
// //includes()
// console.log(numbers.includes(9));
// //foreach() //most common loop in javascript
// numbers.forEach((number) => console.log("number in array by two", number * 2));
// //objects in array
// const data = [
//   {
//     name: "john",
//     age: 45,
//   },
//   {
//     name: "Emily",
//     age: 28,
//   },
//   {
//     name: "Mike",
//     age: 32,
//   },
// ];
// console.log("data", data);
// console.log("emily age", data[1].age);

// //*************************************************************************************************** */
// //OBJECTS
// //object in object
// const userObj = {
//   name: "Emily",
//   age: 30,
//   hobbies: ["knitting", "programming"],
//   address: {
//     city: "Miami",
//     state: "Florida",
//   },
// };
// console.log("userObj", userObj);

// /*
// //property name is sometimes as property value
// const username = input.value;
// const password = input.value;
// const newUser = {
//   username: username,
//   password: password,
// };
// //passing an object as an argument to function
// const logUser = (user) => {
//   console.log(user.name);
//   console.log(user.age);
// };
// logUser(userObj);

//*************************************************************************************************** */
// //increment and decrement values
// let number = 100;
// // increment by 1
// number = number + 1;
// //same as
// number++;
// console.log("number", number);

// // decrement by 1
// number = number - 1;
// number--;
// console.log("number", number);
//*************************************************************************************************** */
//FUNCTIONS
//overview again
// function addNumbers() {
//   //normal named function
//   const newNumber = 100;
//   console.log(newNumber);
// }
// const addNumbers = () => {
//   //arrow function
//   const newNumber = 100;
//   console.log(newNumber);
// };
// addNumbers();

//calling other functions in function body
// const logHello = () => {
//   console.log("Hello");
//   console.log("Hi");
// };
// const addNumbers = () => {
//   const newNumber = 100;
//   console.log(newNumber);
//   logHello();
//   console.log(9999);
// };
// addNumbers();

//refactoring

//borh are logging hello and hi
//so we can create a function that does that
// const logGreetings = () => {
//   console.log("hello");
//   console.log("hi");
// };
// const doSomething = () => {
//   console.log(43345);
//   console.log(38453);
//   //   console.log("hello");
//   //   console.log("hi");
//   logGreetings();
// };
// const logStuff = () => {
//   console.log(true);
//   console.log(false);
//   console.log([2, 3, 4, 6]);
//   //   console.log("hello");
//   //   console.log("hi");
//   logGreetings();
// };

//early return / stop function execution
// const checkValidity = (number) => {
//   if (number < 50) {
//     console.log("Denied");
//     return; //stops
//   }
//   console.log("Approved");
// };
// console.log(checkValidity(30)); //function will return and it will not print out 'Approved'
//*************************************************************************************************** */
//HOISTING
// var number;
// number = 10;
// console.log(number);

//we can change the order and it will work too: that's HOISTING
// number = 10;
// console.log(number);
// var number; //declared at the end of the script (HOISTED: put at the top of the script)

//same here, we call the function before it's created
// logStuff();
// function logStuff() {
//   console.log("hello");
// }

//NOTE: HOISTING WILL NOT WORK WITH LET AND CONST AND ARROW FUNCTIONS
// number = 10;
// let number;
// console.log(number); //error!!!

// number = 10;
// const number;
// console.log(number); //error!!!

// logStuff(); //error!! arrow function cannot be hoisted
// const logStuff = () => {
//   console.log("Hi");
// };

//*************************************************************************************************** */
//TIMERS
// console.log("Hello");
// console.log("Hi");

// const triggerLogs = () => {
//   console.log("Hello");
//   console.log("Hi");
// };
// //run after 2 seconds
// setTimeout(() => {
//   triggerLogs();
// }, 5000); //function is run after 5 seconds once

// setInterval(() => {
//   console.log("Hello");
//   console.log("Hi");
// }, 2000); //function is called every 2 seconds
//*************************************************************************************************** */

//LOOPS
//foreaach
// const numbersArr = [5, 10, 15];

// numbersArr.forEach(function (nr) {
//   const numbersList = document.querySelector(".numbersList");
//   const liEl = document.createElement("li");
//   liEl.innerHTML = `<li>${nr} ciao</li>`;

//   /* const liEl = document.createElement("li");
//   liEl.append(nr);
//   numbersList.append(liEl); */

//   numbersList.insertAdjacentElement("beforeend", liEl);
// });
// let div = document.createElement("div");
// let p = document.createElement("p");
// div.append("Some text", p);
// console.log(numbersArr);
// numbersArr.forEach((number, index) => {
//   return (numbersArr[index] = number + 1);
// }); //executed for each element of the array
// console.log(numbersArr); //[6, 11, 16]

//for
// for (let i = 0; i < numbersArr.length; i++) {
//   // console.log(numbersArr[i] + 1);
//   const added = numbersArr[i] + 1;
//   numbersArr[i] = added;
// }
// console.log(numbersArr);

// The rest of code
//*************************************************************************************************** */
//FETCH API
// fetch("http://jsonplaceholder.typicode.com/todos"); //make the network request
// JSON = JAVASCRIPT OBJECT NOTATION
//assign it to a variable
// const serverData = fetch("http://jsonplaceholder.typicode.com/todos");
// console.log(serverData); //returns "Promise {<pending>}"

//it returns a promise, so we use .then
// fetch("http://jsonplaceholder.typicode.com/todos")
//   .then((res) => {
//     if (!res.ok) {
//       console.log("Problem"); //typically deal a 404 error
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//*************************************************************************************************** */
//DOM
// document.addEventListener("DOMContentLoaded", function (event) {
//   const number = 10;
//   const user = {
//     name: "Emily",
//     city: "Miami",
//   };
//   //   document.querySelector(".btn").disabled = true;
//   const buttonEl = document.querySelector(".btn");
//   //   buttonEl.blur(); //un-focus button
//   //   buttonEl.focus(); //focus
//   const inputEl = document.querySelector(".input");
//   inputEl.value = "blabla";
//   const headingEl = document.querySelector(".heading");
//   //   headingEl.textContent = "Hi everyone!";
//   //   headingEl.innerHTML = "Hi <span>everyone!</span>"; //inject html
//   //   headingEl.insertAdjacentHTML("afterend", "Hi <span>everyone!</span>");
//   //template literal:
//   headingEl.innerHTML = `Hi <span>everyone!</span><br />
//     How are you doing? <br />
//     Javascript is though!
//     ${number}<br />
//     User city is ${user.city}
//   `;
//   const containerEl = document.querySelector(".container");
//   containerEl.addEventListener("click", (event) => {
//     console.log("event", event.target); //shows the event clicked
//   });
// });

// //*************************************************************************************************** */
// //Event bubbling and Event delegation
// //attach an event listener to each element in the ul list
// const listEl = document.querySelector(".list");
// listEl.addEventListener("click", (event) => {
//   console.log(event.target);
// });

//*************************************************************************************************** */
//*************************************************************************************************** */
// ARRAY METHODS
//
// toString()
// join()
// pop()
// push()
// shift()
// unshift()
//
/*  
//toString()
//returns a string representation of an array
const arr = ["quick", "quock", "quack"];
console.log(arr.toString()); //'quick', 'quock', 'quack'
const values = arr.toString();
console.log(typeof values);
//
//join()
//joins the elements of an array into a string
console.log(arr.join("")); //quickquockquack
console.log(arr.join("-")); //quick-quock-quack
//
//pop()
//removes the last element of an array
console.log(arr.pop()); //quack
console.log(arr); //['quick', 'quock']
//
//push()
//adds new elements to the end of an array
arr.push("quack");
console.log(arr); //['quick', 'quock', 'quack']
//
//shift()
//removes the first element of an array
console.log(arr.shift()); //quick
console.log(arr); //['quock', 'quack']
//
//unshift()
//adds new elements to the beginning of an array
arr.unshift("quick");
console.log(arr); //['quick', 'quock', 'quack']
*/
//
// delete()
// concat()
// sort()
// splice()
// slice()
// reverse()
//
/*
//delete()
//remove the element at the specified index
const arr = [1, 2, 3, 4, 5];
delete arr[0];
console.log(arr); // [2, 3, 4, 5]
//
//concat()
//combine two or more arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3); // [1, 2, 3, 4, 5, 6]
//es6
const arr3 = [...arr1, ...arr2];
console.log(arr3); // [1, 2, 3, 4, 5, 6]
//
//sort()
// arranges array elements in alphabetical order
// by default js sorts elements as strings, for numbers use a compare function
const fruits = ["cherry", "apple", "banana", "mango"];
fruits.sort();
console.log("sort strings", fruits); // ["apple", "banana", "cherry", "mango"]
//nubmer sorting wrong!!!
const numbers = [1, 10, 2, 20];
numbers.sort();
console.log("sort numbers wrong", numbers); // [1, 10, 2, 20]
numbers.sort((a, b) => a - b);
console.log("sort numbers with callback - CORRECT", numbers); // [1, 2, 10, 20]
numbers.sort((a, b) => b - a);
console.log("sort numbers descending with callback - CORRECT", numbers);
//
//splice()
//adds/removes elements from an array
const nums = [1, 2, 3, 4, 5];
nums.splice(1, 2);
console.log(nums); // [1, 4, 5]
nums.splice(1, 0, "a", "b");
console.log(nums); // [1, "a", "b", 4, 5]
nums.splice(1, 2, "a", "b");
console.log(nums); // [1, "a", "b", 4, 5]
nums.splice(2, 2, "a", "b");
console.log(nums); // [1, "a", "a", "b", 4, 5]
//
//slice()
//returns a copy of a part of an array into a new array object
//array.slice(start, end)
const nums2 = [1, 2, 3, 4, 5];
const nums3 = nums2.slice(1, 4);
console.log(nums3); // [2, 3, 4]
//
//reverse()
//reverses the order of the elements in an array
const nums4 = [1, 2, 3, 4, 5];
nums4.reverse();
console.log(nums4); // [5, 4, 3, 2, 1]
*/

/*
// CHALLENGE
let inventory = ["Abbey Road", "The Dark Side of the Moon", "Thriller", "Back in Black"];
let newArrivals = ["Rumours", "Led Zeppelin IV"];

Add & Remove (Basics):
Use push() to add "Nevermind" to the end of the inventory.
Use pop() to remove the last album you just added.
Use unshift() to add "Kind of Blue" to the very beginning.
Use shift() to remove that first album again.

Organization:
Use sort() to put the current inventory in alphabetical order.
Use reverse() to flip that order (Z to A).

Merging Collections:
Use concat() to merge inventory and newArrivals into a single array called fullCollection.

Slicing and Dicing:
Use slice() to grab the two middle albums from fullCollection and store them in a new variable called staffPicks.
Use splice() on fullCollection to remove the 2nd item and replace it with "Purple Rain".

The "Hole" in the Collection:
Use delete to remove the 3rd item in fullCollection. (Notice how this leaves an empty "hole" or undefined value!)
Experiment using splice() as a much safer choice for removing items.

Formatting for Print:
Use toString() on fullCollection and log it to see the default comma-separated string.
Use join() on fullCollection to create a single string where each album is separated by a " | " symbol (e.g., Album 1 | Album 2).
*/

//
// isArray()
// indexOf()
// lastIndexOf()
// find()
// findIndex()
// includes()
//

//isArray()
// const arr = ["Js", "React", "Node", "Js"];
// console.log("isArray", Array.isArray(arr)); //true

//
//indexOf()
//array.indexOf(item,start)
//returns the index of the first element in the array that matches the specified value, -1 if not found, search from left to right. Negative start values count from the last element but still search from left to right
// const index = arr.indexOf("Js");
// console.log("indexOf", index); //0

//
//lastIndexOf()
//array.lastIndexOf(item,start)
//returns the index of the last element in the array that matches the specified value, -1 if not found, search from right to left. Negative start values count from the last element but still search from right to left
// const lastIndex = arr.lastIndexOf("Js");
// console.log("lastIndexOf", lastIndex); //3

//
//find()
//array.find(callback, thisArg)
//returns the value of the first element in the array that matches the specified condition, undefined if not found <----------- FIND (returns first element that matches the condition)
// const find = arr.find((item) => item === "Js");
// console.log("find", find); //Js

// const nums = [5, 12, 8, 130, 44];
// const result = nums.find((num) => num > 10);
// if(result) {
//   //... if undefined doesn't run
// }
// console.log("find() result", result);

// //FILTER DIFFERENCE - filter returns an array of element that fullfill the condition <----------- FILTER
// const filterresult = nums.filter((num) => num > 10);
// console.log("filter() result", filterresult);

//
//findIndex()
//array.findIndex(callback, thisArg)
//returns the index of the first element in the array that matches the specified condition, -1 if not found
// const findIndex = arr.findIndex((item) => item === "Js");
// console.log("findIndex", findIndex); //0
//difference between find() and findIndex()
// indexOf()	                        findIndex()
// Takes a value (e.g., 5, "apple")	Takes a callback function (e.g., x => x > 10)
// Uses strict equality (===)	        Executes a function for each element
// Simple arrays of primitives	        Arrays of objects or complex conditions
// Cannot find NaN	                    Can find NaN (via Number.isNaN)

//
//includes()
//checks whether an array includes a certain value
//return true or false
// arr.includes(value);
/* const hasReact = arr.includes("React");
console.log("includes", hasReact);

const newTechFilter =
  arr.includes("React") && arr.filter((item) => item === "Js");
console.log("newTechFilter", newTechFilter);

const hasZero = nums.includes(0);
console.log(hasZero); */

//
// entries()
// every()
// some()
// fill()
// copyWitIn()
// valueOf()

//entries()
//creates an array iterator object to get index and value of eache element
// const brands = ["Ferrari", "Lamborghini", "Porsche"];

// //loop through each element using entries()
// for (const entry of brands.entries()) {
//   console.log(entry);
// }

// //or if we want to separate index and value
// for (const [index, item] of brands.entries()) {
//   console.log(`index: ${index}, item: ${item}`);
// }

//every() --> ritorna un booleano
//test whether ALL elements in the array pass a condition
// const numsArr = [1, 2, 3, 4, 5];
// const numsArr = [2, 4, 6];
// const even = numsArr.every((num) => num % 2 === 0);
// console.log("every", even);

// some()
//test whether SOME elements in the array pass a condition
// const some = numsArr.some((num) => num % 2 === 0);
// console.log("some", some);

//fill()
//nums.fill(value, start, end);
//fill all elements in the array with a static value
// const nums = [1, 2, 3, 4];
// //nums.fill(0); //fill all values with 0
// nums.fill(0, 1, 3); //fill to index 1 to 2 //[1, 0, 0, 4]
// console.log("fill", nums);

//copyWitIn()
//copies a part of an array to another location in the same array, changes the original array and doesn't add new elements
// const numsArray = [1, 2, 3, 4, 5];
// numsArray.copyWithin(1, 3, 5); //copy elements from index 3 to 4 to index 1
// console.log("copyWithin", numsArray);

//valueOf()
//returns the primitive value of Number, String, Booolean or Date Object
//Javascript calls automatically but can be used to get the primitive value esplicitly
//object.valueOf()
// const number = new Number(123);
// console.log("valueOf", number.valueOf()); //123

// const string = new String("Hello");
// console.log("valueOf", string.valueOf()); //"Hello"

//
// forEach()
// map()
// filter()
// reduce()
// reduceRight()
// from()

/* const tech = [
  "Javascript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Vue.js",
];
console.log(tech);
//forEach()
//executes a provided function for each element of the array
//it does not return anything and does not change the original array.
//useful for performing actions on each elements of the array
const newTechForEach = []; //same if I declare it as a new Array();
tech.forEach((item, index) => {
  console.log("tech", item, "index", index);
  // tech[index] = item.toUpperCase(); //to change the original array
  newTechForEach[index] = item.toUpperCase(); //to create a new array without changing the original
});
 */
// const nums = [1, 2, 3, 4, 5];
// nums.forEach((el, index) => {
//   nums[index] = el * index;
// });
// console.log("nums", nums);
// console.log("forEach", newTechForEach);

//map()
// const newArray = array.map(callback);
//creates a new array applying a function to each element of the original array. IT DOES NOT CHANGE THE ORIGINAL ARRAY (IMMUTABILITY)
// const newTech = tech.map((item, index) => {
//   return item.toUpperCase() + " v.1.0";
// });
// console.log("map - newTech", newTech);

//filter() <--- array
// const newArray = array.filter(callback);
//filter creates a new array with elements that pass a condition. IT DOES NOT CHANGE THE ORIGINAL ARRAY (IMMUTABILITY)
// const newTechFilter = tech.filter((item, index) => {
//   return item.includes("js");
// });
// console.log("filter", newTechFilter);

//reduce()
// const newValue = array.reduce((accumulator,currentValue)=> {...}, initialValue);
//reduce creates a new value by applying a function to each element of the original array. IT DOES NOT CHANGE THE ORIGINAL ARRAY (IMMUTABILITY)
/* const numbers = [10, 20, 30];
const total = numbers.reduce((acc, item, index) => {
  console.log("index", index, "item", item, "accumulator", acc);
  return acc + item;
}, 0);
console.log("reduce total", total);

const objNums = [
  {
    value: 10,
  },
  {
    value: 20,
  },
  {
    value: 30,
  },
];
const objTotal = objNums.reduce((acc, item, index) => {
  return acc + item.value;
}, 0); */

//reduceRight()
// const newValue = array.reduceRight((accumulator,currentValue)=> {...}, initialValue);
//same as reduce but starts from the last element
// const tech = [
//   "Javascript",
//   "React.js",
//   "Next.js",
//   "Node.js",
//   "Express",
//   "Vue.js",
// ];
// const sentence = tech.reduceRight((acc, item, index) => {
//   //console.log("index", index, "item", item, "accumulator", acc);
//   return acc + " " + item;
// }, "The best tech stack is: ");
// console.log("", sentence);

//from()
// const newArray = Array.from(arrayLikeIterable, mapFunction);
//converts an array-like object into an array. IT DOES NOT CHANGE THE ORIGINAL ARRAY (IMMUTABILITY)
//difference. it's called as a Static method from the Array class, used to convert or convert AND transform (usually from String, a Set, or DOM elements)
//used to create an array from something else, usually
// const techString = "React";
// const techArrayFrom = Array.from(techString);
// console.log("from string", techArrayFrom);
//ex, with mapping
// const nums = [1, 2, 3];
// const doubled = Array.from(nums, (n) => num * 2);
// console.log("from doubled", doubled);

// const labels = nums.map((n) => `Price: $${n}`);
// // Result: ["Price: $10", "Price: $20", "Price: $30"];
// console.log("labels", labels);

// REDUCE COMPLEX EXAMPLES
// Example 1: Return avarage grade from an array of grades
// const grades = [85, 90, 78, 92];
// console.log("GRADES", grades);
// const average = grades.reduce((total, grade, index, array) => {
//   total += grade;
//   console.log("array", array, "total", total, "grade", grade, "index", index);
//   // If we are at the last item, divide by the length
//   if (index === array.length - 1) {
//     return total / array.length;
//   }
//   //else return the sum (total is the accumulator)
//   return total;
// }, 0);
// console.log(average); // Output: 86.25

//Part 2: Intermediate (Transformations)
//transforming data structures, such as turning arrays into objects or filtering while reducing
// const fruits = ["apple", "banana", "orange", "apple", "orange", "apple"];

// const fruitCounts = fruits.reduce((counts, fruit, index) => {
//   console.log(
//     "acc - counts",
//     counts,
//     "fruit",
//     fruit,
//     "counts[fruit]",
//     counts[fruit],
//     "index",
//     index,
//   );
//   // If the fruit exists in the object, increment it; otherwise, set to 1
//   counts[fruit] = (counts[fruit] || 0) + 1;
//   return counts;
// }, {}); // Initial value is an empty object

// console.log(fruitCounts);
// Output: { apple: 3, banana: 1, orange: 2 }

// Exercise 4: Flattening an Array of Arrays
const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.reduce((acc, item) => acc.concat(item), []);
console.log(flattenedArray);
/*
// Part 3: Complex (Real-world Data Structures)
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
];
// {
//   25: [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }],
//   30: [{ name: 'Bob', age: 30 }, { name: 'David', age: 30 }]
// }
const peopleByAge = people.reduce((acc, person) => {
  const age = person.age;
  // If the key doesn't exist yet, create it as an empty array
  if (!acc[age]) {
    acc[age] = [];
  }
  // Push the current person into the correct array
  acc[age].push(person);
  return acc;
}, {});

console.log(peopleByAge);

// Exercise 6: Calculating Cart Total with Logic
const cart = [
  { name: "Laptop", price: 1000, isTaxable: true, inStock: true },
  { name: "Apple", price: 2, isTaxable: false, inStock: true },
  { name: "T-shirt", price: 20, isTaxable: true, inStock: false }, // Skip this
  { name: "Book", price: 15, isTaxable: true, inStock: true },
];
const totalCost = cart.reduce((total, item) => {
  if (!item.inStock) return total; // Skip out of stock items

  let itemPrice = item.price;

  if (item.isTaxable) {
    itemPrice *= 1.1; // Add 10% tax
  }

  return total + itemPrice;
}, 0);

console.log(totalCost);
// Output: 1033.5
// could be done by chaining .filter().map().reduce(). However, doing it in a single .reduce() is often more performant because you only iterate over the array once, rather than three times.

// Exercise 7: Pipeline Processing (Advanced)
const double = (x) => x * 2;
const addTen = (x) => x + 10;
const square = (x) => x * x;

const functionsArray = [double, addTen, square];
const initialValue = 5;

const result = functionsArray.reduce((currentValue, currentFunction) => {
  return currentFunction(currentValue);
}, initialValue);

console.log(result); // Output: 400
*/
