function* createNames() {
    yield "Yabsir"
    yield "Aditya"
}

const names = createNames();
for (const name of names) {
    console.log(name);
}

// eager evaluation
function buatGenap(value) {
    const result = []
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 0) {
            console.log(`yield : ${i}`);
            result.push(i);
        }
    }
    return result;
}

const genap = buatGenap(50);
for (const angkaGenap of genap) {
    console.info(angkaGenap);
}

// lazy evaluation
function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            console.log(`yield : ${i}`);
            yield i;
        }
    }
}

const ganjil = buatGanjil(20);

// lazzy generator
// console.log(ganjil.next().value);
// console.log(ganjil.next().value);
// console.log(ganjil.next().value);

// lazy evaluation
for (const angkaGanjil of ganjil) {
    console.log(angkaGanjil);
}