document.title = "Tarjetas";
console.log(document.title);
//------------------------------------------------------

// Crear el contenedor principal para el formulario
const container = document.createElement("div");
container.style.margin = "20px";

// Crear título
const title = document.createElement("h2");
title.textContent = "Crear Tarjetas";
container.appendChild(title);

// Crear el formulario
const form = document.createElement("form");

// Crear campo de nombre de usuario
const usernamelabel = document.createElement("label");
usernamelabel.textContent = "Nombre";

const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.required = true;

form.appendChild(usernamelabel);
form.appendChild(usernameInput);

// Crear campo de ocupación de usuario
const passwordlabel = document.createElement("label");
passwordlabel.textContent = "Ocupación";

const passwordInput = document.createElement("input");
passwordInput.type = "text";
passwordInput.required = true;

form.appendChild(passwordlabel);
form.appendChild(passwordInput);

// Crear campo para selección de color
const color = document.createElement('input');
color.type = "color";
color.required = true;
form.appendChild(color);

// Crear el botón de envío
const submitButton = document.createElement("button");
submitButton.type = "button"; // Cambié el tipo a "button" para evitar que recargue la página
submitButton.textContent = "Guardar";
form.appendChild(submitButton);

// Agregar el formulario al contenedor
container.appendChild(form);
document.body.appendChild(container);

// Crear el contenedor para las tarjetas
const cardContainer = document.createElement("div");
cardContainer.style.marginTop = "20px";
document.body.appendChild(cardContainer);

// Función para crear y mostrar tarjetas
function crearTarjeta(nombre, ocupacion, color) {
    // Crear el div de la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.style.backgroundColor = color;
    tarjeta.style.padding = "15px";
    tarjeta.style.margin = "10px 0";
    tarjeta.style.borderRadius = "8px";
    tarjeta.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";

    // Crear y agregar el nombre
    const nombreElemento = document.createElement("p");
    nombreElemento.textContent = `Nombre: ${nombre}`;
    tarjeta.appendChild(nombreElemento);

    // Crear y agregar la ocupación
    const ocupacionElemento = document.createElement("p");
    ocupacionElemento.textContent = `Ocupación: ${ocupacion}`;
    tarjeta.appendChild(ocupacionElemento);

    // Crear el botón de eliminar
    const eliminarBoton = document.createElement("button");
    eliminarBoton.textContent = "Eliminar";
    eliminarBoton.style.marginTop = "10px";
    eliminarBoton.style.padding = "5px 10px";
    eliminarBoton.style.cursor = "pointer";
    eliminarBoton.onclick = function() {
        // Eliminar la tarjeta cuando se haga clic
        cardContainer.removeChild(tarjeta);
    };

    // Agregar el botón de eliminar a la tarjeta
    tarjeta.appendChild(eliminarBoton);

    // Agregar la tarjeta al contenedor de tarjetas
    cardContainer.appendChild(tarjeta);
}

// Manejo del evento de clic en el botón "Guardar"
submitButton.addEventListener("click", function () {
    const nombre = usernameInput.value;
    const ocupacion = passwordInput.value;
    const colorSeleccionado = color.value;

    if (nombre && ocupacion && colorSeleccionado) {
        // Crear la tarjeta con los datos del formulario
        crearTarjeta(nombre, ocupacion, colorSeleccionado);

        // Limpiar los campos del formulario
        usernameInput.value = "";
        passwordInput.value = "";
        color.value = "#000000"; // Restablecer el color a su valor por defecto
    } else {
        alert("Por favor, complete todos los campos.");
    }
});
