/*

Verbing

Create a function called verbing. It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already
ends in 'ing', in which case it should add 'ly' instead. If the string length
is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'

*/

// YOUR CODE GOES HERE

function verbing(verb) {
  if (verb.length < 3) return verb;
  if (verb.slice(-3) == 'ing') {
    return verb + 'ly';
  } else {
    return verb + 'ing';
  }
}

var output = verbing(process.argv[2]);

console.log(output);