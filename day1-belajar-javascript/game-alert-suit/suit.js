var tanya = true;

while(tanya) {

// Menangkap Pilihan Player
var p = prompt('Pilih : gajah, semut, orang');

// Menangkap Pilihan Random
// membangkitkan Bilangan Random
var comp = Math.random();

if(comp < 0.34) {
    comp = 'gajah';
} else if( comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

// Menentukan Rules
var hasil = '';
if(p == comp) {
    hasil = 'SERI!';
} else if(p == 'gajah') {
    // if(comp == 'orang'){
    //     hasil = 'MENANG!';
    // } else {
    //     hasil = 'KALAH!';
    // }
    hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
} else if(p == 'orang') {
    hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
} else if(p == 'semut') {
    hasil = (comp == 'orang') ? 'KALAH!' : 'MEMANG!';
} else {
    hasil = 'Memasukan Pilihan Yang Salah!!';
}

// Tampilan Hasilnya
alert('Kamu Memilih : '+p+' Dan Komputer Memilih : '+comp+'\nMaka Hasilnya : Kamu '+hasil);

tanya = confirm('Main Lagi ?')
}
alert('Terima Kasih Sudah Bermain');