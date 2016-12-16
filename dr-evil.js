/*

Dr. Evil

Create a function called DrEvil. It should take a single argument, an
amount, and return '<amount> dollars', except it will add '(pinky)' at
the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

*/

// YOUR CODE GOES HERE

function DrEvil(dollars) {
  if (dollars === 1000000) {
    return dollars + " dollars (pinky)";
  } else {
    return dollars + " dollars";
  }
}


var output = DrEvil(process.argv[2]);

console.log(output);