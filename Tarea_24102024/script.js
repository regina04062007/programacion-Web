let tareas = [];

//actualiza la lista
function actualizarLista() {
    // limpia el contenido de la lista
    tareaLista.innerHTML = '';
    
    // recorre cada tarea y la agrega a la lista
    tareas.forEach((tarea, index) => {
        // Crear un elemento de lista
        const tareaElemento = document.createElement('li');
        tareaElemento.textContent = tarea;
        
        // crea un botón de eliminar
        const eliminarBoton = document.createElement('button');
        eliminarBoton.textContent = '-';
        eliminarBoton.onclick = () => eliminarTarea(index);
        
        // agrega el botón al elemento de la tarea
        tareaElemento.appendChild(eliminarBoton);
        tareaLista.appendChild(tareaElemento);
    });
}

//agregar una nueva tarea
function agregarTarea() {
    const nuevaTarea = tareaInput.value;
    if (nuevaTarea) {
        tareas.push(nuevaTarea);
        tareaInput.value = ''; // limpia el input después de agregar una nueva tarea
        actualizarLista();
    }
}

// eliminar una tarea
function eliminarTarea(index) {
    tareas.splice(index, 1);
    actualizarLista();
}

// evento de click al botón de agregar
agregarTareaBotton.onclick = agregarTarea;

 
