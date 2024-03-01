// Can you use return instead of break in loops?

/*
   If you use return instead of break in a loop, it will exit the loop, but it will also exit the function entirely.
   Whereas, if you use break, it will only exit the loop, allowing the function to continue executing. 
   So consider the function necessity of function execution while you use return in place of break.
*/



addNumber()

function addNumber(){
    for(let i = 0; i < 10; i++){
        if (i === 8){
            console.log("The loop end here because of return");
            return
        }
        console.log(i);
    }
    console.log("Function end here");
}