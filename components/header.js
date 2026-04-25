class MiHeader extends HTMLElement {
    constructor() {
        super();
        // Crea un shadow DOM para encapsular los estilos
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
       <style>
            header {
                background: #011e05;
                color: white;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 15px;
                flex-wrap: wrap;
            }

            nav {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin: 10px;
            }

            nav a {
                color: white;
                margin: 5px;
                text-decoration: none;
                font-weight: bold;
                border: 1px solid white;
                border-radius: 25px;
                padding: 10px 15px;
                font-size: small;
            }

            nav a:hover {
                text-decoration: underline;
                background-color: white;
                color: #011e05;
            }

            h1 {
                font-size: 25px;
            }
        </style>

        <header>
            <h1>ExploraEC</h1>
            <nav>
                <a href="/">Inicio</a>
                <a href="#/galeria-imagenes">Galería</a>
                <a href="#/mi-direction">Lugares</a>
                <a href="#/contacto-page">Contacto</a>
                <a href="#/blog">Blog</a>
            </nav>
        </header>
    `;
    }
}

// Define el componente personalizado
customElements.define('mi-header', MiHeader);
