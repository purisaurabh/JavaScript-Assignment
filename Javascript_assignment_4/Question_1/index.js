/*
    What happens when you add a for loop/while loop/switch case block inside a function and 
    use return instead of break? Do statements after the loop run? 
    What is the return value? Can we pass a return value from within a loop? 
    Can you return from inside an if block? What impact does that have?
*/

/*
    In javascript when we add the return statement in any loop then the statement after the 
    return will not be executed 
    whatever will be the return value will sent back to the where we want to store the value
    and same it will work for the if block as well the execution
*/

iterateFunction();

function iterateFunction() {
  for (let i = 0; i < 10; i++) {
    if (i == 5) {
      console.log("Loop end here with retunr statement");
      return;
    }
    console.log(i);
  }
  console.log("Here are the some function which will not be executed at all");
}
