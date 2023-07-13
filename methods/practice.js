//*********** NUMBERS ***********

//*********** PROBLEM 1 ***********//
// Create a function called `checkNaN` that receives a parameter and uses isNaN to check if the parameter is NaN or not.

// Example input: 'hello' output: true
// Example input: 5 output: false
// Code Here

//*********** PROBLEM 2 ***********//
// Create a function called `parseStrFloat` that receives a string and uses Number.parseFloat to convert this string to a float.

// Example input: '23.45' output: 23.45
// Code Here

//*********** PROBLEM 3 ***********//
// Create a function called `toFixedTwo` that receives a float and uses Number.toFixed to round this float to two decimal places.

// Example input: 3.456 output: '3.46'
// Code Here

//*********** PROBLEM 4 ***********//
// Create a function called `toFixedZero` that receives a float and uses Number.toFixed to round this float to zero decimal places.

// Example input: 3.456 output: '3'
// Code Here

//*********** PROBLEM 5 ***********//
// Create a function called `getRandomNum` that uses Math.random and Math.floor to generate a random number between 0 (inclusive) and 10 (exclusive).

// Example input: none output: a random number between 0 and 10
// Code Here

//*********** STRINGS ***********

//*********** PROBLEM 6 ***********//
// Create a function called `splitString` that receives a string and a delimiter and uses String.split to split this string by the delimiter.

// Example input: ('hello world', ' ') output: ['hello', 'world']
// Code Here

//*********** PROBLEM 7 ***********//
// Create a function called `splitCSV` that receives a CSV string and uses String.split to split this CSV string by commas.

// Example input: ('apple,banana,cherry') output: ['apple', 'banana', 'cherry']
// Code Here

//*********** PROBLEM 8 ***********//
// Create a function called `replaceAllVowels` that receives a string and uses String.replaceAll to replace all vowels in this string with a dash.

// Example input: 'banana' output: 'b-n-n-'
// Code Here

//*********** PROBLEM 9 ***********//
// Create a function called `replaceAllSpaces` that receives a string and uses String.replaceAll to replace all spaces in this string with an underscore.

// Example input: 'hello world' output: 'hello_world'
// Code Here

//*********** PROBLEM 10 ***********//
// Create a function called `trimStr` that receives a string with leading and trailing spaces and uses String.trim to remove these spaces.

// Example input: '   hello world   ' output: 'hello world'
// Code Here

//*********** ARRAYS ***********

//*********** PROBLEM 11 ***********//
// Create a function named `joinArrays` that receives two arrays as parameters.
// The function should return a new array that is the result of joining the two arrays using the spread operator.

// Example input: ([1, 2, 3], [4, 5, 6]) output: [1, 2, 3, 4, 5, 6]
// Code Here

//*********** PROBLEM 12 ***********//
// Create a function called `getEvenNums` that receives an array and uses Array.filter to return a new array with only the even numbers.

// Example input: [1, 2, 3, 4, 5] output: [2, 4]
// Code Here

//*********** PROBLEM 13 ***********//
// Create a function called `spliceElements` that receives an array, an index, and a number of elements to be removed,
// and uses Array.splice to remove these elements from the array. The function should then return the modified array.

// Example input: ([1, 2, 3, 4, 5], 1, 2) output: [1, 4, 5]
// Code Here

//*********** PROBLEM 14 ***********//
// Create a function called `spliceAndAddElements` that receives an array, an index, a number of elements to be removed, and an element to be added,
// and uses Array.splice to remove these elements from the array and add the new element at the same index.
// The function should then return the modified array.

// Example input: ([1, 2, 3, 4, 5], 1, 2, 'a') output: [1, 'a', 4, 5]
// Code Here

//*********** PROBLEM 15 ***********//
// Create a function called `sliceElements` that receives an array, a start index, and an end index,
// and uses Array.slice to return a new array with elements from the start index up to but not including the end index.

// Example input: ([1, 2, 3, 4, 5], 1, 3) output: [2, 3]
// Code Here

//*********** PROBLEM 16 ***********//
// Create a function called `sliceFromIndex` that receives an array and a start index,
// and uses Array.slice to return a new array with elements from the start index to the end of the array.

// Example input: ([1, 2, 3, 4, 5], 2) output: [3, 4, 5]
// Code Here

