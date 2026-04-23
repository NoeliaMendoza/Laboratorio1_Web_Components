class GaleriaImagenes extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  // Agregar los elementos al DOM
  connectedCallback() {
    const elementos = [
      {
        src: "https://blogdestinia.com/wp-content/uploads/2019/06/parque-nacional-banff.jpg",
        titulo: "Paisaje",
        description: "Paisaje de Montañas"
      },
      {
        src: "https://wallpapers.com/images/featured/imagenes-de-paisaje-dhxa2vbdljs0t8t0.jpg",
        titulo: "Paisaje",
        description: "Paisaje de Montañas con flores"
      },
      {
        src: "https://i.pinimg.com/originals/39/2f/67/392f67061e75742d3ac10f73b2656e75.jpg",
        titulo: "Paisaje",
        description: "Paisaje de Montañas"
      },
      {
        src: "https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-bonitos-del-mundo-pamukkale-1.jpg",
        titulo: "Paisaje",
        description: "Paisaje de Montañas con flores"
      },
      {
        src: "https://www.tipos.co/wp-content/uploads/2015/02/La-sabana-es-un-paisaje-e1423246438873.jpg",
        titulo: "Paisaje",
        description: "Paisaje de Montañas con flores"
      },
      {
        src: "https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-bonitos-del-mundo-polinesia-1.jpg",
        titulo: "Paisaje",
        description: "Paisaje de Montañas con flores"
      },
      {
        src: "https://wallpapers.com/images/featured/imagenes-de-paisaje-dhxa2vbdljs0t8t0.jpg",
        titulo: "Paisaje",
        description: "Paisaje de Montañas con flores"
      },
      {
        src: "https://wallpapers.com/images/featured/imagenes-de-paisaje-dhxa2vbdljs0t8t0.jpg",
        titulo: "Paisaje",
        description: "Paisaje de Montañas con flores"
      }
      
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
      <div class="galeria">
        ${elementos.map((elemento) => `
          <mi-card
            src="${elemento.src}"
            titulo="${elemento.titulo}"
            description="${elemento.description}">
          </mi-card>
        `).join("")}
      </div>
    `;
  }
  
}

customElements.define("galeria-imagenes", GaleriaImagenes);