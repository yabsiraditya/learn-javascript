function useStrictMode() {
    // menyalakan strict mode
    `use strict`
    const person = {
        firstName: "Yabsir"
    }
    
    with (person) {
        console.log(firstName);
    }
}

useStrictMode();