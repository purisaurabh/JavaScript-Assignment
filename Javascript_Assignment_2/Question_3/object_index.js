
// so the difference between the let and const is let allow to reassignment of variable but const not 
// but the simillarity is let and const are allow modification

console.log("let Object");

let person = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
};
console.log("The given object", person);
// Output : The given object { firstName: 'John', lastName: 'Doe', age: 50 }



// accessing the properties
console.log("The name of person :" , person.firstName);
// Output : The name of person : John



// iterating the object
console.log("Iterating the objects");
for (let i in person){
    console.log(person[i]);
}
/*
Output : Iterating the objects
John
Doe
50
*/



// adding the new properties
person.mobileNo = 489537509
console.log("After adding the new properties : " , person);
// Output : After adding the new properties :  { firstName: 'John', lastName: 'Doe', age: 50, mobileNo: 489537509 }



// modifying the property
person.firstName = "someName"
console.log("After modifying the object " , person);
/* Output : After modifying the object  {
  firstName: 'someName',
  lastName: 'Doe',
  age: 50,
  mobileNo: 489537509
}
*/

// deleting the property
delete person.mobileNo
console.log("After deleting the property : ", person);
// Output : After deleting the property :  { firstName: 'someName', lastName: 'Doe', age: 50 }




console.log("const Object");



// const object
const newPerson = { 
    firstName: "John", 
    lastName: "Doe", 
    age: 50, 
};
console.log("The given object", newPerson);
// Output : The given object { firstName: 'John', lastName: 'Doe', age: 50 }



// accessing the properties
console.log("The name of person :" , newPerson.firstName);
// Output : The name of person : John



// iterating the object
console.log("Iterating the objects");
for (let i in newPerson){
    console.log(newPerson[i]);
}
/*
Output : Iterating the objects
John
Doe
50
*/



// adding the new properties
newPerson.mobileNo = 489537509
console.log("After adding the new properties : " , newPerson);
// Output : After adding the new properties :  { firstName: 'John', lastName: 'Doe', age: 50, mobileNo: 489537509 }



// modifying the property
newPerson.firstName = "someName"
console.log("After modifying the object " , newPerson);
/* Output : After modifying the object  {
  firstName: 'someName',
  lastName: 'Doe',
  age: 50,
  mobileNo: 489537509
}
*/




// deleting the property
delete newPerson.mobileNo
console.log("After deleting the property : ", newPerson);
// Output : After deleting the property :  { firstName: 'someName', lastName: 'Doe', age: 50 }