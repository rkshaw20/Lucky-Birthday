const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumBtn = document.querySelector(".check-number");
const outputBox = document.querySelector(".msg");

checkNumBtn.addEventListener("click", checkbirthDateIslucky);

function checkbirthDateIslucky() {
  console.log(luckyNumber.value);
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);

  if (dob === "" && luckyNumber.value === "") {
    console.log("dob and lucky no value");
    outputBox.innerText = "Please enter both the fields.";
  } else if (luckyNumber.value === "") {
    console.log("No lucky value");
    outputBox.innerText = "Please enter your lucky number.";
  } else if (dob === "") {
    console.log("No dob value");
    outputBox.innerText = "Please enter your date of birth";
  } else {
    compareValues(sum, luckyNumber.value);
  }
}

/*sum calculation*/
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

/*comparing sum and number*/
function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your birthday is lucky 😃🎉👏";
  } else {
    outputBox.innerText =
      "Your birthday is not lucky, You workhard to make your own luck 🙂";
  }
}
