/*
    Create a validation class similar to ‘yup’ and add   for required, min and max for strings. 
    Expose an isValid method that returns true or false based on the argument passed
    Implement a Fibonacci sequence generator using a generator function in JavaScript.
    
    
*/


class customValidator{

  validateString(values, name , conditions){
    if(conditions.required && !values){
      console.log(`${name} field is requires`);
      return
    }

    if(conditions.min && values.length < conditions.min){
      console.log(`The size of ${name} should be greater than or equal to ${conditions.min} `);
      return
    }

    if(conditions.max && values.length > conditions.max){
      console.log(`The size of ${name} should be less than or equal ${conditions.max}`);
      return
    }
  }

}


const userFirst = new customValidator()
userFirst.validateString("thisistheusernam" , "Username" , {required : true , min:3 , max:10})







