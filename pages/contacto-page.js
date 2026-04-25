class ContactoPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // Método que se ejecuta cuando el elemento se conecta al DOM
    connectedCallback() {
        this.shadowRoot.innerHTML = `
       <style>
            html {
                height: 100%;
                margin: 0;
            }

            body {
                font-family: Arial, sans-serif;
                height: 100%;
                margin: 0;
                background-color: #f5f0e8;
                display: flex;
                flex-direction: column;
            }

            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2rem;
            }

            .contact-wrapper {
                display: flex;
                flex-wrap: wrap;
                width: 100%;
                max-width: 850px;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
            }

            .contact {
                background-color: #283C23;
                color: white;
                padding: 3rem;
                flex: 1 1 260px;
            }

            .contact h2 {
                margin-top: 0;
                font-size: 1.4rem;
            }

            .contact h3 {
                margin: 1rem 0 0.2rem;
                font-size: 0.85rem;
                opacity: 0.7;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .contact p {
                margin: 0;
                font-size: 0.95rem;
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 3rem;
                flex: 1 1 300px;
                background: white;
                box-sizing: border-box;
            }

            form h2 {
                margin-top: 0;
            }

            label {
                font-size: 0.9rem;
                color: #242d1c;
                font-weight: bold;
            }

            input[type='text'],
            input[type='email'],
            textarea {
                padding: 10px;
                border: 1px solid #011e05;
                border-radius: 8px;
                font-size: 0.95rem;
                width: 100%;
                box-sizing: border-box;
            }

            textarea {
                resize: vertical;
            }

            button {
                background-color: #263d2d;
                padding: 12px;
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 1rem;
                cursor: pointer;
                margin-top: 5px;
            }

            button:hover {
                background-color: #011e05;
            }
      </style>
      <div class="container">
            <div class="contact-wrapper">
                <!-- Panel izquierdo -->
                <div class="contact">
                    <h2>Contáctanos</h2>

                    <h3>Ubicación</h3>
                    <p>Quito, Ecuador</p>

                    <h3>Correo electrónico</h3>
                    <p>contacto@exploraec.com</p>

                    <h3>Teléfono</h3>
                    <p>+593 99 123 4567</p>

                    <h3>Sitio web</h3>
                    <p>www.exploraec.com</p>

                    <h3>Instagram</h3>
                    <p>@exploraec</p>
                </div>

                <!-- Panel derecho -->
                <form action="contacto.php" method="post">
                    <h2>Envía tu mensaje</h2>

                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" required />

                    <label for="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" required />

                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label for="mensaje">Mensaje</label>
                    <textarea id="mensaje" name="mensaje" rows="4"></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    
    `;
    }
}

// Registra el elemento personalizado para que se pueda usar en HTML
customElements.define('contacto-page', ContactoPage);
