/**
 * Functions
 * 1. Function Statement/Function Declaration
 *
 */

// function greetMessage(name,city){   //name is the arguement
//     console.log(`${name}, Hello from the other side of ${city}`)
// }

// //Calling the function with arguement
// greetMessage("Praveen","Delhi")
// greetMessage("Lord",)

function calculateSum(min, max) {
  let sum = 0;
  for (i = min; i <= max; i++) {
    sum += i;
  }
  console.log(sum);
}

calculateSum(1, 10);
