//javascrip de la seccion del perfil de usuario

function mostrarAlerta() {
    Swal.fire({
        title: '¡Atención!',
        text: 'Solo permiso del administrador',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        background: '#fff',
        customClass: {
            title: 'swal-title',
            content: 'swal-content',
            confirmButton: 'swal-button'
        }
    });
}

//escript para mi formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (event) {
    const name = document.getElementById("contact_nom").value.trim();
    const email = document.getElementById("contact_email").value.trim();
    const subject = document.getElementById("contact_sujet").value.trim();
    const message = document.getElementById("contact_message").value.trim();

    // Verificar si todos los campos están llenos
    if (!name || !email || !subject || !message) {
        alert("Por favor, complete todos los campos.");
        event.preventDefault(); // Evitar envío
        return;
    }

    // Validar el formato del correo electrónico (contiene '@')
    if (!email.includes("@") || email.indexOf('@') === 0 || email.indexOf('@') === email.length - 1) {
        alert("Por favor, ingrese un correo electrónico válido con el símbolo '@'.");
        event.preventDefault(); // Evitar envío
    }
});


//LISTA DESPLEGABLE DEL FORMULARIO DE CONTACTO
document.getElementById('contacto_alternativo').addEventListener('click', function () {
    var contactForm = document.getElementById('contact');
    contactForm.classList.toggle('active');  // Alterna la clase "active"
});

