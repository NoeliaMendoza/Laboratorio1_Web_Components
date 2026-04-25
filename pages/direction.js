class MiDirection extends HTMLElement {
    constructor() {
        super();
        // Crea shadow DOM
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            h2 {
                padding: 0 2rem;
                color: #5f6460;
            }

            .secciones {
                display: flex;
                flex-wrap: wrap;
            }

            .section1 {
                display: flex;
                flex-wrap: wrap;
                padding: 0 2rem;
                gap: 20px;
                flex: 1 1 400px;
            }

            .section1 div {
                border: 2px solid #072c0b;
                border-radius: 20px;
                padding: 15px;
                flex: 1 1 200px;
                color: #233b25; 
            }

            .section1 div:hover {
                transform: translateY(-3px);
                transition: transform 0.2s;
                background-color: #254028;
                color: white; 
            }

            .section2 {
                display: flex;
                flex: 1 1 300px;
                justify-content: center;
                align-items: center;
            }

            .section2 img {
                width: 100%;
            }

            .section1 h3 {
                margin-top: 0;
            }

            .section1 li {
                padding: 1px;
            }
        </style>

        <div class="container">
            <h2>Lista de lugares que puedes visitar</h2>
            <div class="secciones">
                <article class="section1">
                    <div>
                        <h3>Sierra</h3>
                        <ul>
                            <li>Quilotoa - Laguna volcánica de aguas verdes</li>
                            <li>Cotopaxi - Volcán activo más alto del mundo</li>
                            <li>Baños - Ciudad de aventura y aguas termales</li>
                            <li>Quito - Capital, patrimonio de la humanidad</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Costa</h3>
                        <ul>
                            <li>Montañita - Playa famosa por el surf y los atardeceres</li>
                            <li>Salinas - La playa más popular del Ecuador</li>
                            <li>Manta - Ciudad portuaria y gastronómica</li>
                            <li>Guayaquil - La ciudad más grande del país</li>
                            <li>Canoa - Playa tranquila ideal para descansar</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Amazonía</h3>
                        <ul>
                            <li>Tena - Puerta de entrada a la selva amazónica</li>
                            <li>Puyo - Naturaleza y biodiversidad únicas</li>
                            <li>Lago Agrio - Selva virgen y exploración</li>
                            <li>Macas - Ciudad rodeada de naturaleza amazónica</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Galápagos</h3>
                        <ul>
                            <li>Puerto Ayora - Centro turístico principal</li>
                            <li>Isla Bartolomé - Paisajes volcánicos y pingüinos</li>
                            <li>Isla Española - Colonia de albatros y piqueros</li>
                            <li>San Cristóbal - Primera isla colonizada</li>
                        </ul>
                    </div>
                </article>

                <div class="section2">
                    <img
                        src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/f8efc6a5e36363e0cb26303552cd4d14/thumb_1200_825.png"
                        alt="Mapa turístico de Ecuador"
                    />
                </div>
            </div>
        </div>
        `;
    }
}

// Define el componente personalizado
customElements.define('mi-direction', MiDirection);
