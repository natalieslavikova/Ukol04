/*Maximum ze tří čísel
Napište funkci max3, která vrátí největší ze tří zadaných čísel. Opět se vyhněte použití funkce Math.max.*/

const max3 = (cislo1, cislo2, cislo3) => {
    if (cislo1 > cislo2 && cislo1 > cislo3) {
        return cislo1;

    } else if (cislo2 > cislo1 && cislo2 > cislo3) {
        return cislo2;

    } else if (cislo3 > cislo1 && cislo3 > cislo2) {
        return cislo3;
        
    } else {
        return "Čísla jsou stejná nebo nesmyslná.";
    }
}

console.log(max3(45, 45, 28));
