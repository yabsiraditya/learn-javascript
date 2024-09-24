// Membuat Function
function sayHellowWorld() {
    console.log("Hello World");
    
};

// Memanggil Function
sayHellowWorld();
sayHellowWorld();


// default Parameter
function register(name, gender = "Unknown") {
    console.log(name);
    console.log(gender);
};

register("Yabsir", "laki-laki");
register("Yabsir",);


// function di value

function sayMe(name) {
    console.log(`Hello, ${name}`);
};

sayMe("yabsir");

let say = sayMe;
say("aditya");

// function di parameter

function giveMeName(callback) {
    callback("budi"); // sayMe("budi")
};

giveMeName(sayMe);
giveMeName(say); // giveMeName(sayMe)


// anonymous function di variable
let saya = function (name) {
    console.log(`Hello ${name}`);
};

saya("bobby");

// anonymous function di variable
function giveMe(callback) {
    callback("Samsul")
};

giveMe(function (name) {
    console.log(`Hellooo, ${name}`);
});


// function di dalam function
function outer(params) {
    function inner(params) {
        console.log("innner");
    };
    inner();
    inner();
};

outer();
// inner();