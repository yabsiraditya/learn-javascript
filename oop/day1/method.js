{
    function Person() {
        this.firstName = "";
        this.lastName = "";
        this.sayHello = function (name) {
            console.log(`Hello ${name}, My Name Is ${this.firstName} ${this.lastName}`);
        }
    }

    const yabsir = new Person();
    yabsir.firstName = "Yabsir";
    yabsir.lastName = "Aditya";
    yabsir.sayHello("Asep");
    
    const budi = new Person();
    budi.firstName = "Budi";
    budi.lastName = "Setiawan";
    budi.sayHello("Jajang");
    
    console.log(yabsir);
    console.log(budi);
}