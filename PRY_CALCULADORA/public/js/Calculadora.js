export class Calculadora extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        shadow.innerHTML = `
            <link rel="stylesheet" href="./public/vendor/bootstrap/css/bootstrap.min.css">
            <div class="card bg-dark">
                <div class="card-header">
                    <input 
                        type="text"
                        class="form-control form-lg"
                        autofocus
                        placeholder="Ingrese un numero"
                        id="txt_numero"
                        disabled
                    >
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-3"><boton-numero valor="1"></boton-numero></div>
                        <div class="col-sm-3"><boton-numero valor="2"></boton-numero></div>
                        <div class="col-sm-3"><boton-numero valor="3"></boton-numero></div>
                        <div class="col-sm-3"><boton-operacion value="+"></boton-operacion></div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-3"><boton-numero valor="4"></boton-numero></div>
                        <div class="col-sm-3"><boton-numero valor="5"></boton-numero></div>
                        <div class="col-sm-3"><boton-numero valor="6"></boton-numero></div>
                        <div class="col-sm-3"><boton-operacion value="-"></boton-operacion></div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-3"><boton-numero valor="7"></boton-numero></div>
                        <div class="col-sm-3"><boton-numero valor="8"></boton-numero></div>
                        <div class="col-sm-3"><boton-numero valor="9"></boton-numero></div>
                        <div class="col-sm-3"><boton-operacion value="*"></boton-operacion></div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-3"><boton-numero valor="0"></boton-numero></div>
                        <div class="col-sm-6"><button data-value="calcular" class="btn btn-success w-100">=</button></div>
                        <div class="col-sm-3"><boton-operacion value="/"></boton-operacion></div>
                    </div>
                </div>
            </div>
        `;

        // Capturar elementos
        const display = shadow.getElementById('txt_numero');
        const btnCalcular = shadow.querySelector('button[data-value="calcular"]');
        let expresion = '';
        let mostrarResultado = false;

        // Manejar botón de calcular (=)
        btnCalcular.addEventListener('click', () => {
            expresion = String(Function(`return ${expresion}`)());
            mostrarResultado = true;
            display.value = expresion;
        });

        // Escuchar eventos personalizados de los botones de números
        shadow.addEventListener('numero-click', (e) => {
            const val = e.detail;
            if (mostrarResultado) {
                expresion = val;
                mostrarResultado = false;
            } else {
                expresion += val;
            }
            display.value = expresion;
        });

        // Escuchar eventos personalizados de los botones de operación
        shadow.addEventListener('operacion-click', (e) => {
            const val = e.detail;
            expresion += val;
            mostrarResultado = false;
            display.value = expresion;
        });
    }
}

customElements.define('calculadora-basica', Calculadora);
