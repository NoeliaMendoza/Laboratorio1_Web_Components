class MiCard extends HTMLElement {
    constructor() {
        super();
        // Crea shadow DOM para encapsular estilos
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Obtiene los atributos del elemento
        const src = this.getAttribute('src');
        const titulo = this.getAttribute('titulo');
        const description = this.getAttribute('description');

        // Renderiza 
        this.shadowRoot.innerHTML = `
        <style>
            .card {
                background: white;
                border-radius: 24px;
                overflow: hidden;
                box-shadow: 0 8px 24px rgba(0,0,0,0.12);
                transition: all 0.3s ease;
                cursor: pointer;
                max-width: 450px;
                font-family: Arial, sans-serif;
            }

            .card:hover {
                transform: translateY(-8px) scale(1.02);
            }

            .img-wrapper {
                margin: 12px;
                border-radius: 16px;
                overflow: hidden;
            }

            .img-wrapper img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                display: block;
            }

            .content {
                padding: 0 16px 16px;
            }

            .content h3 {
                margin: 0 0 8px;
                font-size: 1.1rem;
                color: #111;
            }

            .content p {
                margin: 0 0 16px;
                font-size: 0.88rem;
                color: #555;
                line-height: 1.5;
            }

        </style>

        <div class="card">
            <!-- imagen flotante con bordes redondeados dentro del card -->
            <div class="img-wrapper">
                <img src="${src}" alt="${titulo}">
            </div>

            <div class="content">
                <h3>${titulo}</h3>
                <p>${description}</p>
            </div>
        </div>
        `;
    }
}

// Define el componente personalizado
customElements.define('mi-card', MiCard);
