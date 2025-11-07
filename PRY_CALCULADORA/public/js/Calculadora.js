class Calculadora extends HTMLElement {
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
                        <div class="col-sm-3"><button data-value="1" class="btn btn-warning w-100">1</button></div>
                        <div class="col-sm-3"><button data-value="2" class="btn btn-warning w-100">2</button></div>
                        <div class="col-sm-3"><button data-value="3" class="btn btn-warning w-100">3</button></div>
                        <div class="col-sm-3"><boton-operacion value="+"></boton-operacion></div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-3"><button data-value="4" class="btn btn-warning w-100">4</button></div>
                        <div class="col-sm-3"><button data-value="5" class="btn btn-warning w-100">5</button></div>
                        <div class="col-sm-3"><button data-value="6" class="btn btn-warning w-100">6</button></div>
                        <div class="col-sm-3"><boton-operacion value="-"></boton-operacion></div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-3"><button data-value="7" class="btn btn-warning w-100">7</button></div>
                        <div class="col-sm-3"><button data-value="8" class="btn btn-warning w-100">8</button></div>
                        <div class="col-sm-3"><button data-value="9" class="btn btn-warning w-100">9</button></div>
                        <div class="col-sm-3"><boton-operacion value="*"></boton-operacion></div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-sm-3"><button data-value="0" class="btn btn-warning w-100">0</button></div>
                        <div class="col-sm-6"><button data-value="calcular" class="btn btn-success w-100">=</button></div>
                        <div class="col-sm-3"><boton-operacion value="/"></boton-operacion></div>
                    </div>
                </div>
            </div>
        `;

        // Capturar elementos
        const display = shadow.getElementById('txt_numero');
        const buttons = shadow.querySelectorAll('button');
        let expresion = '';
        let mostrarResultado = false;

        // Manejo de botones numericos y "="
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.getAttribute('data-value');
                if (val === 'calcular') {
                    expresion = String(Function(`return ${expresion}`)());
                    mostrarResultado = true;
                } else {
                    if (mostrarResultado) {
                        expresion = val;
                        mostrarResultado = false;
                    } else {
                        expresion += val;
                    }
                }
                display.value = expresion;
            });
        });

        // Escuchar eventos personalizados de los botones de operacion
        shadow.addEventListener('operacion-click', (e) => {
            const val = e.detail; // aqui llega el valor de la operacion
            expresion += val;
            display.value = expresion;
        });
    }
}

customElements.define('calculadora-basica', Calculadora);
