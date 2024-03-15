// Write a function to check deep equality of two nested objects/arrays

function deepEqual(obj1, obj2) {
    // Check if both objects are of the same type
    if (typeof obj1 !== typeof obj2) {
        return false;
    }

    // Check if both objects are arrays
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        // Check if arrays have the same length
        if (obj1.length !== obj2.length) {
            return false;
        }

        // Recursively check each element in the array
        for (let i = 0; i < obj1.length; i++) {
            if (!deepEqual(obj1[i], obj2[i])) {
                return false;
            }
        }
        return true;
    }

    // Check if both objects are non-null objects
    if (typeof obj1 === 'object' && obj1 !== null && typeof obj2 === 'object' && obj2 !== null) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        // Check if objects have the same set of keys
        if (keys1.length !== keys2.length || !keys1.every(key => keys2.includes(key))) {
            return false;
        }

        // Recursively check each property in the object
        for (const key of keys1) {
            if (!deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }
        return true;
    }

    // For primitive values or non-object types, use strict equality
    return obj1 === obj2;
}

// Example usage:
const objA = { a: 1, b: { c: 2, d: [3, 4] } };
const objB = { a: 1, b: { c: 2, d: [3, 4] } };
const objC = { a: 1, b: { c: 2, d: [3, 5] } };

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false