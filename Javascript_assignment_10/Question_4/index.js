// Share minimum four differentiation between regular function and arrow functions with one examples



// 1) Hoisting
regularFunction()

function regularFunction() {
  console.log("This is a regular function.")
}

// output : This is a regular function.


arrowFunction()

const arrowFunction = () => {
  console.log("This is an arrow function.")
}

// Output : ReferenceError :  Cannot access 'arrowFunction' before initialization





// 2) this keyword
// Unlike regular functions, arrow functions do not have their own this.
const obj = {
  a : 10,
  arrowFunc : () =>{
    console.log("The value of a in arrow function : " , this.a);
  },
  regularFunction : function(){
    console.log("The value of a in regulat function is :" , this.a);
  }
}


obj.arrowFunc() //The value of a in arrow function :  undefined
obj.regularFunction() // The value of a in regulat function is : 10



// 3) Arguments availability
// araguments objects are not available in arrow functions 
// but available in the regular functions


const usingRegular = {
  regularFunction(){
    console.log(arguments);
  }
}

usingRegular.regularFunction(1,2,3,4) // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]


// const usingArrow = {
//   arrowFunc : () =>{
//     console.log(...arguments);
//   }
// }


// usingArrow.arrowFunc(1,2,3.4) // Uncaught ReferenceError: arguments is not defined




// 4) new keyword

// Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’.
// so that regular function are construct using the new keyword
const usingRegularFunc = function(){
  console.log("Arguments are : " , ...arguments);
}

const values = new usingRegularFunc(1,2,3) // Arguments are :  1 2 3


// arrow functions are only ‘callable’ and not constructible. 
const usingArrowFunc = () =>{
    console.log(...arguments);
}

const arrValues = new usingArrowFunc(1,2,3,4) // Uncaught TypeError: usingArrowFunc is not a constructor