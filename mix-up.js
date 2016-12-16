/*

Mix Up

Create a function called mixUp. It should take in two strings, and return
the concatenation of the two strings (separated by a space) slicing out and
swapping the first 2 characters of each. You can assume that the strings are
at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'

*/

// YOUR CODE GOES HERE

function mixUp(a, b) {
  return b.slice(0,2) + a.slice(2) + " " + a.slice(0,2) + b.slice(2);
}

var output = mixUp('mix', 'pod');

console.log(output);