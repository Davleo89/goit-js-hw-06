/*Tarea 4
El contador consta de un span y de botones que, al ser pulsados, deben aumentar y disminuir su valor en uno.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Cree una variable counterValue para almacenar el valor actual e inicializarlo con el valor 0.
Añada escuchas de clic a los botones, dentro de los cuales aumenta o disminuye el valor del contador.
Actualice la interfaz con el nuevo valor de la variable counterValue.*/

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");

let counterValue = 0;
counter.textContent = counterValue;

decrementButton.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});
