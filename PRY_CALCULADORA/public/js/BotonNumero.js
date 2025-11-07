export class BotonNumero extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const valor = this.getAttribute('valor') || '0';
        shadow.innerHTML = `
            <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">
            <button class="btn btn-danger w-100" data-valor="${valor}">
               <strong> ${valor} </strong>
            </button>
        `;

        // Reenviar evento personalizado al componente padre (Calculadora)
        const btn = shadow.querySelector('button');
        btn.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('numero-click', {
                detail: valor, //informacion que se envía al padre
                bubbles: true, // permite que suba hasta el shadowRoot del padre
                composed: true // permite que salga del shadowRoot del hijo
            }));
        });
    }
}

customElements.define('boton-numero', BotonNumero);