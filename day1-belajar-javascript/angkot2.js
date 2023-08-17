var jmlAngkot = 15;
var angkotBeroperasi = 8;



for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    
    if(noAngkot <= angkotBeroperasi){
        console.log('Angkot No.'+noAngkot+' Sedang Beroperasi');
    } else
        console.log('Angkot No.'+noAngkot+' Sedang Tidak Beroperasi');
}