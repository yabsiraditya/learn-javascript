// var angka = prompt('Masukan Angka : ');

// switch(angka) {
//     case '1' :
//         alert('Anda Memasukan Angka 1');
//         break;
//     case '2' :
//         alert('Anda Memasukan Angka 2');
//         break;
//     case '3' :
//         alert('Anda Memasukan Angka 3');
//         break;
//     case '4' :
//         alert('Anda Memasukan Angka 4');
//         break;
//     default :
//         alert('Angka Yang Anda Masukan Salah');
//         break;
// }
var lagi = true;

while(lagi) {

    var item = prompt('Masukan Nama Makanan / Minuman :  \n (cth : nasi, daging, susu, humburger, softdrink)');

    switch(item) {
        case 'nasi' :
            alert('Makanan / Minuman Sehat');
            break;
        case 'daging' :
            alert('Makanan / Minuman Sehat');
            break;
        case 'susu' :
            alert('Makanan / Minuman Sehat');
            break;
        case 'humberger' :
            alert('Makanan / Minuman Tidak Sehat');
            break;
        case 'softdrink' :
            alert('Makanan / Minuman Tidak Sehat');
            break;
        default :
            alert('Makanan yang anda masukan salah!');
            break;
    }

lagi = confirm('Ulang Lagi ?');
}
alert('Terima Kasih');