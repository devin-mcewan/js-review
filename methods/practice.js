//*********** NUMBERS ***********
//*********** PROBLEM 1 ***********//
// Create a function called `checkNaN` that receives a parameter and uses isNaN to check if the parameter is NaN or not.

function checkNaN (input) {
   return isNaN(input) ?  true : false;

}

console.log(checkNaN('hello'));
console.log(checkNaN(5));
// Example input: 'hello' output: true
// Example input: 5 output: false


//*********** PROBLEM 2 ***********//
// Create a function called `parseStrFloat` that receives a string and uses Number.parseFloat to convert this string to a float.

function parseStrFloat (str) {
    return Number.parseFloat(str);
}
console.log(parseStrFloat("23.45"))

// Example input: '23.45' output: 23.45

//*********** PROBLEM 3 ***********//
// Create a function called `toFixedTwo` that receives a float and uses Number.toFixed to round this float to two decimal places.

function toFixedTwo (decimal) {
    return Number.parseFloat(decimal).toFixed(2);
}
console.log(toFixedTwo(3.456));

// Example input: 3.456 output: '3.46'

//*********** PROBLEM 4 ***********//
// Create a function called `toFixedZero` that receives a float and uses Number.toFixed to round this float to zero decimal places.

function toFixedZero (decimal) {
    return Number.parseFloat(decimal).toFixed(0);
}
console.log(toFixedZero(3.456))

// Example input: 3.456 output: '3'

//*********** PROBLEM 5 ***********//
// Create a function called `getRandomNum` that uses Math.random and Math.floor to generate a random number between 0 (inclusive) and 10 (exclusive).

function getRandomNum () {
    return Math.floor(Math.random() * 11);
}

console.log(getRandomNum());


//*********** STRINGS ***********
//*********** PROBLEM 6 ***********//
// Create a function called `splitString` that receives a string and a delimiter and uses String.split to split this string by the delimiter.

function splitString(str, delimiter) {
    return str.split(delimiter);
}
console.log(splitString('hello world', ' '))

// Example input: ('hello world', ' ') output: ['hello', 'world']

//*********** PROBLEM 7 ***********//
// Create a function called `splitCSV` that receives a CSV string and uses String.split to split this CSV string by commas.

function splitCSV (str) {
    return str.split(',');
}
console.log(splitCSV('apple,banana,cherry'));

// Example input: ('apple,banana,cherry') output: ['apple', 'banana', 'cherry']

//*********** PROBLEM 8 ***********//
// Create a function called `replaceAllVowels` that receives a string and uses String.replaceAll to replace all vowels in this string with a dash.

function replaceAllVowels (str) {
    str = str.replaceAll('a', "-");
    str = str.replaceAll('e', "-");
    str = str.replaceAll('i', "-");
    str = str.replaceAll('o', "-");
    str = str.replaceAll('u', "-");
    return str;
}
console.log(replaceAllVowels('banana'));

// Example input: 'banana' output: 'b-n-n-'

//*********** PROBLEM 9 ***********//
// Create a function called `replaceAllSpaces` that receives a string and uses String.replaceAll to replace all spaces in this string with an underscore.

function replaceAllSpaces (str) {
    str = str.replaceAll(' ', '_');
    return str; 
}
console.log(replaceAllSpaces('hello world'));

// Example input: 'hello world' output: 'hello_world'

//*********** PROBLEM 10 ***********//
// Create a function called `trimStr` that receives a string with leading and trailing spaces and uses String.trim to remove these spaces.

function trimStr (str) {
    return str.trim();
}
console.log(trimStr('   hello world   '));
// Example input: '   hello world   ' output: 'hello world'


//*********** ARRAYS ***********
//*********** PROBLEM 11 ***********//
// Create a function named `joinArrays` that receives two arrays as parameters.
// The function should return a new array that is the result of joining the two arrays using the spread operator.

function joinArrays(arr1, arr2) {
    let newArr = [];
    newArr = [...arr1, ...arr2];
    return newArr;
}
console.log(joinArrays([1, 2, 3], [4, 5, 6]));

// Example input: ([1, 2, 3], [4, 5, 6]) output: [1, 2, 3, 4, 5, 6]

//*********** PROBLEM 12 ***********//
// Create a function called `getEvenNums` that receives an array and uses Array.filter to return a new array with only the even numbers.

