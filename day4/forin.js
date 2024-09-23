const person = {
    firstName: "Yabsir",
    lastName: "Aditya"
};

for (const property in person) {
        console.log(`Property ${property} : ${person[property]}`);
}

const names = ["Yabsir","Aditya","Badminton"];

for (const index in names) {
    console.log(`Index ${index} : ${names[index]}`);

}