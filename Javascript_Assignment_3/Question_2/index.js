/*
    Declare a variable let arraySize = 25;. Using a for loop, 
    add numbers from one onwards into an array till the arraySize is reached.
*/

let arraySize = 25
let forArr = []

for(let i = 1; i <= arraySize ; i++){
    forArr.push(i)
}

console.log("The values of forArr is : ", forArr);



// using while loop
let whileArr = []
let i = 1
while(i <= arraySize){
    whileArr.push(i)
    i++;
}

console.log("The value of whileArr is : " , whileArr);
