/*
    Take a function that accepts a function as a parameter (also known as callback function). 
    function test(callback){
    callback();
    }
    function callbackFunc(){
    console.log(“Calling the callback function”)
    return 5;
    }
    Explore the following cases - what is printed in the console, and what gets returned:
    test(callbackFunc)
    test(callbackFunc())
    test(() => callbackFunc())
    What happens when you return callback() from the test function?
    What happens when you return callback from the test function?
*/


// first case : test(callbackFunc)

function test(callBackFunc) {
    callBackFunc()
}

function callBackFunc() {
    console.log("Calling from the callback function")
    return 5
}

test(callBackFunc)

// Output : calling from the callback function and we does not store the value so it will not return anything







// second case : test(callbackFunc())
function test(callBackFunc) {
    callBackFunc()
}

function callBackFunc() {
    console.log("Calling from the callback function")
    return 5
}
test(callBackFunc())
// in this we can get the error becuase we can the pass the result of the callback function not the function







// third case : test(() => callbackFunc())

function test(callBackFunc) {
    callBackFunc()
}

const callBackFunc = () => {
    console.log("Calling from the callback function")
    return 5
}

test(callBackFunc)
// output is Calling from the callback function and does not have any return value









// fourth case return callBackFunc()
function test(callback) {
    return callback();
}

const callbackFunc = () => {
    console.log("Calling the callback function");
    return 5;
};

const result = test(callbackFunc);
console.log(result);

// output is Calling the callback function and having the return value 5










// fifth case return callBackFunc

function test(callback) {
    return callback;
}

const callbackFunc = () => {
    console.log("Calling the callback function");
    return 5;
};

const result = test(callbackFunc);
result();

// output is Calling the callback function and having the return value 5