// What will be printed to the console when the promise resolves and when it rejects ?
const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        const value = Math.random()
        console.log(value);
        if (value > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction: ', err);
    });
};
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));



// if the Promise is resolves then it will print : Response in then block : Test Resolve
// if the Promise is reject then it will print : Error caught in testAsyncFunction:  Test Reject
                                              // Response in then block:  undefined