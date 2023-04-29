let arrayContactos = [];

// Aqui agregamos un nuevo contacto dependiendo de que haya en los input
function agregarContacto() {
  // Obtenemos los valores de los campos del formulario
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;

  // Creamos un objeto contacto con los valores
  let informacion = {
    nombre: nombre,
    correo: email,
    tel: telefono
  };

  // Agregamos el objeto informacion al array de arrayContactos
  arrayContactos.push(informacion);


  // Creamos un nuevo elemento li con los valores del contacto y lo agregamos a la lista
  let lista = document.getElementById("lista-contactos");
  let nuevoElemento = document.createElement("li");
  nuevoElemento.innerHTML = "<strong>" + nombre + "</strong><br><br>✉️: " + email + "<br><br>📞: " + telefono + "<br><br><button id='btnEliminar' onclick='eliminarContacto(" + (arrayContactos.length-1) + ")'>Eliminar</button>";
  lista.appendChild(nuevoElemento);
}

// Función para eliminar un contacto
function eliminarContacto(indice) {
  // Eliminamos el contacto del array
  arrayContactos.splice(indice, 1);

  // Eliminamos el elemento de la lista
  let lista = document.getElementById("lista-contactos");
  lista.removeChild(lista.childNodes[indice]);
}
