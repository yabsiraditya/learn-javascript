console.log(this);

function sample() {
    function inner() {
        console.log(this);
    }
    inner();
}
sample();


const person = {
    name:"Adit",
    sayHello: function (name) {
        console.log(`Hi ${name}, my name is ${this.name}`);
    }
}

person.sayHello("Budi")
person.sayHello("Joko")