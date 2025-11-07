// 1. crear una clase
class SaludarPersona extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    //metodo conected callback
    connectedCallback() {

        //capturar parametros
        let nombres = this.getAttribute("nombres");
        let apellidos = this.getAttribute("apellidos");
        let edad = parseInt(this.getAttribute("edad"));
        let r_edad = edad >= 18 ? 'SI' : 'NO';
        let genero = this.getAttribute("genero");
        let r_genero = genero == 'MASCULINO' ? 'HOMBRE' : 'MUJER';
        const tablaBody = document.querySelector("#tabla-personas tbody");

         if (tablaBody) {
            // Crear una fila nueva con los datos
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${nombres}</td>
                <td>${apellidos}</td>
                <td>${edad}</td>
                <td>${r_edad}</td>
                <td>${r_genero}</td>
            `;
            // Insertar la fila en la tabla
            tablaBody.appendChild(fila);
        }

        /*
        this.shadowRoot.innerHTML =
            `
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
            <table class="table table-striped-columns">
                <tr>
                    <th>NOMBRES</th>
                    <th>APELLIDOS</th>
                    <th>EDAD</th>
                    <th>ES MAYOR DE EDAD</th>
                    <th>GENERO</th>
                </tr>
                <tr>
                    <td>${nombres}</td>
                    <td>${apellidos}</td>
                    <td>${edad}</td>
                    <td>${r_edad}</td>
                    <td>${r_genero}</td>
                </tr>
            </table>
        `
            ;
            */
    }
            

}

// 2. Definir elemento
customElements.define('saludar-persona', SaludarPersona);
