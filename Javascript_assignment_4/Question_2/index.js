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

function test(callBackFunc){
    callBackFunc()
}

function callBackFunc(){
    console.log("Calling from the callback function")
    return 5
}

test(callBackFunc)

// Output : calling from the callback function 
// callback does not return explicitely value 



// second case : test(callbackFunc())
// function test(callBackFunc()){
//     callBack()
// }

// function callBackFunc(){
//     console.log("Calling from the callback function")
//     return 5
// }
// test(callBackFunc)
// in this we can not pass the function as parameter it will give an syntax error


// third case : test(() => callbackFunc())

test(() => callBackFunc())

function callBackFunc(){
    console.log("Calling from the callback function")
    return 5
}

test(callBackFunc)