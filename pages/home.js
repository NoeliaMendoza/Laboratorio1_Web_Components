class MiHome extends HTMLElement {
    constructor() {
        super();
        // Crea shadow DOM
        this.attachShadow({ mode: 'open' });
    }
    // Agrega los elementos al DOM
    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            .container-images {
                display: grid;
                grid-template-columns: 1fr;
                gap: 20px;
                grid-template-areas:
                    'text'
                    'imag1'
                    'imag2'
                    'imag3'
                    'imag4'
                    'button';
                padding: 3rem;
            }
            .c-text {
                grid-area: text;
            }
            .c-img1 {
                grid-area: imag1;
            }
            .c-img2 {
                grid-area: imag2;
            }
            .c-img3 {
                grid-area: imag3;
            }
            .c-img4 {
                grid-area: imag4;
            }
            .c-button {
                grid-area: button;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .card {
                width: 100%;
                height: 100%;
                overflow: hidden;
            }

            .card img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 20px;
            }

            button {
                background-color: #011e05;
                color: white;
                border: none;
                font-size: 1rem;
                cursor: pointer;
                margin-top: 5px;
                padding: 15px 25%;
                border-radius: 25px;
            }

            button:hover {
                background-color: white;
                color: #011e05;
                border: 1px solid #011e05 ;
            }

            /* Nota: Flexbox sí permite hacer diseños responsive,
            pero no es la mejor opción para crear cuadrículas 
            con elementos de diferentes tamaños ;(*/
            /* Tablet */
            @media (min-width: 640px) {
                .container-images {
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: 150px 150px 100px 80px;
                    padding: 2rem;
                    grid-template-areas:
                        'text   text'
                        'imag1  imag2'
                        'imag1  imag3'
                        'imag4  imag4'
                        'button button';
                }
            }

            /* Desktop */
            @media (min-width: 1024px) {
                .container-images {
                    grid-template-columns: repeat(3, 1fr);
                    grid-auto-rows: minmax(150px, auto);
                    padding: 4rem;
                    grid-template-areas:
                        'text  imag2 imag4'
                        'imag1 imag2 imag4'
                        'imag1 imag3 imag4'
                        'imag1 imag3 button';
                }
            }

            /*Seccion 2*/
            .section-2 {
                display: flex;
                flex-wrap: wrap;
                align-items: stretch;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
                margin: 0;
            }

            .section-2 .image-container {
                width: 700px;
                flex-shrink: 1;
            }

            .section-2 .content {
                flex: 1;
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
                padding: 2rem;
                font-size: small;
            }

            .section-2 img {
                width: 100%;
                height: 100%;
                min-height: 250px;
                object-fit: cover;
                display: block;
            }

            .region {
                border: 1px solid #001103;
                padding: 15px;
                border-radius: 15px;
            }
 
        </style>
        
      <div class="container-images">
            <div class="card c-text">
                <h1>ExploraEC</h1>
                <p>
                    Descubre la belleza de Ecuador a través de una colección única de fotografías
                    que capturan su diversidad natural, cultural y paisajística.
                </p>
            </div>
            <div class="card c-img1">
                <img
                    src="https://images.unsplash.com/photo-1580918860823-f0072f5a6719?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </div>
            <div class="card c-img2">
                <img
                    src="https://images.unsplash.com/photo-1501684691657-cf3012635478?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </div>
            <div class="card c-img3">
                <img
                    src="https://images.unsplash.com/photo-1566352081904-cfa7024f5d6a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                />
            </div>
            <div class="card c-img4">
                <img
                    src="https://images.unsplash.com/photo-1646302685343-3c1222253efd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVjdWFkb3J8ZW58MHx8MHx8fDA%3D"
                    alt=""
                />
            </div>
            <div class="card c-button"><button>Mira más imágenes</button></div>
        </div>

        <div class="section-2">
            <div class="image-container">
                <img
                    src="https://images.unsplash.com/photo-1580918860823-f0072f5a6719"
                    alt="Ecuador"
                />
            </div>

            <div class="content">
                <h2>Ecuador en cuatro paisajes</h2>
                <div class="region">
                    <h3>Sierra</h3>
                    <p>
                        La región de montañas, volcanes y paisajes fríos pero impresionantes. Aquí
                        se encuentran ciudades llenas de historia como Quito, y volcanes icónicos
                        como el Cotopaxi.
                    </p>
                </div>
                <div class="region">
                    <h3>Costa</h3>
                    <p>
                        El lado cálido y relajado del país. Playas, comida deliciosa y atardeceres
                        increíbles. Lugares como Montañita son conocidos por su ambiente turístico y
                        su conexión con el mar.
                    </p>
                </div>
                <div class="region">
                    <h3>Amazonía</h3>
                    <p>
                        Naturaleza en su máxima expresión. La selva del Amazonas es uno de los
                        lugares con mayor biodiversidad del planeta. Es perfecta para quienes buscan
                        aventura, animales únicos y una conexión real con la naturaleza.
                    </p>
                </div>
                <div class="region">
                    <h3>Galápagos</h3>
                    <p>
                        Un lugar único en el mundo: las Islas Galápagos. Aquí puedes ver especies
                        que no existen en ningún otro lugar. Este sitio inspiró a Charles Darwin en
                        sus estudios sobre la evolución.
                    </p>
                </div>
            </div>
        </div>
    `;
    }
}

// Define el componente personalizado
customElements.define('mi-home', MiHome);
