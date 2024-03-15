// Implement a Fibonacci sequence generator using a generator function in JavaScript.

function *fibonacciSeries(){
    let a = 0;
    let b = 1;

    while(true){
        let current = a
        a = b
        b = current + b
        yield current
    }
}


result = fibonacciSeries()
console.log("Fibonacci series upto 10 : ");
for (let i = 0; i < 10; i++) {
    console.log(result.next().value);
}