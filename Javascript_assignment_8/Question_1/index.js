/*
    Write a function that can stop execution of a function for the number of milliseconds sent as an argument
    Example:
    const func = async () => {
    console.log(“Printing before”)
    //Call your function here eg. sleep(3000)
    console.log(“Printing after”)
    }
*/


function sleep(second){
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve()
            console.log(`This sleep function was stop for ${second} milliseconds`);
        }, second);
    })
}


async function func(){
    console.log("Printing before")
    await sleep(3000)
    console.log("Printing after")
}

func()