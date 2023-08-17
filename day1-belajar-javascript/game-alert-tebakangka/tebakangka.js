var chance = 3;

var comp = Math.random();
// Menangkap Pilihan Random
// membangkitkan Bilangan Random
if(comp < 0.10) {
    comp = '1';
} else if( comp >= 0.10 && comp < 0.20) {
    comp = '2';
} else if( comp >= 0.20 && comp < 0.30) {
    comp = '3';
} else if( comp >= 0.30 && comp < 0.40) {
    comp = '4';
} else if( comp >= 0.40 && comp < 0.50) {
    comp = '5';
} else if( comp >= 0.50 && comp < 0.60) {
    comp = '6';
} else if( comp >= 0.60 && comp < 0.70) {
    comp = '7';
} else if( comp >= 0.70 && comp < 0.80) {
    comp = '8';
} else if( comp >= 0.80 && comp < 0.90) {
    comp = '9';
} else {
    comp = '10';
}

alert('tebak angka 1-10' + '\n kamu punya ' + chance + ' kesempatan');
chance--
while(chance >= 0) {
// Menangkap Pilihan Player
var p = prompt('Masukan Angka Dari 1 - 10 : ');

// Menentukan Rules
if(p == comp) {
    alert('Tebakan Anda Benar! \n Angka Yang Dicari ' + comp);
    break;
} else if(chance == 0) {
    alert('Kesempatan Anda Sudah Habis!');
    break;
} else if(p > comp) {
    alert('Terlalu Besar! \n kamu punya '+chance+' Kesempatan Lagi');
} else if(p < comp) {
    alert('Terlalu Rendah! \n kamu punya '+chance+' Kesempatan Lagi');  
}
chance--
}
