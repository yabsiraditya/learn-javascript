{
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sayHello = function (name) {
            console.log(`Hello ${name}, My Name Is ${this.firstName} ${this.lastName}`);
        }
    }

    const yabsir = new Person("Yabsir", "Aditya");
    yabsir.sayHello("Asep");
    
    const budi = new Person("Budi", "Setiawan");
    budi.sayHello("Jajang");
    
    console.log(yabsir);
    console.log(budi);
}