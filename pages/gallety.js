class GaleriaImagenes extends HTMLElement {
    constructor() {
        super();
        // Crea shadow DOM
        this.attachShadow({ mode: 'open' });
    }

    // Agregar los elementos al DOM
    connectedCallback() {
        // Define los datos de las imágenes de la galería
        const elementos = [
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Panorama_quilotoa_crater_lake_ecuador.jpg/960px-Panorama_quilotoa_crater_lake_ecuador.jpg',
                titulo: 'Laguna Quilotoa',
                description: 'Laguna volcánica de aguas verdes en la Sierra ecuatoriana.',
            },
            {
                src: 'https://naturegalapagos.com/es/wp-content/uploads/sites/3/2019/05/monta%C3%B1ita-1024x530.jpg',
                titulo: 'Montañita',
                description: 'Playa paradisíaca en la Costa, famosa por el surf y sus atardeceres.',
            },
            {
                src: 'https://naturegalapagos.com/es/wp-content/uploads/sites/3/2019/12/2b11a4939514c04a418c02fefaa38b03_lg.jpg.webp',
                titulo: 'Amazonía Ecuatoriana',
                description: 'Selva tropical con la mayor biodiversidad del planeta.',
            },
            {
                src: 'https://www.infobae.com/resizer/v2/B5NNZFJ5J5EPPH5RCDEUVHHJHA?auth=197468950111e15ab526bba57f15114be2ff9ab73948a88912f63697835adcdd&smart=true&width=577&height=325&quality=85',
                titulo: 'Islas Galápagos',
                description: 'Archipiélago único, hogar de especies que inspiraron a Darwin.',
            },
            {
                src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/V%C3%B3lcan_Cotopaxi.jpg/960px-V%C3%B3lcan_Cotopaxi.jpg',
                titulo: 'Volcán Cotopaxi',
                description: 'Uno de los volcanes activos más altos del mundo.',
            },
            {
                src: 'https://turismo.encolombia.com/wp-content/uploads/2012/12/Paisaje-Quito-Ecuador.jpeg',
                titulo: 'Ciudad de Quito',
                description: 'Capital del Ecuador, patrimonio cultural de la humanidad.',
            },
            {
                src: 'https://www.latamairlines.com/content/dam/latamxp/sites/vamos-latam/news-ecuador-2023/destino/Img1_Ba%C3%B1os.png',
                titulo: 'Baños de Agua Santa',
                description: 'Ciudad de aventura entre montañas, cascadas y aguas termales.',
            },
            {
                src: 'https://www.explorsierra.com/archivos/blogs/Otavalo.jpg',
                titulo: 'Mercado de Otavalo',
                description: 'El mercado artesanal indígena más famoso de América del Sur.',
            },
            {
                src: 'https://www.metropolitan-touring.com/wp-content/uploads/2022/09/inmaculada-concepcion-cathedral.jpg',
                titulo: 'Cuenca',
                description: 'Ciudad colonial con catedrales imponentes y ríos cristalinos.',
            },
            {
                src: 'https://www.metropolitan-touring.com/wp-content/uploads/2024/06/CUENCA-EL-CAJAS-NATIONAL-PARK-AND-GUAYAQUIL.webp',
                titulo: 'Parque Nacional Cajas',
                description: 'Lagunas de altura y páramos en los Andes ecuatorianos.',
            },
            {
                src: 'https://www.tourispasa.com/templates/yootheme/cache/a7/manta-1-a781aa99.webp',
                titulo: 'Manta',
                description: 'Puerto pesquero y destino de playa en la Costa ecuatoriana.',
            },
            {
                src: 'https://www.hosteriaandaluza.com/wp-content/uploads/2023/04/DDCC9E18-3FCA-43CD-851A-8E3BD41A309D.jpeg',
                titulo: 'Chimborazo',
                description: 'El punto más cercano al sol desde la superficie terrestre.',
            },
        ];

        this.shadowRoot.innerHTML = `
      <style>
        :host { /* Aplica estilos al propio componente */
          display: block;
          padding: 20px;
        }
        .galeria {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }
    
      </style>
      <h2>Paísajes de Ecuador</h2>
      <div class="galeria">
        ${elementos
            .map(
                (elemento) => `
          <mi-card
            src="${elemento.src}"
            titulo="${elemento.titulo}"
            description="${elemento.description}">
          </mi-card>
        `,
            )
            .join('')}
      </div>
    `;
    }
}

// Define el componente personalizado
customElements.define('galeria-imagenes', GaleriaImagenes);
