const library = [
  {
    title: "The Martian Chronicles",
    author: "Ray Bradbury",
    year: 1950,
    tags: ["sci-fi", "classic"],
    stats: { rating: 4.8, pages: 312, available: true },
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    tags: ["sci-fi", "epic", "politics"],
    stats: { rating: 4.9, pages: 412, available: false },
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    tags: ["fantasy", "classic"],
    stats: { rating: 4.7, pages: 310, available: true },
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    year: 1984,
    tags: ["cyberpunk", "sci-fi"],
    stats: { rating: 4.4, pages: 271, available: true },
  },
  {
    title: "Foundation",
    author: "Isaac Asimov",
    year: 1951,
    tags: ["sci-fi", "classic"],
    stats: { rating: 4.6, pages: 255, available: false },
  },
];
console.log("library", library);
//1. create a new array of books that are specifically classics (classic is on tags on object)

//2. print an array with only the titles of the classics

//3. create an array with descriptive strings using template literals for each book composed as:
//(title book... ) was written by (author...)

//4. find the first book having more than 400 pages

//5. return an array of books with more than 300 pages

//6. return a boolean value checking if the tag "politics" is included in the entry "tags" of almost one of the objects in the array

//7. return a boolean returning the condition that all the rating are greater than 4.0

//8. return the number of total pages for all the books
