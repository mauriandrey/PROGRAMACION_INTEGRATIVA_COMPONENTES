
export class DespedidadPorDia extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode:'open'});
        const var_dia = this.getAttribute('dia');
        const var_hora = this.getAttribute('hora');
        shadow.innerHTML =
        `
        <h2> Adios nos vemos el dia ${var_dia} a las ${var_hora} </h2>
        `
        ;
    }
}

customElements.define('despedida-dia',DespedidadPorDia);