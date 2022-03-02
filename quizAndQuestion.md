''' 
function exampleFunction(a, b) {
  console.log(a);
  console.log(b);
}

...

###   Quiz: Parameters and arguments

JAVASCRIPT
// Assume the body contains an input element
// with an id of 'input-1'.

var input1 = document.getElementById('input-1');
var input1Value = input1.value;
input1Value = 'changed';

var input2 = input1;
input2.value = 'input 2';

input1.value = '';
input2.value = '';



Which of the above statements will be true?

input1.value will be equal to 'changed' and then will be changed to ''.
input2.value will be equal to 'input 2' and then will be changed to ''.
None of the above.
Quiz