//*********** PROBLEM 17 ***********//
// Create a function called `joinElements` that receives an array and uses Array.join to join the elements of the array into a string,
// with elements separated by a comma and a space.

// Example input: ['hello', 'world'] output: 'hello, world'
// Code Here

//*********** PROBLEM 18 ***********//
// Create a function called `fillArray` that receives an array, a start index, an end index, and a value,
// and uses Array.fill to fill the array with the value from the start index up to but not including the end index. The function should then return the modified array.

// Example input: ([1, 2, 3, 4, 5], 1, 3, 'a') output: [1, 'a', 'a', 4, 5]
// Code Here

//*********** PROBLEM 19 ***********//
// Create a function called `findFirstNum` that receives an array and a number,
// and uses Array.find to return the first element in the array that is greater than the number.

// Example input: ([1, 2, 3, 4, 5], 3) output: 4
// Code Here

//*********** PROBLEM 20 ***********//
// Create a function called `findLastNum` that receives an array and a number,
// and uses Array.find to return the last element in the array that is less than the number.

// Example input: ([1, 2, 3, 4, 5], 3) output: 2
// Code Here

//*********** PROBLEM 21 ***********//
// Create a function called `pushElements` that receives an array and an element,
// and uses Array.push to add the element to the end of the array. The function should then return the modified array.

// Example input: ([1, 2, 3], 4) output: [1,2, 3, 4]
// Code Here

//*********** PROBLEM 22 ***********//
// Create a function called `popElement` that receives an array and uses Array.pop to remove the last element from the array.
// The function should then return the modified array.

// Example input: ([1, 2, 3]) output: [1, 2]
// Code Here

//*********** PROBLEM 23 ***********//
// Create a function called `unshiftElements` that receives an array and an element,
// and uses Array.unshift to add the element to the beginning of the array. The function should then return the modified array.

// Example input: ([2, 3, 4], 1) output: [1, 2, 3, 4]
// Code Here

//*********** OBJECTS ***********

//*********** PROBLEM 24 ***********//
// Create a function named `cloneObject` that receives an object as a parameter.
// The function should return a new object that is a clone of the received object, created using the spread operator.

// Example input: ({a: 1, b: 2, c: 3}) output: {a: 1, b: 2, c: 3}
// Code Here

//*********** PROBLEM 25 ***********//
// Create a function called `getObjKeys` that receives an object and uses Object.keys to return an array of the object's keys.

// Example input: {a: 1, b: 2, c: 3} output: ['a', 'b', 'c']
// Code Here

//*********** PROBLEM 26 ***********//
// Create a function called `getObjValues` that receives an object and uses Object.values to return an array of the object's values.

// Example input: {a: 1, b: 2, c: 3} output: [1, 2, 3]
// Code Here

//*********** PROBLEM 27 ***********//
// Create a function called `myMethod` in an object called `myObject` that returns the string 'Hello, world!'.

// Example input: none output: 'Hello, world!'
// Code Here

//*********** PROBLEM 28 ***********//
// Create a function called `greet` in an object called `phraseMethods` that receives a name as a parameter and returns the string 'Hello, ' followed by the name.

// Example input: 'John' output: 'Hello, John'
// Code Here

//*********** Do not edit the code below ***********//
const utilityMethods = {};

//*********** PROBLEM 29 ***********//
// Add a function called `calculateArea` that receives the length and width of a rectangle as parameters and returns the area of the rectangle.

// Example input: (5, 3) output: 15
// Code Here

//*********** PROBLEM 30 ***********//
// Add `calculateArea` to the `utilityMethods` object using dot notation

// Code Here

//*********** PROBLEM 31 ***********//
// Create a function called `calculateVolume` that receives the length, width, and height of a box as parameters and returns the volume of the box.
// Use a "Fat Arrow" function and an implicit return

// Example input: (5, 3, 2) output: 30
// Code Here

//*********** PROBLEM 32 ***********//
// Add `calculateVolume` to the `utilityMethods` object using bracket notation

// Code Here

//*********** PROBLEM 33 ***********//
// Create a function called `createMultiplier` and add it to the `utilityMethods` object.
// `createMultiplier` should receive a number as a parameter and return a function
// The returned function should receive a number and return the product of the two numbers.

// Example input: 3 output: function that receives a number and returns the product of 3 and this number
// Code Here
