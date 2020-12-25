// Create your function below this line.
function bmiCalculator(weight, height){
// The first parameter should be the weight and the second should be the height.
  weight = prompt("How much do you weigh in Kgs?");
  height = prompt("What is your height in Metres?");
  
// If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:
  
// This is the BMI Formula
var bmi  = Math.round(weight / (height * height));

/* var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
  console.log("You weigh " + weight +" Kgs, your height is " + height + " metres and your BMI is " + bmi + ".");
}
bmiCalculator();

