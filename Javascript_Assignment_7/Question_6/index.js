// Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. 

let userNames = [{
    "id": 1,
    "first_name": "Nicki",
}, {
    "id": 2,
    "first_name": "Raychel",
}, {
    "id": 3,
    "first_name": "Demetris",
}, {
    "id": 4,
    "first_name": "Amata",
}]


let userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
}, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
}, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
}, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
}]


const len = function(obj){
    return Object.keys(obj).length
}



function mergeById(userNames, userEmails){
    if(len(userEmails) == len(userNames)){
        for(const key of userEmails){
          console.log(key);
        }
    }
}
mergeById(userNames , userEmails)