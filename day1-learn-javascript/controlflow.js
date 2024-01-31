var lagi = true;

while(lagi) {

var angka = prompt('Masukan Angka :');

if(angka % 2 === 0) {
    alert(angka + ' Adalah Bilangan Genap');
} else if (angka % 2 === 1) {
    alert(angka + ' Adalah Bilangan Ganjil');
} else {
    alert('Yang anda masukan bukan angka');
}

lagi = confirm('Ulangi Lagi ?')
}

alert('Terima Kasih');