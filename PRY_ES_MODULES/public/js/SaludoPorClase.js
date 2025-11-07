export class SaludoPorClase extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = 
        `
        <h1>Hola mundo</h1>
        `
        ;
    }
}

customElements.define('saludo-clase', SaludoPorClase);