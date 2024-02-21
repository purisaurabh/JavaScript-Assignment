// Write a function mapBy to convert an array of objects into an object mapped by the specified key:

let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
}];

const newObject = {}

function mapBy(users , first_name){
    
    const firstNameValues = users.filter( (val) => val.first_name === first_name)
    // console.log(firstNameValues);
    newObject[first_name] = firstNameValues

}


users.map((val) =>{
    mapBy(users , val.first_name)
})

console.log(newObject);
console.log("The type of new object : " , typeof newObject);

