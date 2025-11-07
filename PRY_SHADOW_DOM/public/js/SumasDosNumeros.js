class SumaDosNumeros extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        //Capturar el atributo 'operacion'
        let operacion = this.getAttribute('operacion');
        shadow.innerHTML = `
            <link rel="stylesheet" href="/public/css/suma_dos_numeros.css">
            <div class="operaciones-basicas">
                <h2>${operacion} de dos números</h2>
                <label for="">Ingrese numero 1:</label>
                <input type="number" id="num1">
                <label for="">Ingrese numero 2:</label>
                <input type="number" id="num2">
                <button id="btnCalcular" class="btn-calcular">${operacion}</button>
                <p id="resultado">Resultado: </p>
            </div>
        `;
        const num1 = shadow.getElementById('num1');
        const num2 = shadow.getElementById('num2');
        const resultado = shadow.getElementById('resultado');
        const btnCalcular = shadow.getElementById('btnCalcular');

        btnCalcular.addEventListener('click', () => {

            let n1 = parseFloat(num1.value);
            let n2 = parseFloat(num2.value);
            switch (operacion) {
                case 'SUMA':
                    const suma = n1 + n2;
                    resultado.textContent = `Resultado: ${suma}`;
                    break;
                case 'RESTA':
                     const resta = n1 - n2;
                    resultado.textContent = `Resultado: ${resta}`;
                    break;
                case 'MULTIPLICACION':
                        const multiplicacion = n1 * n2;
                        resultado.textContent = `Resultado: ${multiplicacion}`;
                    break;
                case 'DIVISION':
                        const division = n1 / n2;
                        resultado.textContent = `Resultado: ${division}`;
                    break;
                default:
                    resultado.textContent = `Operación no válida`;
                    return;
            }
            
        });

    }

}

customElements.define('operaciones-basicas', SumaDosNumeros);