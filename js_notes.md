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


