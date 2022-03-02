## **Note :** https://todomvc.com/ nice website you will get soruce code with different tech. 

## JavaScript data type

+ Object (can be as complex as you want)
    * {} // for example : todoList, arrays, functions

+ Primitives (building Blocks) {data types}

  * String <br> 'Look at this string!'
  * number <br> // 1,2,3,5 
  * boolean <br> // true, false
  * undefined <br> // value that has not been set
  * Null <br> 'Nothing'
  

## comparisons with objects

```js
[1,2,3] === [1,2,3] 

{} === {}
```

Note: these object will be not be equal. because when you use
array and object list. they store in the different memory. 

## Interlude - Data types and comparisons {will create a video about it}.




### code example 3

```js 
var myHouse = {color: 'blue'};
var color = myHouse.color;
color = 'red';

````

ques: myHouse.color // ?  
tell me the answer ? 



### another question 

```js 

var myHouse1 = {color: 'blue'};
var myHouse2 = myHouse1;
myHouse2.color = 'red';
```
**myHouse1.color?** <br>
**myhouse2.color?**




### another question

```js
var myHouse1 = {color: 'blue'};
var myHouse2 = {color: 'blue'};
myhouse2.color = 'red';

```
**myHouse1.color** <br>\
**myHouse2.color**



## Interlude - Experimenting with function


*2and example*


```js
funtion demoFunction() {}

var experiment1 = demoFunction;  // ? guess the output
var experiment2 = demoFunction();   // ?

// experiment1 
// experiment1 = demoFunction
```

```js

function demoFunctionThatReturnsAString() {
  return 'a string';
}

var experiment3 = demoFunctionThatReturnsAString;
var experiment4 = demoFunctionThatReturnsAString();

// lets do experiment
// experiment3   
// if I want to prove again.
// experiment3 === demoFunctionThatsReturnString


// Pause the video and write down (actually do this, in your own words)
// one sentence that explain why experiment4 is eual to 'a string'.

// `return` inserts a value (in this case, 'a string') where the function 
// (demoFunctionThatRetursAString) was called.

// so var experiment4 = 'a string';

```


**3rd example**

```js

function dempFunctionThatReturnsUndefined() {
  return undefined;
}

var experiment5 = demoFunctionThatReturnsUndefined;
var experiment6 = demoFunctionTHatReturnsUndefined();

// tell me the output of demoFuntionThatReturnsUndefined;

// user debugger if I want it debugg something on console.

debugger;
function demoFuntion() {

}

demoFunction();
function demoFunctionThatReutrnsAString() {
  return 'a string';

}

demoFunctionThatReturnsAString();


```

**4th example experiment with function **

```js

function demoFunctionThatReturnAString() {
  return 'a string';
}

function logThis(thing) {
  console.log(thing);
}

debugger;   // use this to show in chrome devtool.

logThis(demoFunctionThatReturnsAString);  // example 7
logThis(demoFunctionTHatReturnsAString()); // example 8


// what would be the output ? 

```



### Quiz: Another experiment

```js

function function1(inputFunction, inputString) {  
  return inputFunction(inputString);
}

function function2(thing) {
  return thing;
}

var experiment = function1(function2, 'yolo');


```