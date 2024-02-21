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





function mergeById(userNames, userEmails){
    const mergedObject = {}
    for(const val of userNames){
        const id = val.id
        mergedObject[id] = {...mergedObject[id] , ...val}
    }

    for(const val of userEmails){
        const id = val.id
        mergedObject[id] = {...mergedObject[id] , ...val}
    }

    return Object.values(mergedObject)
}




const result = mergeById(userNames , userEmails)
console.log("The merged object : " , result);