function bmiCalculator(weight, height) {
  weight = prompt("How much do you weigh in Kgs?");
  height = prompt("What is your height in Metres?");

  var bmi = Math.round(weight / (height * height));
  // var interpretation = "";
  if (bmi < 18.5) {
    alert("Your BMI is " + bmi + ", so you are underweight.");
  } else if (bmi > 18.5 && bmi < 24.9) {
    alert("Your BMI is " + bmi + ", so you have a normal weight.");
  } else if (bmi > 24.9) {
    alert("Your BMI is " + bmi + ", so you are overweight.");
  } else {
    alert("Invalid");
  }

  // return interpretation;
}
bmiCalculator()
