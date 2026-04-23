class MiDirection extends HTMLElement {
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
          h1 {
              margin-top: 20px;
          }

          p {
              color: #555;
          }

          .container {
              margin-top: 30px;
          }

          img {
              width: 100%;
              max-width: 900px;
              border-radius: 12px;
              box-shadow: 0 8px 20px rgba(0,0,0,0.2);
              transition: transform 0.3s ease;
          }
          
          .box{
            text-align: center;
            justify-content: center;
          }

        </style>
        <div class="box">
          <h1>Paisajes de Ecuador</h1>
          <p>Explora los diferentes paisajes del país</p>

          <div class="container">
              <img src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/f8efc6a5e36363e0cb26303552cd4d14/thumb_1200_825.png" alt="Paisaje de Ecuador">
          </div>
        </div>
    `;
  }
}
customElements.define("mi-direction", MiDirection);