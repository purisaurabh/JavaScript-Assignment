// Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.
import fetch from 'node-fetch'
const url = 'https://reqres.in/api/users'

const options = {
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
}

function newPromise(){
    return new Promise((resolve , reject) =>{
        fetch(url , options)    
        .then((response) =>{
            if(!response.ok){
                throw new Error(`Error occured , status code : ${response.status}`)
            }
            return response.json()
        })
        .then((data) =>{
            setTimeout(() => {
                resolve(data)
            }, 2000);
        })
        .catch((error) =>{
            reject(error)
        })
    })
}


function promiseCall(){
    newPromise()
    .then((data) =>{
        console.log("The fetched data : ",data);
    }).catch((error) =>{
        console.log("Error : " , error);
    })
}


promiseCall()