// Seleccionamos los elementos clave
const formulario = document.getElementById('formulario-pedido');
const divError = document.getElementById('mensaje-error');
const divExito = document.getElementById('mensaje-exito');
const btnNuevoPedido = document.getElementById('btn-nuevo-pedido');

formulario.addEventListener('submit', function(evento) {
    // Evitamos que la página se recargue
    evento.preventDefault();
    
    // Obtenemos los valores
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    
    // Validación 1: El teléfono debe tener exactamente 10 dígitos
    if (telefono.length !== 10) {
        divError.style.display = 'block';
        divError.textContent = 'Error: El número de celular debe tener exactamente 10 dígitos.';
        return; 
    }
    
    // Validación 2: La fecha no puede ser en el pasado
    const fechaSeleccionada = new Date(fecha);
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0); 
    fechaSeleccionada.setMinutes(fechaSeleccionada.getMinutes() + fechaSeleccionada.getTimezoneOffset());

    if (fechaSeleccionada < fechaActual) {
        divError.style.display = 'block';
        divError.textContent = 'Error: No puedes seleccionar una fecha de recogida en el pasado.';
        return;
    }
    
    // Si llegamos aquí, ¡todo está perfecto!
    divError.style.display = 'none'; // Ocultamos errores si los había
    
    // LA MAGIA: Ocultamos el formulario y mostramos el cuadro de éxito
    formulario.style.display = 'none';
    divExito.style.display = 'block';
    
    // Limpiamos los campos del formulario internamente
    formulario.reset();
});

// Botón para volver a pedir
btnNuevoPedido.addEventListener('click', function() {
    // Ocultamos el mensaje de éxito y volvemos a mostrar el formulario vacío
    divExito.style.display = 'none';
    formulario.style.display = 'block';
});