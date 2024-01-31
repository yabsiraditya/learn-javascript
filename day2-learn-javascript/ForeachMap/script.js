var nama = ["Yabsir", "Aditya", "Didit", "Anto"]

// ForEach
nama.forEach(function (e, i) {
  console.log("Mahasiswa ke-" + (i+1) + " adalah : " + e);
})

// Map
var angka = [1,3,5,2,6,8,7]

var angka2 = angka.map(function (e) {
  return e * 2;
})

console.log(angka2.join(" "));

// Sort
angka2.sort(function (a,b) {
  return a-b;
})
console.log(angka2.join(" "));