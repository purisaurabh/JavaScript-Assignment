/*
    Declare a variable - let a;. On another line assign any value you like to a. Log the value of a before and after assignment. 
    Try doing the same with const.
    Use the typeof operator to find the types of different variables. 
    Specially note what the typeof operator returns for arrays, null values and NaN.
     How can you find if a variable is an array or NaN besides typeof?
*/

// for the let
let a;
console.log("The value before assign" , a);
a = "Immanuel"
console.log("The value after the assign" , a);



// for the const

/*
const b;
b = 100
console.log("The vaue of b if we are using the const", b);
*/

// the above declaration gives us the syntax erro
// we have to like..

const c = 100
console.log("The value c using the const ", c);


// type of operator

// 1) Number
let num = 1
console.log("The type of num", typeof num);
let NaNvalue = NaN
console.log("The type of NaNvalue" , typeof NaNvalue);
// 2) String
let str = "saurabh"
console.log("The type of str", typeof str);
// 3)Undefined
let x
console.log("The type of x is : ", typeof x);
// 4) Boolean
let flag = true
console.log("The tyep of the flag is :", typeof flag);
// 5) Object
let z = null
console.log("The type of the z is :", typeof z);
let user = {
    Name : "Immanuel",
    Email:"thisistheemail@gmail.com"
}
console.log("The type of the user is :", typeof user);
//6) Symbol
console.log("The type is :", typeof Symbol());
//7) Array
let arr = ["name" , "1" , null , NaN, true]
console.log("The type of array :", typeof arr);
//8 Date
// Get the Current Time
const date = new Date();
console.log("The value :", date);
console.log("The type is : " , typeof date);