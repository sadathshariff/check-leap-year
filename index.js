// let userYear = prompt("Enter Your Birth Year!!");

// checkLeapYear(userYear);

let inputYear = document.querySelector("#yearInput");
let button = document.querySelector("#btn");
let displayResult = document.querySelector("#result");

function checkLeapYear() {
  let year = inputYear.value;
  console.log(year);
  if (year != "") {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      displayResult.innerText = `${year} It's a leap Year`;
    } else {
      displayResult.innerText = `${year} is not a leap year`;
    }
  } else {
    displayResult.innerText = `How can we check if you have not entered year please enter year :)`;
  }
  return year;
}

button.addEventListener("click", checkLeapYear);
