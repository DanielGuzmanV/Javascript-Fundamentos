// Los operadores logicos son:
// AND, OR, NOT

let valorBool1 = false;
let valorBool2 = true;

// Primer operador AND (&&)
console.log(true && true);
console.log(false && true);

console.log("Operador And", valorBool1 && valorBool2);
console.log("Operador And", valorBool1 && valorBool1);
console.log("Operador And", valorBool2 && valorBool2);
console.log("Operador And", valorBool2 && valorBool1);

console.log('---------------------------------------------');

// Segundo operador OR (||)
console.log(true || true);
console.log(false || true);

console.log("Operador OR", valorBool1 || valorBool2);
console.log("Operador OR", valorBool1 || valorBool1);
console.log("Operador OR", valorBool2 || valorBool2);
console.log("Operador OR", valorBool2 || valorBool1);

console.log('---------------------------------------------');

// Tercer operador NOT (!)
console.log("Operador NOT", !valorBool1);
console.log("Operador NOT", !valorBool2);
console.log("Operador NOT", !!valorBool1);
console.log("Operador NOT", !!valorBool2);


