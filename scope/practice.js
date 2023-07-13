//*********** PROBLEM 1 ***********//
// Create a function called `localVarFunc` that declares a local variable `myLocalVar` and assigns it a value of 'I am local'.
// The function should return the value of `myLocalVar`. Try accessing `myLocalVar` outside the function. What happens?

function localVarFunc () {
    let myLocalVar = 'I am local';
    return myLocalVar;
}

//*********** PROBLEM 2 ***********//
// Create a global variable called `myGlobalVar` and assign it a value of 'I am global'.
// Now create a function called `globalVarFunc` that returns the value of `myGlobalVar`.

let myGlobalVar = 'I am global';
function globalVarFunc () {
    return myGlobalVar;
}


//*********** PROBLEM 3 ***********//
// Create a function called `outerFunc` that has a local variable `myVar` with a value of 'outer'.
// Inside `outerFunc`, define a function `innerFunc` that also declares a local variable `myVar` with a value of 'inner'.
// Modify `outerFunc` so that it returns an object containing two properties - `inner` and `outer`, which are the values of `myVar` inside `innerFunc` and `outerFunc` respectively.

function outerFunc () {
    let myVar = 'outer'; 
    function innerFunc() {
        let myVar = 'inner';
        return myVar;
    }
    return { 'inner': innerFunc(myVar), 'outer': myVar}
}

//*********** PROBLEM 4 ***********//
// Create a global variable called `globalCounter` and assign it a value of 0.
// Write a function `incrementCounter` that increases the value of `globalCounter` by 1 each time it is called.
// What is the value of `globalCounter` after the `incrementCounter` function is called three times?

let globalCounter = 0;
function incrementCounter () {
    globalCounter++;
}

//*********** PROBLEM 5 ***********//
// Write a function `loopFunc` that contains a for-loop that runs 5 times. Inside the loop body, declare a variable `loopVar` with `var` and assign the loop index to it.
// Return `loopVar` outside of the loop but still inside `loopFunc`.

function loopFunc () {
    for (let i = 0; i < 5; i++) {
        var loopVar = i;
    }
    return loopVar;
}

//*********** PROBLEM 6 ***********//
// Create a function `outerCounterFunc` that has a local variable `myCounter` set to 0 
// Inside of `outerCounterFunc`, create a new function called `innerCounterFunc` that should increment `myCounter` by 1 and return `myCounter`value each time it's called.
// `outerCounterFunc` should return `innerCounterFunc`.

function outerCounterFunc () {
    let myCounter = 0;
    function innerCounterFunc() {
        myCounter++;
        return myCounter;
    }
    return innerCounterFunc;
}
