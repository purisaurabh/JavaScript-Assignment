// Can you use return instead of break in loops?

/*
    Yes we can use the return instead of break in the javascript
    to execute the function or loop completely
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