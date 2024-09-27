function createAdder(value) {
    const onwer = "Dito";
    function add(param) {
        console.log(onwer);
        return value + param;
    }
    return add;
}

const addTwo = createAdder(10);
console.log(addTwo(10));
console.log(addTwo(20));