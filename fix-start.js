/*

Fix Start

Create a function called fixStart. It should take a single argument, a string,
and return a version where all occurences of its first character have been
replaced with '*', except for the first character itself. You can assume that
the string is at least one character long. For example:

  fixStart('babble'): 'ba**le'

*/

// YOUR CODE GOES HERE

function fixStart(a) {
  var b = a.charAt(0);
  return b + a.slice(1).replace(new RegExp(b, 'g'), '*');
}

var output = fixStart(process.argv[2]);

console.log(output);