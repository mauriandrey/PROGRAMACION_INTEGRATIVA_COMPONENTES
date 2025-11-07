class CapturaDatosPersona extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <fieldset>
                <input type="text" id="txt_apellidos" placeholder="INGRESE SUS APELLIDOS">
                <input type="text" id="txt_nombres" placeholder="INGRESE SUS NOMBRES">
                <input type="number" id="txt_edad" placeholder="INGRESE SU EDAD">

                <label for="opcion">Selecciona tu genero:</label>
                <select id="opcion">
                    <option value="">-- Selecciona --</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="nada">Prefiero no decirlo</option>
                </select>

                <button type="button" id="btn_enviar">ENVIAR</button>
                <p id="txt_resultado"></p>
            </fieldset>
        `;

        let nombres = this.querySelector('#txt_nombres');
        let apellidos = this.querySelector('#txt_apellidos');
        let edad = this.querySelector('#txt_edad');
        let genero = this.querySelector('#opcion');
        let btn_enviar = this.querySelector('#btn_enviar');
        let resultado = this.querySelector('#txt_resultado');

        btn_enviar.addEventListener('click', function () {
            let edadNum = parseInt(edad.value);

            let r_edad = edadNum >= 18 ? 'SOY MAYOR DE EDAD' : 'SOY MENOR DE EDAD';
            let r_genero = genero.value === 'masculino' 
                ? 'HOMBRE' 
                : genero.value === 'femenino' 
                    ? 'MUJER' 
                    : genero.value === 'nada' 
                        ? 'prefiero no decirlo' 
                        : 'género no seleccionado';

            resultado.textContent = `HOLA, SOY ${nombres.value} ${apellidos.value}, TENGO ${edad.value} AÑOS, ${r_edad} Y SOY ${r_genero}.`;
        });
    }
}

customElements.define('capturar-datos', CapturaDatosPersona);
