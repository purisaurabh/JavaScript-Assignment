// Write a recursive function to create a deep clone of a nested object

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        // If the object is a primitive value or null, return it as is
        return obj;
    }

    if (Array.isArray(obj)) {
        // If the object is an array, clone each element recursively
        return obj.map(element => deepClone(element));
    }

    // If the object is a non-null object, clone each property recursively
    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    return clonedObj;
}

// Example usage:
const originalObject = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    }
};

const clonedObject = deepClone(originalObject);

console.log(clonedObject); // The deep clone of the originalObject
console.log(clonedObject !== originalObject); // true - they are different objects in memory