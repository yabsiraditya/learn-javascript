// Javascript tidak menganut Blok Scope tapi Function Scope

var i = 2;

if(i % 2 == 0) {
    var genap = true;
}

if (genap) {
    console.log("Genap!");
}

// Global Scope / Window Scope
function tes() {
    a = 2;
}

tes();
console.log(a);


// Glb
var b = 1;
function tes1(b) {
    console.log(b);
}
tes1(2);

// Scope
var c = 1 

function tes2(c) {
    console.log(c);
}
tes2(c);
console.log(c);