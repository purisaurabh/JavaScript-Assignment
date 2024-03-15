// What will be printed to the console?
const testAsyncFunction = () => {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve('Test Resolve');
        } else {
            reject('Test Reject');
        }
    }).catch((err) => {
        console.log('Error caught in testAsyncFunction', err);
        throw new Error('Forced error');
    });
};
testAsyncFunction()
    .then((res) => {
        console.log('Response in then block: ', res);
    })
    .catch((err) => console.log('Error in catch block: ', err));

// the output depends on the whether the promise is resolved or reject
// if the Promise is resolves then it will print : Response in then block : Test Resolve
// if the Promise is reject then it will print : Error caught in testAsyncFunction:  Test Reject
                                              // Response in then block:  undefined