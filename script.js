const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputCtn = document.getElementById("output");

function errorStyle() {
  outputCtn.style.visibility = "visible";
  outputCtn.style.border = "2px solid red";
  outputCtn.style.backgroundColor = "pink";
  outputCtn.style.color = "black";
}

function restoreStyle() {
  outputCtn.style.visibility = "visible";
  outputCtn.style.border = "2px solid white";
  outputCtn.style.backgroundColor = "var(--card-background)";
  outputCtn.style.color = "white";
}

function romanConverter() {
  const num = inputNumber.value;

  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  if (isNaN(num) || num == "") {
    errorStyle();
    outputCtn.innerText = "Please enter a valid number";
  } else if (num < 1) {
    errorStyle();
    outputCtn.innerText = "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    errorStyle();
    outputCtn.innerText = "Please enter a number less than or equal to 3999.";
  } else {
    let remaining = num;
    let result = "";

    for (let i = 0; i < romanNumerals.length; i++) {
      while (remaining >= romanNumerals[i].value) {
        result += romanNumerals[i].numeral;
        remaining -= romanNumerals[i].value;
      }
    }

    restoreStyle();
    outputCtn.innerText = result;
  }
}

convertBtn.addEventListener("click", () => {
  event.preventDefault();
  romanConverter();
});
