var angka = [1,3,5,2,6,8,7]

// Filter
var angka2 = angka.filter(function (e) {
  return e > 2;
})

// Find
var angka3 = angka.find(function (e) {
  return e > 2;
})

console.log(angka2.join(" "));
console.log(angka3);