let isCelsiusToFahrenheit = true;

function convert() {
  const input = document.getElementById("celsiusInput").value;
  const resultLabel = document.getElementById("result-label");
  const output = document.getElementById("fahrenheitOutput");
  const calc = document.getElementById("calculation");

  if (input === "") {
    output.innerText = "-";
    calc.innerText = "Please enter a value.";
    return;
  }

  let result, formula;

  if (isCelsiusToFahrenheit) {
    result = Math.round((input * 9/5) + 32);
    formula = `${input} °C × (9/5) + 32 = ${result} °F`;
    resultLabel.innerText = "Result (Fahrenheit)";
  } else {
    result = Math.round((input - 32) * 5/9);
    formula = `(${input} °F - 32) × 5/9 = ${result} °C`;
    resultLabel.innerText = "Result (Celsius)";
  }

  output.innerText = result;
  calc.innerText = formula;
}

function reset() {
  document.getElementById("celsiusInput").value = "";
  document.getElementById("fahrenheitOutput").innerText = "-";
  document.getElementById("calculation").innerText = "Formula shown here";
}

function reverse() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  reset();
  const label = isCelsiusToFahrenheit ? "Result (Fahrenheit)" : "Result (Celsius)";
  document.getElementById("result-label").innerText = label;
}
