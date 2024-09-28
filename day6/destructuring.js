// mengambil data di array 
{
    const names = ["Yabsir", "Aditya", "Susss", "Siiiiuuuuu", "budi", "Joko"];
    // const firstName = names[0]
    // const middleName = names[1]
    // const lastName = names[2]

    // destructuring array

    const [firstName, middleName, lastName, ...others] = names;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName); 
    console.log(others); 

}

{
    // destructuring object
    const person = {
        firstName: "Yabsir",
        lastName: "Aditya",
        address: {
            street: "Jalan Setia Budi",
            city: "Jakarta",
            country: "Indonesia"
        },
        hobby: "Badminton",
        channel: "Yabsir Aditya"
    };

    const {firstName, lastName, address: {country, city, street}, ...others} = person

    console.log(firstName);
    console.log(lastName);
    // console.log(address); 
    console.log(country); 
    console.log(city); 
    console.log(street); 
    console.log(others); 
}

{
    // Destructuring di Function Parameter (1)
    function displayPerson({firstName, middleName, lastName}) {
        console.log(firstName);
        console.log(middleName);
        console.log(lastName);
    }

    const person = {
        firstName:"Yabsir",
        middleName:"Aditya",
        lastName:"Sssiuuuu"
    }

    displayPerson(person)
}

{
    // Destructuring di Function Parameter (2)
    function sum([first, second]) {
        return first + second;
    }

    console.log(sum([10,10]));
    console.log(sum([20,20]));
}

{
    // default value destructuring array
    const names = ["Asep", "Budi", "Joko"];

    const [firstName="Yabsir", middleName="Kurniawan", lastName= "Samsul"] = names

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

{
    const person = {
        firstName:"Yabsir",
        middleName:"Budi",
        lastName:"Aditya"
    };

    let {firstName, middleName= "Susilo", lastName} = person;

    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

{
    // menggunakan nama Variable lain
    const person = {
        firstName:"Yabsir",
        middleName:"Budi",
        lastName:"Aditya"
    };

    let {firstName: namaDepan, 
        middleName: namaTengah = "Susilo", 
        lastName: namaBelakang} = person;

    console.log(namaDepan);
    console.log(namaTengah);
    console.log(namaBelakang);
}