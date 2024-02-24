// Create a memoised function that returns the cached value when the same arguments are passed.

// considering the product of three value


// using the hashMap
function memoisedHashFunc(callBackFunc){
    const cachedMap = new Map()

    return function(...args){
        const key = JSON.stringify(args)
        
        if (cachedMap.has(key)){
            console.log("Result found in cachemap");
            return cachedMap.get(key)
        }

        const result = callBackFunc(...args)
        cachedMap.set(key , result)
        console.log("New value added into cachedMap");
        return result
    }
}

function multiply(...args){
    return args.reduce((acc , val) => {
        return acc * val
    } , 1)
}

const getMultiplyValue = memoisedHashFunc(multiply)

console.log(getMultiplyValue(2,3,4));// new key created
console.log(getMultiplyValue(2,3,4)); // return from cachedMap





// using the object

// function memoizeFunc(callBackFunc) {
//     const cachedObj = {};

//     return function (...args) {
//         const key = JSON.stringify(args);

//         if (cachedObj[key]) {
//             console.log('Cached result found!');
//             return cachedObj[key];
//         }
        
//         // const result = callBackFunc.apply(this, args);
//         const result = callBackFunc(...args)
//         cachedObj[key] = result;
//         console.log('New result calculated and cached!');
//         return result;
//     };
// }

// // Example function to be memoized with three arguments
// function multiply(...elements) {
//     return elements.reduce((acc, res) => {
//         return acc * res
//     }, 1)
// }

// // Creating a memoized version of the 'multiply' function
// const memoizedMultiply = memoizeFunc(multiply);

// // Testing the memoized function
// console.log(memoizedMultiply(2, 3, 4));    // This will calculate and cache the result
// console.log(memoizedMultiply(2, 3, 4));    // This will use the cached result

