{
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.sayHello = function (name) {
            console.log(`Hello ${name}, My Name Is ${this.firstName} ${this.lastName}`);
        }
    }

    Person.prototype.sayBye = function () {
        console.log("Good Byeee");
    }
    
    Person.prototype.run = function () {
        console.log(`${this.firstName} Run Dudee`);
    }

    const yabsir = new Person("Yabsir", "Aditya");
    yabsir.sayHello("Asep");
    
    const budi = new Person("Budi", "Setiawan");
    budi.sayHello("Jajang");
    
    console.log(yabsir);
    console.log(budi);

    yabsir.sayBye();
    yabsir.run();
}