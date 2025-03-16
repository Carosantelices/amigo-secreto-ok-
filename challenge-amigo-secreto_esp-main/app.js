// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Elimina espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    // Validar que el nombre no se repita
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido ingresado. Por favor, agrega un nombre diferente.");
        return;
    }

    // Agregar el nombre al array y actualizar la lista
    amigos.push(nombre);
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista de nombres en el DOM
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar contenido previo

    amigos.forEach((amigo) => {
        const div = document.createElement("div");
        div.textContent = amigo;
        div.style.display = "inline-block";
        div.style.backgroundColor = "#FFA500";
        div.style.color = "#FFFFFF";
        div.style.padding = "10px 20px";
        div.style.margin = "10px";
        div.style.borderRadius = "10px";
        div.style.fontSize = "18px";
        div.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        lista.appendChild(div);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado previo

    // Validar que haya al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Crear contenedor del resultado con estilos personalizados
    const contenedorResultado = document.createElement("div");
    contenedorResultado.style.position = "fixed";
    contenedorResultado.style.top = "0";
    contenedorResultado.style.left = "0";
    contenedorResultado.style.width = "100vw";
    contenedorResultado.style.height = "100vh";
    contenedorResultado.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    contenedorResultado.style.display = "flex";
    contenedorResultado.style.flexDirection = "column";
    contenedorResultado.style.justifyContent = "center";
    contenedorResultado.style.alignItems = "center";
    contenedorResultado.style.zIndex = "1000";

    const mensaje = document.createElement("h3");
    mensaje.textContent = `🎉 Tu amigo secreto es: ${amigoSeleccionado} 🎉`;
    mensaje.style.color = "#FF4500";
    mensaje.style.fontSize = "36px";
    mensaje.style.marginBottom = "20px";

    contenedorResultado.appendChild(mensaje);

    // Botón Reiniciar
    const botonReiniciar = document.createElement("button");
    botonReiniciar.textContent = "Reiniciar Todo";
    botonReiniciar.style.backgroundColor = "#FF6347";
    botonReiniciar.style.color = "#fff";
    botonReiniciar.style.border = "none";
    botonReiniciar.style.borderRadius = "5px";
    botonReiniciar.style.padding = "15px 30px";
    botonReiniciar.style.margin = "10px";
    botonReiniciar.style.cursor = "pointer";
    botonReiniciar.style.fontSize = "18px";
    botonReiniciar.onclick = () => {
        amigos = [];
        actualizarListaAmigos();
        resultado.innerHTML = "";
    };
    contenedorResultado.appendChild(botonReiniciar);

    // Botón Volver a Sortear
    const botonSortear = document.createElement("button");
    botonSortear.textContent = "Votar Otra Vez";
    botonSortear.style.backgroundColor = "#32CD32";
    botonSortear.style.color = "#fff";
    botonSortear.style.border = "none";
    botonSortear.style.borderRadius = "5px";
    botonSortear.style.padding = "15px 30px";
    botonSortear.style.margin = "10px";
    botonSortear.style.cursor = "pointer";
    botonSortear.style.fontSize = "18px";
    botonSortear.onclick = sortearAmigo;
    contenedorResultado.appendChild(botonSortear);

    // Botón Cerrar
    const botonCerrar = document.createElement("button");
    botonCerrar.textContent = "Cerrar";
    botonCerrar.style.backgroundColor = "#1E90FF";
    botonCerrar.style.color = "#fff";
    botonCerrar.style.border = "none";
    botonCerrar.style.borderRadius = "5px";
    botonCerrar.style.padding = "15px 30px";
    botonCerrar.style.margin = "10px";
    botonCerrar.style.cursor = "pointer";
    botonCerrar.style.fontSize = "18px";
    botonCerrar.onclick = () => {
        resultado.innerHTML = "";
    };
    contenedorResultado.appendChild(botonCerrar);

    // Agregar el contenedor al DOM
    resultado.appendChild(contenedorResultado);
}
