let arrObject = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
}, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
}, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31"
}, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23"
}, {
    "id": 5,
    "first_name": "Venita",
    "email": "vheap4@clickbank.net",
    "date_of_birth": "2020/10/04"
}, {
    "id": 6,
    "first_name": "Fairfax",
    "email": "fcrichton5@merriam-webster.com",
    "date_of_birth": "2009/12/23"
}, {
    "id": 7,
    "first_name": "Kathleen",
    "email": "kvasyukhnov6@devhub.com",
    "date_of_birth": "2010/12/20"
}, {
    "id": 8,
    "first_name": "Sam",
    "email": "scorck7@sitemeter.com",
    "date_of_birth": "2020/08/30"
}, {
    "id": 9,
    "first_name": "Virgilio",
    "email": "vferandez8@e-recht24.de",
    "date_of_birth": "2000/09/07"
}, {
    "id": 10,
    "first_name": "Townie",
    "email": "tpetyt9@upenn.edu",
    "date_of_birth": "2018/09/01"
}]


// Write a function filterByName that accepts a string as a parameter and returns an array with only those objects where the first_name field includes that string.



function filterByName(nameValue) {
    // Using the filter method to create a new array with matching objects
    let nameArr = arrObject.filter(user =>
      user.first_name.includes(nameValue)
    );
  
    return nameArr;
}
const result = filterByName("Sam");
console.log(result);




// Use Array.map to return an array of all the email fields.

let emailsArr = arrObject.map(email => email.email)
console.log("Eamils array is : " , emailsArr);



// Use Array.sort to return the array sorted in descending order by date_of_birth.

let sortDate = arrObject.sort((a , b) =>{
    let firstDate = new Date(a.date_of_birth)
    let secondDate = new Date(b.date_of_birth)

    return secondDate - firstDate
})

console.log("Sorted arrObject by date : ", sortDate);


// Write a function getById that accepts a number as a parameter and returns the object where the id is equal to that number.

// first method using the Array.filter
function getByIdUsingFilter(id){
    let res = arrObject.filter(value => 
        value.id === id
    )

    return res
}

console.log("The array by id using the filter :" , getByIdUsingFilter(1));


// second method using the Array.find
function getByIdUsingFind(id)   {
    let res = arrObject.find(value => value.id === id)
    return res
}
console.log("The array by id using find : " , getByIdUsingFind(2));



// third method using the for loop
function getByIdUsingLoop(id){
    for(let i = 0; i < arrObject.length ; i++){
        if(arrObject[i].id === id){
            return arrObject[i]
        }
    }
}

console.log("The array by id using the for loop :", getByIdUsingLoop(3));

