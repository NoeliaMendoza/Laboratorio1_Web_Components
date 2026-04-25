// Función que maneja la navegación 
const router = () => {
    const app = document.getElementById('app');
    // Obtiene el hash actual de la URL
    const path = window.location.hash;

    // Según el hash, cambia el contenido del app
    switch (path) {
        case '#/galeria-imagenes':
            app.innerHTML = `<galeria-imagenes></galeria-imagenes>`;
            break;
        case '#/mi-direction':
            app.innerHTML = `<mi-direction></mi-direction>`;
            break;
        case '#/contacto-page':
            app.innerHTML = `<contacto-page></contacto-page>`;
            break;
        case '#/blog':
            app.innerHTML = `<mi-blog></mi-blog>`;
            break;
        default:
            app.innerHTML = `<mi-home></mi-home>`;
            break;
    }
};

// Escucha cambios en el hash para actualizar la página
window.addEventListener('hashchange', router);
//ejecuta al cargar la página
window.addEventListener('load', router);
