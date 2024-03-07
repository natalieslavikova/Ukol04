/*Maximum ze tří čísel
Napište funkci max3, která vrátí největší ze tří zadaných čísel. Opět se vyhněte použití funkce Math.max.*/

const max3 = (cislo1, cislo2, cislo3) => {
    if (cislo1 > cislo2 && cislo1 > cislo3) {
        return cislo1;

    } else if (cislo2 > cislo3) {
        return cislo2;

    } else {
        return cislo3;
    }
}

console.log(max3(45, 45, 28));
console.log(max3(15, 15, 15));
console.log(max3(150, 15, 1));
console.log(max3(8, 17, 13));