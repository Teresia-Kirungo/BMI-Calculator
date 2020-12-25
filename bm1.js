//Create your function below this line.
function bmiCalculator(weight, height){
  //The first parameter should be the weight and the second should be the height. 

  /* The Math.pow() function returns the base to the exponent power, that is, base exponent.
  
  console.log(Math.pow(4, 3)); //this is 4 X 4 X 4
// expected output: 64

  */

    var bmi = weight/(Math.pow(height,2));
    return bmi;
}

Math.round(bmi = bmiCalculator(65, 1.8));
/* The Math.round() function returns the value of a number rounded to the nearest integer.

console.log(Math.round(0.9));
// expected output: 1
*/


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
