function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function (name) {
        console.log(`Hello ${name}, My Name Is ${this.firstName}`);
    }
}

function Manager(firstName, lastName) {
    this.lastName = lastName;
    Employee.call(this, firstName)
}

const yabsir = new Manager("Yabsir", "Aditya");
console.log(yabsir);