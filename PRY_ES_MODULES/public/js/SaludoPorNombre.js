
export class SaludoPorNombre extends HTMLElement{
    constructor(){
        super()

        const shadow = this.attachShadow({mode:'open'});

        const var_nombres = this.getAttribute('nombres');
        const var_apellidos = this.getAttribute('apellidos');
        shadow.innerHTML =
        `
        <h2> Hola ${var_nombres} ${var_apellidos} BUENAS NOCHES!</h2>
        `
        ;
    }
}

customElements.define('saludo-nombre',SaludoPorNombre);