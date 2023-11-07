document.addEventListener("DOMContentLoaded", function () {
  const botonEnviar = document.getElementById("enviar");

  botonEnviar.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario

    // Puedes agregar aquí tu lógica para procesar los datos del formulario
    // Por ejemplo, obtener los valores de los campos de entrada
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const telefono = document.getElementById("n-telefono").value;
    const email = document.getElementById("email").value;

    // Aquí puedes realizar las acciones necesarias con los datos, como enviarlos a un servidor o mostrar un mensaje al usuario
    alert("Nombre: " + nombre + "\napellido"+ apellido + "\ntelefono"+ telefono +"\nEmail: " + email);
  });
});
