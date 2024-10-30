/**Codigo que realice las operaciones de sumar, restar, dividir, multiplicar
const numeros = [1, 2, 3, 4, 5,6];
let sum = 0;
let res = 0;
let mult = 1;
let div = 1;
for (let i = 0; i < numeros.length; i++) {
    sum += numeros[i];
    res -=numeros[i];
    mult*=numeros[i];
    div/=numeros[i];
}

console.log("Imperativo");


console.log(sum);
console.log(res);
console.log(mult);
console.log(div);

console.log("Declarativo");

const sumD = numeros.reduce((posicion, i) => posicion + i, 0);
const resD = numeros.reduce((posicion, i) => posicion - i, 0);
const multD = numeros.reduce((posicion, i) => posicion * i, 1);
const divD = numeros.reduce((posicion, i) => posicion / i, 1);

console.log(sumD);
console.log(resD);
console.log(multD);
console.log(divD);
*/

let tabla8=[];

for (i=1; i<11; i++){
    if(tabla8.length<10){
        tabla8.push("El resultado de 8*"+i+ "="+ i*8);
        
    }
}
console.log(tabla8);

const sumD = tabla8.reduce((posicion, i) => posicion * i * 8, 1);

console.log(sumD);
