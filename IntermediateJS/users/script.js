// fetch("http://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     if (!res.ok) {
//       console.log("Problem"); //typically deal a 404 error
//       return;
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach((user) => {
//       const markup = `<li>${user.name}</li>`;
//       document.querySelector("ul").insertAdjacentHTML("beforeend", markup);

//       //same thing
//       //   const liEl = document.createElement("li");
//       //   liEl.textContent = user.name;
//       //   document.querySelector("ul").appendChild(liEl);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//FETCH API
console.log("FETCH API - GET/POST/PUT/DELETE");
//GET
// fetch("https://reqres.in/api/users")
//   .then((response) => {
//     if (!response.ok) {
//       console.log("Something went wrong. 404 error");
//       return;
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data.data[0].first_name))
//   .catch((error) => console.log(error));

//POST
// const newUser = {
//   name: "Maria",
//   job: "Teacher",
// };
// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newUser), //convert to JSON
// })
//   .then((response) => {
//     if (!response.ok) {
//       console.log("Something went wrong. 404 error");
//       return;
//     }
//     return response.json();
//   })
//   .then((data) => console.log("Successfully submitted"))
//   .catch((error) => console.log(error));

//PUT
// const newUser = {
//   name: "Maria",
//   job: "Teacher",
// };
// //we have to specify which resource we want to update, ex.55
// fetch("https://reqres.in/api/users/55", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newUser), //convert to JSON
// })
//   .then((response) => {
//     if (!response.ok) {
//       console.log("Something went wrong. 404 error");
//       return;
//     }
//     return response.json();
//   })
//   .then((data) => console.log("Successfully updated"))
//   .catch((error) => console.log(error));

//DELETE
// fetch("https://reqres.in/api/users/55", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => {
//     if (!response.ok) {
//       console.log("Something went wrong. 404 error");
//       return;
//     }
//     return response.json();
//   })
//   .then((data) => console.log("Successfully deleted"))
//   .catch((error) => console.log(error));
