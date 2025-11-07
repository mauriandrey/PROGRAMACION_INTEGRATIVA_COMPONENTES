class BotonOperacion extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        // Obtener el atributo "value" de la operación (+, -, *, /)
        // Ejem: <boton-operacion value="+"></boton-operacion>, value = "+"
        const value = this.getAttribute('value') || '?';

        shadow.innerHTML = `
            <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">
            <button class="btn btn-light w-100" data-value="${value}">
               <strong> ${value} </strong>
            </button>
        `;

        // Reenviar evento personalizado al componente padre (Calculadora)
        const btn = shadow.querySelector('button');
        btn.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('operacion-click', {
                detail: value, //informacion que se envía al padre
                bubbles: true, // permite que suba hasta el shadowRoot del padre
                composed: true // permite que salga del shadowRoot del hijo
            }));
        });
    }
}

customElements.define('boton-operacion', BotonOperacion);
