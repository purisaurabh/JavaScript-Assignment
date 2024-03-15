/*
    Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). 
    Log the data into the console once it is received
*/

import fetch from 'node-fetch'

const url = 'https://reqres.in/api/users'

const options = {
    method: "GET",
    headers: {
        "Content-type": "application/json"
    }
}

fetch(url, options)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error , Status Code : ${response.status}`)
        }
        return response.json()
    })
    .then((data) => {
        console.log("The fetched data : ", data);
    })
    .catch((error) =>{
        console.log("Error is : " , error);
    })