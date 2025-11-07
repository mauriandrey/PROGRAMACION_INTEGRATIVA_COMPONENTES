export class DespedidaPorClase extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = 
        `
        <h1>Adios mundo</h1>
        `
        ;
    }
}

customElements.define('despedida-clase', DespedidaPorClase);