class MiHome extends HTMLElement {
    constructor() {
    super();
    //indicando una funcion
    this.attachShadow({ mode: "open" });
  }
    //agregar los elementos al dom
    connectedCallback() {
    //sirve para insertar datos al dom
    this.shadowRoot.innerHTML = `
        <style>
            h1 {
                margin-top: 20px;
            }

            p {
                color: #555;
            }

            .container {
                padding: 3rem 1rem;
            }

            .container h3 {
                margin-bottom: 20px;
            }

            .container-card {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 25px;
                margin: auto;
            }

            .card {
                background: #fff;
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 5px 15px rgba(0,0,0,0.15);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
            }

            .card:hover {
                transform: translateY(-8px);
                box-shadow: 0 10px 25px rgba(0,0,0,0.25);
            }

            .card img {
                width: 100%;
                height: 300px;
                object-fit: cover;
            }

            .card-content {
                padding: 15px;
            }

            .card-content h4 {
                margin: 0;
                color: #333;
            }
        </style>
        
    <div class="container">
        <h1>Galería de Ecuador</h1>
        <p>Encuentra variedades de imágenes de Ecuador</p>

        <h3>Explora los paisajes más hermosos</h3>

        <div class="container-card">

            <div class="card">
                <img src="https://th.bing.com/th/id/R.7d72450ed8ab73411297591687a8a01b?rik=6tsohp4BqbskVw&pid=ImgRaw&r=0" alt="Paisaje de Ecuador 1">
                <div class="card-content">
                    <h4>Paisaje natural</h4>
                </div>
            </div>

            <div class="card">
                <img src="https://cdn.pixabay.com/photo/2015/05/13/15/33/nature-765655_1280.jpg" alt="Naturaleza Ecuador">
                <div class="card-content">
                    <h4>Naturaleza</h4>
                </div>
            </div>

            <div class="card">
                <img src="https://th.bing.com/th/id/R.54a91dee78447b557353293298ca6a0e?rik=YHSM%2foGq%2bJCVow&riu=http%3a%2f%2fhomelifestyle.es%2fwp-content%2fuploads%2f2016%2f10%2fEcuador-homelifestyle-magazine-paisaje.jpg&ehk=l5%2bXUfH4i5a2bIWhF%2b3ipp6dPVQJ%2bkWeftXUtLB3M3Q%3d&risl=&pid=ImgRaw&r=0" alt="Montañas Ecuador">
                <div class="card-content">
                    <h4>Montañas</h4>
                </div>
            </div>

        </div>
    </div>
        
    `;
  }
}
customElements.define("mi-home", MiHome);