// Dati Iniziali
const transactions = [
  { id: 1, description: "Stipendio Mensile", amount: -2500.0, type: "income" },
  { id: 2, description: "Caffè e snack", amount: 4.5, type: "expense" },
  { id: 3, description: "Affitto", amount: 950.0, type: "expense" },
  { id: 4, description: "Rimborso Tasse", amount: -150.0, type: "income" },
  {
    id: 5,
    description: "Spesa al supermercato",
    amount: 75.2,
    type: "expense",
  },
];

//formatCurrency arrow function that formats a number as currency in a specific format (ex € 1.234,50)
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

// -----------------------------------------------------
// Exercise:
// test direct access to an object data
// -----------------------------------------------------

// 1. create a showTransactionDetails function to show transaction details based on index (use .value for the inputElement index). Use the formatCurrency function to format the amount.
function showTransactionDetails() {}

// Create a click event listener for show-btn element

// Start initial visualization calling the main showTransactionDetails fumction

// ex. style can be added with javascript, just as a normal html element_
document.head.insertAdjacentHTML(
  "beforeend",
  `
    <style>
        .income { color: green; font-weight: bold; }
        .expense { color: red; }
    </style>
`
);
