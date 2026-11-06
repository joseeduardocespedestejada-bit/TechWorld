
// FORMULARIO DE CONTACTO

const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    const resultado = document.getElementById("resultado");

    resultado.textContent = "¡Gracias " + nombre +
        "! Tu comentario ha sido recibido correctamente.";

    formulario.reset();

});
