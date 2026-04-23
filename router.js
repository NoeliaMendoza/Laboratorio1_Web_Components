const router = () => {
    const app = document.getElementById("app");
    const path = window.location.hash;

    switch (path) {
        case "#/galeria-imagenes":
            app.innerHTML = `<galeria-imagenes></galeria-imagenes>`;
            break;
        case "#/mi-direction":
            app.innerHTML = `<mi-direction></mi-direction>`;
            break;
        case "#/contacto-page":
            app.innerHTML = `<contacto-page></contacto-page>`;
            break;
        default:
            app.innerHTML = `<mi-home></mi-home>`;
            break;
    }
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);