function getEvenNums(arr) {
    let newArr = [];
    newArr = arr.filter((num) => num % 2 === 0);
    return newArr;
}
console.log(getEvenNums([1, 2, 3, 4, 5]));
// Example input: [1, 2, 3, 4, 5] output: [2, 4]

//*********** PROBLEM 13 ***********//
// Create a function called `spliceElements` that receives an array, an index, and a number of elements to be removed,
// and uses Array.splice to remove these elements from the array. The function should then return the modified array.

function spliceElements (arr, index, num) {
    arr.splice(index, num);
    return arr;
}
console.log(spliceElements([1, 2, 3, 4, 5], 1, 2));

// Example input: ([1, 2, 3, 4, 5], 1, 2) output: [1, 4, 5]

//*********** PROBLEM 14 ***********//
// Create a function called `spliceAndAddElements` that receives an array, an index, a number of elements to be removed, and an element to be added,
// and uses Array.splice to remove these elements from the array and add the new element at the same index.
// The function should then return the modified array.

function spliceAndAddElements (arr, index, num, toBeAdded) {
    arr.splice(index, num, toBeAdded);
    return arr;
}
console.log(spliceAndAddElements([1, 2, 3, 4, 5], 1, 2, 'a'));
// Example input: ([1, 2, 3, 4, 5], 1, 2, 'a') output: [1, 'a', 4, 5]

//*********** PROBLEM 15 ***********//
// Create a function called `sliceElements` that receives an array, a start index, and an end index,
// and uses Array.slice to return a new array with elements from the start index up to but not including the end index.

function sliceElements (arr, startIndex, endIndex) {
    let newArr = [];
    newArr = arr.slice(startIndex, endIndex);
    return newArr;
}
console.log(sliceElements([1, 2, 3, 4, 5], 1, 3));
// Example input: ([1, 2, 3, 4, 5], 1, 3) output: [2, 3]

//*********** PROBLEM 16 ***********//
// Create a function called `sliceFromIndex` that receives an array and a start index,
// and uses Array.slice to return a new array with elements from the start index to the end of the array.

function sliceFromIndex (arr, startIndex) {
    let newArr = [];
    newArr = arr.slice(startIndex);
    return newArr;
}
console.log(sliceFromIndex([1, 2, 3, 4, 5], 2));
// Example input: ([1, 2, 3, 4, 5], 2) output: [3, 4, 5]

//*********** PROBLEM 17 ***********//
// Create a function called `joinElements` that receives an array and uses Array.join to join the elements of the array into a string,
// with elements separated by a comma and a space.

function joinElements (arr) {
    return arr.join(', ');
}
console.log(joinElements(['hello', 'world']));

// Example input: ['hello', 'world'] output: 'hello, world'

//*********** PROBLEM 18 ***********//
// Create a function called `fillArray` that receives an array, a start index, an end index, and a value,
// and uses Array.fill to fill the array with the value from the start index up to but not including the end index. The function should then return the modified array.

function fillArray (arr, startIndex, endIndex, value) {
    return arr.fill(value, startIndex, endIndex);
}
console.log(fillArray([1, 2, 3, 4, 5], 1, 3, 'a'));

// Example input: ([1, 2, 3, 4, 5], 1, 3, 'a') output: [1, 'a', 'a', 4, 5]

//*********** PROBLEM 19 ***********//
// Create a function called `findFirstNum` that receives an array and a number,
// and uses Array.find to return the first element in the array that is greater than the number.

function findFirstNum (arr, num) {
    return arr.find(element => element > num);
}
console.log(findFirstNum([1, 2, 3, 4, 5], 3));
// Example input: ([1, 2, 3, 4, 5], 3) output: 4

//*********** PROBLEM 20 ***********//
// Create a function called `findLastNum` that receives an array and a number,
// and uses Array.find to return the last element in the array that is less than the number.

function findLastNum (arr, num) {
    return arr.findLast(element => element < num);
}
console.log(findLastNum([1, 2, 3, 4, 5], 3));
// Example input: ([1, 2, 3, 4, 5], 3) output: 2

//*********** PROBLEM 21 ***********//
// Create a function called `pushElements` that receives an array and an element,
// and uses Array.push to add the element to the end of the array. The function should then return the modified array.

