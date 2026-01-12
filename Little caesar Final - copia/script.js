// Funciones de la calculadora
function append(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    const result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (e) {
    document.getElementById("display").value = "Error";
  }
}

// Funciones del conversor
function convertKtoL() {
  const kilos = parseFloat(document.getElementById("kilos").value);
  if (!isNaN(kilos)) {
    document.getElementById("libras").value = (kilos * 2.20462).toFixed(2);
  }
}

function convertLtoK() {
  const libras = parseFloat(document.getElementById("libras").value);
  if (!isNaN(libras)) {
    document.getElementById("kilos").value = (libras / 2.20462).toFixed(2);
  }
}

function convertCtoF() {
  const celsius = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(celsius)) {
    document.getElementById("fahrenheit").value = (celsius * 9/5 + 32).toFixed(2);
  }
}

function convertFtoC() {
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  if (!isNaN(fahrenheit)) {
    document.getElementById("celsius").value = ((fahrenheit - 32) * 5/9).toFixed(2);
  }
}

// Cambio de modo
function toggleMode() {
  const calc = document.getElementById("calculadora");
  const conv = document.getElementById("conversor");
  const btn = document.getElementById("toggleBtn");

  if (calc.classList.contains("hidden")) {
    calc.classList.remove("hidden");
    conv.classList.add("hidden");
    btn.textContent = "Ver Conversor";
  } else {
    calc.classList.add("hidden");
    conv.classList.remove("hidden");
    btn.textContent = "Ver Calculadora";
  }
}