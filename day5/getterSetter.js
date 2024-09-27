const person = {
    firstName: "Yabsir",
    lastName: "Aditya",
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.fullName);