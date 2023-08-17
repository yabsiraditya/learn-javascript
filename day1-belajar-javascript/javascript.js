// IF ELSE
var x = 15;

if(x % 2 == 0) {
    alert("Genap")
} else {
    alert("Ganjil")
}

// Escape Character
alert('"Gerakan Pemuda indonesia" Pada hari Jum\'at')
alert('\u00A9')


// String 
if("Yabsir Aditya" == "yabsir aditya") {
    alert("Benar") 
} else {
    alert("Salah")
}

// Length
var nama= "Yabsir Aditya";
alert(nama.length)


//Boolean
alert(Boolean(10 < 12))


// Variabel
// Cara Penulisan Variabel
var iniBolehBanget;

var namaVariabelPanjang;
// Camel Case

var nama = "Yabsir Aditya";
    umur = 21;
    lulus = "true";

alert(nama+umur+lulus)

// Console Log
var apaYa = "Test doang coy";
    console.log(apaYa);
    console.log('HahaHihi');

// Prompt
var nama1 = prompt('Masukan Nama : ');
    alert(nama1);

// Confirm
var test = confirm('Kamu Yakin ?');
if(test === true) {
    alert('User Menenkan OK');
} else {
    alert('User Menekan Batal');
}