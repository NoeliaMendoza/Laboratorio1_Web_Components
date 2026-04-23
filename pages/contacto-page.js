class ContactoPage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
     <style>
      .container {
            display: flex; 
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            border: 2px solid rgb(1, 82, 74);
            padding: 3rem;
            border-radius: 20px;
        }

        input[type="text"], input[type="email"], textarea{
            padding: 10px;
            border-color: rgb(25, 142, 79);
        }

        button{
            background-color: rgb(25, 142, 79) ;
            padding: 10px;

        }
     </style>
      <div>
        <div class="container">
          <form action="contacto.php" method="post">
              <h2>Contactanos </h2>
              <label for="nombre">Nombre</label>
              <input type="text" id="nombre" name="nombre" required>

              <label for="apellido">Apellido</label>
              <input type="text" id="apellido" name="apellido" required>

              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required>

              <label for="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows="4" cols="50"></textarea>

              <button type="submit">Enviar</button>
          </form>
       </div>
    
    `;
  }

}
customElements.define('contacto-page', ContactoPage);
