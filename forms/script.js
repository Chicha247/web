const menuItems = document.querySelectorAll('.menu-item');
const contentSections = document.querySelectorAll('.content-section');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        contentSections.forEach(section => section.style.display = 'none');
        const target = item.dataset.target;
        document.getElementById(target).style.display = 'block';
    });
});

function buscar() {
    // Obtener el término de búsqueda
    var termino = document.getElementById("busqueda").value.toLowerCase();

    // Buscar el término en las secciones de contenido
    var secciones = document.getElementsByClassName("content-section");
    for (var i = 0; i < secciones.length; i++) {
        var seccion = secciones[i];
        if (seccion.textContent.toLowerCase().includes(termino)) {
            seccion.style.display = "block";
        } else {
            seccion.style.display = "none";
        }
    }

    // Evitar que el formulario se envíe
    return false;
}