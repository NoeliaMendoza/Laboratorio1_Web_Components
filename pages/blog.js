class MiBlog extends HTMLElement {
    constructor() {
        super();
        // Crea shadow DOM
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Renderiza el contenido del blog
        this.shadowRoot.innerHTML = `
        <style>
        .blog-header {
                text-align: center;
                padding: 2rem;
                border-bottom: 1px solid #ccc;
            }

            .blog-header h2 {
                color: #011e05;
                margin: 0;
            }

            .blog-container {
                padding: 2rem;
                max-width: 1000px;
                margin: 0 auto;
            }

            .categoria-titulo {
                color: #011e05;
                border-bottom: 2px solid #4a7c59;
                padding-bottom: 6px;
                margin: 2rem 0 1rem;
            }

            .categoria-articulos {
                display: flex;
                flex-wrap: wrap;
                gap: 1rem;
            }

            .articulo {
                display: flex;
                align-items: center;
                gap: 1rem;
                flex: 1 1 350px;
                background: white;
                border-radius: 12px;
                padding: 1rem;
            }

            .articulo img {
                width: 100px;
                height: 80px;
                border-radius: 10px;
                object-fit: cover;
                flex-shrink: 0;
            }

            .articulo h3 {
                margin: 0 0 5px;
                color: #011e05;
                font-size: 0.95rem;
            }

            .articulo p {
                margin: 0 0 8px;
                font-size: 0.85rem;
                color: #555;
                line-height: 1.5;
            }

            .ver-mas {
                display: inline-block;
                font-size: 0.8rem;
                color: #4a7c59;
                font-weight: bold;
                text-decoration: none;
            }

            .ver-mas:hover {
                text-decoration: underline;
            }
        </style>
        
        <div class="blog-header">
            <h2>Blog de Ecuador</h2>
        </div>

        <div class="blog-container">
            <h3 class="categoria-titulo">Clima</h3>
            <div class="categoria-articulos">
                <div class="articulo">
                    <img
                        src="https://intriper.com/wp-content/uploads/2021/07/lugares-para-conocer-en-la-sierra-ecuatoriana-1024x576.jpg"
                        alt="Sierra"
                    />
                    <div>
                        <h3>¿Cuándo visitar la Sierra?</h3>
                        <p>La mejor época para evitar lluvias y disfrutar los volcanes andinos.</p>
                        <a class="ver-mas" href="#">Ver más </a>
                    </div>
                </div>
                <div class="articulo">
                    <img
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8dBiIZyI-rkmsgWhiQj1JdXAzLT7wLjz8Cy4oLN2O_Dn2tTfL-sH0j32DAIE0aISxo5DLUUGx4S0MQ0TIfzeXAOtioFmJV9ctReCjAmmxFz44WlgUqNbaxt68Lg3LIQxmHp8In5MQvSCf/s1600/la+region+costa+de+ecuador.jpg"
                        alt="Costa"
                    />
                    <div>
                        <h3>El clima de la Costa</h3>
                        <p>Temporadas secas y lluviosas en las playas del Pacífico.</p>
                        <a class="ver-mas" href="#">Ver más </a>
                    </div>
                </div>
            </div>

            <h3 class="categoria-titulo">Fauna y Flora</h3>
            <div class="categoria-articulos">
                <div class="articulo">
                    <img
                        src="https://www.metropolitan-touring.com/wp-content/uploads/2023/04/galapagos-islands-ecuador-1.webp"
                        alt="Galápagos"
                    />
                    <div>
                        <h3>Animales únicos de Galápagos</h3>
                        <p>Tortugas gigantes, iguanas marinas y pingüinos únicos en el mundo.</p>
                        <a class="ver-mas" href="#">Ver más</a>
                    </div>
                </div>
                <div class="articulo">
                    <img
                        src="https://naturegalapagos.com/es/wp-content/uploads/sites/3/2016/06/sani-lodge-yasuni-531x354.jpg"
                        alt="Amazonía"
                    />
                    <div>
                        <h3>Aves de la Amazonía</h3>
                        <p>Ecuador tiene más de 1.600 especies de aves registradas.</p>
                        <a class="ver-mas" href="#">Ver más</a>
                    </div>
                </div>
            </div>

            <h3 class="categoria-titulo">Gastronomía</h3>
            <div class="categoria-articulos">
                <div class="articulo">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/CEVICHE_DE_CAMAR%C3%93N_ECUATORIANO.jpg/330px-CEVICHE_DE_CAMAR%C3%93N_ECUATORIANO.jpg"
                        alt="Ceviche"
                    />
                    <div>
                        <h3>El ceviche ecuatoriano</h3>
                        <p>
                            Se sirve con jugo de naranja y chifles, muy diferente al estilo peruano.
                        </p>
                        <a class="ver-mas" href="#">Ver más</a>
                    </div>
                </div>
                <div class="articulo">
                    <img
                        src="https://www.laylita.com/recetas/wp-content/uploads/2008/05/Llapingachos-o-yapingachos-ecuatorianos.jpg"
                        alt="Llapingachos"
                    />
                    <div>
                        <h3>Llapingachos serranos</h3>
                        <p>Tortillas de papa con queso, típicas de la región andina ecuatoriana.</p>
                        <a class="ver-mas" href="#">Ver más</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

// Define el componente personalizado
customElements.define('mi-blog', MiBlog);
