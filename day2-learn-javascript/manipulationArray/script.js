var arr = ["mhs", 2021]

// Menambah isi array
arr[2] = "Yabsir"
arr[3] = "Aditya"

// Push menambah array di akhir
arr.push('Didit', 'Anto', 'Andika')

// pop menghapus array di akhir
arr.pop();

// Unshift menambah array di awal
arr.unshift('Jon', 'Dito');

// shift menghapus array di awal
arr.shift()

// Splice menambah array di tengah
// splice(indexAwal, indexDiHapus, indexBaru, indexBaru, ...)
arr.splice(2, 2, "Udin")

// Slice
// slice(awal, akhir)
var arr2 = arr.slice(1,5)
console.log(arr2.join(" "));

// Menghapus isi array
arr[3] = undefined;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

console.log(arr.join(" "));
console.log(arr[1]);
console.log(arr);