// Global Scope
let counter = 0;

function hitMe() {
    // local scop hitMe
    counter++
};

hitMe();
hitMe();
hitMe();

console.log(counter);

function first() {
    // local scope
    let firstVariable = "First";
};

function second() {
    // local scope
    let secondVariable = "Second";
    //console.log(firstVariable); error
    
};

first();
second();

// global scope
// console.log(firstVariable);
// console.log(secondVariable);


// nested function scope
function first() {
    let firstVariable =  "first";

    function second() {
        console.log(firstVariable);
    }
    second();
}

first();