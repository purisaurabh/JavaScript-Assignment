/*
    Write a function that sorts an array of objects by the key that is passed in the second argument, 
    and in the order passed as the 3rd argiment.
*/


let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09",
    "gender": "Male",
}, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05",
    "gender": "Female",
}, {
    "id": 3,
    "first_name": "Demetris",
    "email": "dkilshall2@elpais.com",
    "date_of_birth": "2018/12/31",
    "gender": "Male",
}, {
    "id": 4,
    "first_name": "Amata",
    "email": "abraiden3@canalblog.com",
    "date_of_birth": "2012/05/23",
    "gender": "Female",
}]


function sort(users, property, condition) {
    const sortOrder = condition === 'desc' ? -1 : 1
    return users.sort((a,b) =>{
        const firstValue = a[property]
        const secondValue = b[property]

        if(firstValue < secondValue){
            return -1 * sortOrder
        }else if(firstValue > secondValue){
            return 1 *sortOrder
        }else{
            return 0
        }
    });
}

// console.log("The object with sorted sorted : " , sort(users ,"id" , "asce"));
// console.log("The object with sorted sorted : " , sort(users ,"id" , "desc"));

console.log("The object with sorted values : ", sort(users, "first_name", "asce"));