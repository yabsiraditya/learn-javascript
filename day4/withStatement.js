// tidak direkomendasikan menggunakan with statement

const person = {
    firstName: "Yabsir",
    lastName: "Aditya",
    hobi: "Badminton"
}

console.log(person.firstName);
console.log(person.lastName);

with (person){
    console.log(lastName);
    console.log(firstName);
}