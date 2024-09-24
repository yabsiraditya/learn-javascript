const sayHellow = (name) => {
    const say = `Hellow ${name}`
    console.log(say);
}

sayHellow("budi");


const sayMe = (name) => console.log(`Hellow ${name}`);

sayMe("Anto")

// satu parameter tidak perlu kurung
const sayMe1 = name => console.log(`Hellow ${name}`);

sayMe1("Santoso")


const sum = (num1, num2) => num1 + num2;

console.log(sum(20,25));

const tambah = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(100,100));


// arrow function sebagai parameter
function giveMeName(callback) {
    callback("Sandi")
}

// anonymous function
// giveMeName(function (name) {
//     console.log(`Hello ${name}`)
// })

giveMeName((name) => console.log(`Hello ${name}`));