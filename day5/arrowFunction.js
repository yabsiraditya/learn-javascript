const person = {
    name: "Adit",
    sayHello: (name) => {
        console.log(`Hello ${name}, ${this.name}`)
    }
}

person.sayHello("Bapak");