function sum(name, ...data) {
    let total = 0
    for (const item of data) {
        total += item;
    }
    console.log(`Total : ${name} is ${total}`);
}

sum('Orange',2,3,4,6,7,8);
sum('Apple',5,5,6,7,5,6);
sum('Banana',9,5,2,3,4);

const value = [10,10,10,10];
sum("test", value);
sum("test", ...value);


// argument object
function oldSum() {
    let total = 0
    for (const item of arguments) {
        total += item
    }
    console.log(`Total : ${total}`);
}

oldSum(1,2,3,4,5,6,7,8,9,10)