/*Ete codigo JavaScript contiene funciones que estandiseñadas para en conjunto
controlando el comportamiento de los botones y el campo de entrada (display)



*/
function appendToDisplay (value){
    document.getElementById('display').value += value;
}
function clearDisplay(){
    document.getElementById('display').value = '';
}
function deleteLast(){
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0,-1);
}
function calculateResult(){
    try{
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error){
        alert('Expresión Invalida')
    }
}

//ReginaLaPro