function pushElements (arr, element) {
    arr.push(element);
    return arr;
}
console.log(pushElements([1, 2, 3], 4));
// Example input: ([1, 2, 3], 4) output: [1,2, 3, 4]
// Code Here

//*********** PROBLEM 22 ***********//
// Create a function called `popElement` that receives an array and uses Array.pop to remove the last element from the array.
// The function should then return the modified array.

function popElement (arr) {
    arr.pop();
    return arr;
}
console.log(popElement([1, 2, 3]));
// Example input: ([1, 2, 3]) output: [1, 2]

//*********** PROBLEM 23 ***********//
// Create a function called `unshiftElements` that receives an array and an element,
// and uses Array.unshift to add the element to the beginning of the array. The function should then return the modified array.

function unshiftElements (arr, element) {
    arr.unshift(element);
    return arr;
}
console.log(unshiftElements([2, 3, 4], 1));

// Example input: ([2, 3, 4], 1) output: [1, 2, 3, 4]


//*********** OBJECTS ***********
//*********** PROBLEM 24 ***********//
// Create a function named `cloneObject` that receives an object as a parameter.
// The function should return a new object that is a clone of the received object, created using the spread operator.

function cloneObject (obj) {
    let newObj = {};
    newObj = {...obj};
    return newObj;
}
console.log(cloneObject({a: 1, b: 2, c: 3}));

// Example input: ({a: 1, b: 2, c: 3}) output: {a: 1, b: 2, c: 3}

//*********** PROBLEM 25 ***********//
// Create a function called `getObjKeys` that receives an object and uses Object.keys to return an array of the object's keys.

function getObjKeys (obj) {
    let objKeys = [];
    objKeys = Object.keys(obj);
    return objKeys;
}
console.log(getObjKeys({a: 1, b: 2, c: 3}))
// Example input: {a: 1, b: 2, c: 3} output: ['a', 'b', 'c']

//*********** PROBLEM 26 ***********//
// Create a function called `getObjValues` that receives an object and uses Object.values to return an array of the object's values.

function getObjValues (obj) {
    let objValues = [];
    objValues = Object.values(obj);
    return objValues;
}
console.log(getObjValues({a: 1, b: 2, c: 3}));
// Example input: {a: 1, b: 2, c: 3} output: [1, 2, 3]

//*********** PROBLEM 27 ***********//
// Create a function called `myMethod` in an object called `myObject` that returns the string 'Hello, world!'.

const myObject = {

    myMethod () {
        return 'Hello, world!';
    }
}

//*********** PROBLEM 28 ***********//
// Create a function called `greet` in an object called `phraseMethods` that receives a name as a parameter and returns the string 'Hello, ' followed by the name.

const phraseMethods = {
    greet (name) {
        return `Hello, ${name}`
    }
}

//*********** Do not edit the code below ***********//
const utilityMethods = {};

//*********** PROBLEM 29 ***********//
// Add a function called `calculateArea` that receives the length and width of a rectangle as parameters and returns the area of the rectangle.

function calculateArea (length, width) {
    return length * width;
}
console.log(calculateArea(5,3));
// Example input: (5, 3) output: 15

//*********** PROBLEM 30 ***********//
// Add `calculateArea` to the `utilityMethods` object using dot notation

utilityMethods.calculateArea = calculateArea;

//*********** PROBLEM 31 ***********//
// Create a function called `calculateVolume` that receives the length, width, and height of a box as parameters and returns the volume of the box.
// Use a "Fat Arrow" function and an implicit return

const calculateVolume = ((length, width, height) => (length * width * height));
console.log(calculateVolume(5,3,2));
// Example input: (5, 3, 2) output: 30

//*********** PROBLEM 32 ***********//
// Add `calculateVolume` to the `utilityMethods` object using bracket notation

utilityMethods["calculateVolume"] = calculateVolume;

//*********** PROBLEM 33 ***********//
// Create a function called `createMultiplier` and add it to the `utilityMethods` object.
// `createMultiplier` should receive a number as a parameter and return a function
// The returned function should receive a number and return the product of the two numbers.

function createMultiplier (num1) {
    const square = ((num2) => (num1 * num2));
    return square;
}
utilityMethods.createMultiplier = createMultiplier;

createMultiplier(3);
// Example input: 3 output: function that receives a number and returns the product of 3 and this number
// Code Here
