class MiFooter extends HTMLElement {
    constructor() {
    super();
    //indicando una funcion
    this.attachShadow({ mode: "open" });
  }
    //agregar los elementos al dom
    connectedCallback() {
    //   sirve para insertar datos al dom
    this.shadowRoot.innerHTML = `
        <style>
            footer {
                background: #000;
                color: white;
                padding: 15px;
                text-aling: center; 
                margin-top: 15px;
            }
        </style>
        <footer>
            <p>
                Todos los derechos reservados - ESPE
            </p>
        </footer>
    `;
  }
}
customElements.define("mi-footer", MiFooter);