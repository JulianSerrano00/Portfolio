// Función para mostrar detalles del proyecto
function showProjectDetails(projectId) {
    var modal = document.getElementById('projectModal');
    var title = document.getElementById('projectTitle');
    var description = document.getElementById('projectDescription');

    if (projectId === 'proyecto1') {
        title.textContent = 'Proyecto 1';
        description.innerHTML = '<p>Descripción detallada del Proyecto 1.</p>';
    } else if (projectId === 'proyecto2') {
        title.textContent = 'Proyecto 2';
        description.innerHTML = '<p>Descripción detallada del Proyecto 2.</p>';
    }

    modal.style.display = 'block';
}

// Función para cerrar los detalles del proyecto
function closeProjectDetails() {
    var modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Cerrar modal haciendo clic fuera de
window.onclick = function(event) {
    var modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


