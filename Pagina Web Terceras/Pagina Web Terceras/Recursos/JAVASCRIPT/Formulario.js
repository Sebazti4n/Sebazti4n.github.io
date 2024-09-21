function enviarFormulario() {
    // Obtener el nombre del usuario
    const nombre = document.getElementById('nombre').value;
    
    // Mostrar el mensaje de formulario enviado
    document.getElementById('nombre-enviado').textContent = nombre;
    document.getElementById('mensaje-enviado').style.display = 'block';
    
    // Evitar que el formulario se envíe realmente
    return false;
}