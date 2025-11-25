document.addEventListener("DOMContentLoaded", () => {
  (() => {
    // Dati Iniziali
    const transactions = [
      { id: 1, description: "Stipendio Mensile", amount: +2500.0, type: "income" },
      { id: 2, description: "Caffè e snack", amount: -4.5, type: "expense" },
      { id: 3, description: "Affitto", amount: -950.0, type: "expense" },
      { id: 4, description: "Rimborso Tasse", amount: +150.0, type: "income" },
      {
        id: 5,
        description: "Spesa al supermercato",
        amount: -75.2,
        type: "expense",
      },
    ];

    //formatCurrency arrow function che formatta numeri come valuta italiana (ex € 1.234,50)
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
    const inputEl = document.getElementById("transaction-index");
    const idEl = document.getElementById("record-id");
    const descEl = document.getElementById("record-description");
    const amountEl = document.getElementById("record-amount");
    const showBtn = document.getElementById("show-btn");
    // 1. create a showTransactionDetails function to show transaction details based on index (use .value for the inputElement index). Use the formatCurrency function to format the amount.
    const showTransactionDetails = () => {
      if (!inputEl) return;

      // leggere e convertire l'indice
      const raw = String(inputEl.value).trim();
      const index = Number.parseInt(raw, 10);

      //  controlla se la validità dell'indice
      if (Number.isNaN(index) || index < 0 || index >= transactions.length) {
        idEl.textContent = "";
        descEl.textContent = "";
        amountEl.textContent = `Indice fuori range (0 - ${transactions.length - 1})`;
        amountEl.className = "amount";
        return;
      }

      const tx = transactions[index];

      idEl.textContent = tx.id;
      descEl.textContent = tx.description;
      amountEl.textContent = formatCurrency(tx.amount);

      // Aggiungi una classe CSS a amountEl in base al tipo di transazione (entrata/uscita)
      amountEl.classList.remove("income", "expense");
      if (tx.type === "income") {
        amountEl.classList.add("income");
      } else if (tx.type === "expense") {
        amountEl.classList.add("expense");
      }
    };

    // Create a click event listener for show-btn element
    if (showBtn) {
      showBtn.addEventListener("click", showTransactionDetails);
    }

    if (inputEl) {
      inputEl.addEventListener("keyup", (e) => {
        if (e.key === "Enter") showTransactionDetails();
      });

      // Imposta i valori min e max per l'inputEl in base alla lunghezza dell'array transactions
      inputEl.setAttribute("min", "0");
      inputEl.setAttribute("max", String(transactions.length - 1));
    }

    // Start initial visualization calling the main showTransactionDetails fumction
    showTransactionDetails();
    // ex. style can be added with javascript, just as a normal html element_
    document.head.insertAdjacentHTML(
      "beforeend",
      `
        <style>
            .income { color: green; font-weight: bold; }
            .expense { color: red; }
            #transaction-details {margin-top: 1rem;}
            #record-amount.amount { font-style: normal; }
        </style>
    `
    );
  })();
});
