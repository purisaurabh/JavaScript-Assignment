// How will you create a new copy of the object below while updating the value of address.details[0] to “5“?

let copyObject = {
    name:"Harry Potter",
    age: 12,
    address: {
        details: ["4", "Privet Drive"],
        area:"Little Whinging",
        city: "Surrey",
        state: "England"
    }
}

// we can create the copy of an object using the JSON.parse and JSON.stringigy

let newCopyObject = JSON.parse(JSON.stringify(copyObject))
newCopyObject.address.details[0] = "5"

console.log("The given object : " , copyObject);
console.log("The copy object with updated value : " , newCopyObject);