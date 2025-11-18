// Selettori DOM (variabili const/let)

const counterElement = document.querySelector('.counter');
const titleElement = document.querySelector('.counter__title');
const valueElement = document.querySelector('.counter__value');
const incrementButton = document.querySelector('.counter__button--increase');
const decrementButton = document.querySelector('.counter__button--decrease');
const resetButton = document.querySelector('.counter__reset--button');
let counter = 0; 
const defaultColor = valueElement ? getComputedStyle(valueElement).color : '#000'; //Prende il colore di default dal CSS


// Funzioni 

// Aggiorna il display del contatore
const updateDisplay = () => {
  if (!valueElement) return; 
  valueElement.textContent = `${counter}`; 
  applyStylesAndState();
};

// Applica stili e stato in base alle regole del contatore
const applyStylesAndState = () => {
  if (!valueElement || !titleElement || !counterElement) return; 

  // Resetta gli stili : titolo , classe limite e colore default
  titleElement.textContent = 'Fancy Counter';
  counterElement.classList.remove('counter--limit');
  valueElement.style.color = defaultColor;

  if (counter > 5) {
    valueElement.style.color = 'red';
    titleElement.textContent = 'Limit! Buy Pro for >5';
    counterElement.classList.add('counter--limit');
    setButtonsDisabled(true);
  } else if (counter > 0) {
    valueElement.style.color = 'green';
    setButtonsDisabled(false);
  } else if (counter < 0) {
    valueElement.style.color = 'blue';
    setButtonsDisabled(false);
  } else {
    valueElement.style.color = defaultColor;
    setButtonsDisabled(false);
  }
};

// Abilita/disabilita i bottoni di incremento/decremento
const setButtonsDisabled = (disabled) => {
  [incrementButton, decrementButton].forEach((button) => {
    if (!button) return;
    button.disabled = disabled;
    button.style.pointerEvents = disabled ? 'none' : '';  
    button.style.opacity = disabled ? '0.45' : '';       
  });
};

// Azioni (incrementa , decrementa , resetta)
// Incrementa di 1
const increment = () => {
  if (incrementButton && incrementButton.disabled) return;
  counter += 1;
  updateDisplay();
};

// Decrementa di 1
const decrement = () => {
  if (decrementButton && decrementButton.disabled) return;
  if (count <= 0) {
    updateDisplay();
    return;
  }
  counter -= 1;
  updateDisplay();
};

// Resetta il contatore e ripristina lo stato iniziale
const resetCounter = () => {
  counter = 0;
  if (titleElement) titleElement.textContent = 'Fancy Counter';
  if (counterElement) counterElement.classList.remove('counter--limit');
  setButtonsDisabled(false);
  if (valueElement) valueElement.style.color = defaultColor;
  updateDisplay();
};

// Event Listeners 
if (incrementButton) incrementButton.addEventListener('click', increment);
if (decrementButton) decrementButton.addEventListener('click', decrement);
if (resetButton) resetButton.addEventListener('click', resetCounter);


updateDisplay();
