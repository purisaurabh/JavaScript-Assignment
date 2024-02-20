
// so the difference between the let and const is let allow to reassignment of variable but const not 
// but the simillarity is let and const are allow modification

console.log("let Object");

let person = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
};
console.log("The given object", person);


// accessing the properties
console.log("The name of person :" , person.firstName);

// iterating the object
console.log("Iterating the objects");
for (let i in person){
    console.log(person[i]);
}

// adding the new properties
person.mobileNo = 489537509
console.log("After adding the new properties : " , person);

// modifying the property
person.firstName = "someName"
console.log("After modifying the object " , person);

// deleting the property
delete person.mobileNo
console.log("After deleting the property : ", person);




console.log("const Object");



// const object
const newPerson = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
};
console.log("The given object", newPerson);


// accessing the properties
console.log("The name of person :" , newPerson.firstName);

// iterating the object
console.log("Iterating the objects");
for (let i in newPerson){
    console.log(newPerson[i]);
}

// adding the new properties
newPerson.mobileNo = 489537509
console.log("After adding the new properties : " , newPerson);

// modifying the property
newPerson.firstName = "someName"
console.log("After modifying the object " , newPerson);

// deleting the property
delete newPerson.mobileNo
console.log("After deleting the property : ", newPerson);