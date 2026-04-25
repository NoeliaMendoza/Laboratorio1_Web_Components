class MiFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // Renderiza el footer al insertarse en el DOM
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            footer {
            background: #011e05;
            color: white;
            padding: 15px;
            text-align: center;
            margin-top: 15px;
            }
        </style>

        <footer>
            <p>ExploraEC - Todos los derechos reservados</p>
            <p>Desarrollado por Noelia Mendoza · ESPE</p>
        </footer>
    `;
    }
}

// Define el componente personalizado
customElements.define('mi-footer', MiFooter);
