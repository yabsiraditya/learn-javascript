// Membuat Function
function sayHellowWorld() {
    console.log("Hello World");
    
}

// Memanggil Function
sayHellowWorld();
sayHellowWorld();


// default Parameter
function register(name, gender = "Unknown") {
    console.log(name);
    console.log(gender);
}

register("Yabsir", "laki-laki");
register("Yabsir",);