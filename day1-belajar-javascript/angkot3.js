var jmlAngkot = 10;
var angkotBeroperasi = 6;



for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    
    if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
        console.log('Angkot No.'+noAngkot+' Sedang Beroperasi');
    } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
        console.log('Angkot No.'+noAngkot+' Sedang Lembur');
    } else {
        console.log('Angkot No.'+noAngkot+' Sedang Tidak Beroperasi');
    }
}