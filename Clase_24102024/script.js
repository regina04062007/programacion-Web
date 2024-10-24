/*
//arreglos
let array = ["dato", 1, Boolean];
console.log("El tamaño del array es "+ array.length);

array.push("Nuevo valor agregado");
console.log(array[3]);
console.log("El nuevo tamaño del array es: "+array.length);


//length, push, for

let tabla5=[];

for (i=1; i<11; i++){
    if(tabla5.length<6){
        tabla5.push("El resultado de 5*"+i+ "="+ i*5);
        console.log(tabla5);
    }
}
console.log("Aqui termina el arreglo");


//Eliminar elementos de un array

let array = ["dato 1", 1, Boolean];

array.push("insert nuevo valor");
console.log(array[3]);

//Eliminar
array.slice(2,2)
console.log(array);

*/ 

let tarea =[];
const tareaInput=document.getElementById('tareaInput');
const agregarTareaBotton=document.getElementById('agregarTareaBotton');
const tareaLista=document.getElementById('tareaLista');

 
