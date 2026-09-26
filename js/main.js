"use strict";

// Punto de entrada. La lógica del cotizador se incorporará cuando se definan
// el catálogo de servicios, la moneda y las reglas de cálculo.
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
