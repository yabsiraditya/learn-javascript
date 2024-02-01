var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    // Tambah Penumpang Di Awal Array
    penumpang.push(namaPenumpang)
    // Kembalikan Isi Array & Keluar Dari Function
  } else {
    // Telusuri Seluruh Kursi Dari Awal
    for (let i = 0; i < penumpang.length; i++) {
      // Jika Kursi Kosong
      if (penumpang[i] == undefined) {
        // Tambah penumpang Di Kursi Tersebut
          penumpang[i] = namaPenumpang;
        // Kembalikan Isi Array & Keluar Dari Function
          return penumpang
      } else if (penumpang[i] == namaPenumpang) {
        // Tampilkan Pesan Kesalahannya
          console.log(namaPenumpang + ' Sudah Ada Di Dalam Angkot');
        // Kembalikan Isi Array & Keluar Dari Function
          return penumpang
      } else if (i == penumpang.length - 1) {
        // Tambah Penumpang Di Akhir Array
          penumpang.push(namaPenumpang)
        // Kembalikan Isi Array & Keluar Dari Function
          return penumpang
      }
    }
  }
  return penumpang
}

var hapusPenumpang = function (namaPenumpang, penumpang) {
  if (penumpang.length == 0) {
    console.log('Angkot Masih Kosong');
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined
        return penumpang
      } else if (i == penumpang.length -1) {
        console.log(namaPenumpang + ' Tidak Ada Di Dalam Angkot');
        return penumpang
      }
    }
  }
  return penumpang
}