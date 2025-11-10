# PRY_SHADOW_DOM - Shadow DOM y Encapsulación

##  Descripción

Este proyecto demuestra los conceptos avanzados de **Shadow DOM** y **encapsulación de estilos** en Web Components.

Shadow DOM permite:
- **Encapsular estilos CSS**: Los estilos definidos en el componente no afectan al DOM externo
- **Aislar la estructura**: La estructura interna del componente está oculta
- **Reutilización segura**: Los componentes pueden usarse sin preocuparse por conflictos

El proyecto incluye ejemplos de componentes con Shadow DOM para operaciones simples como suma y alertas.

---

##  Objetivos de Aprendizaje

Al trabajar con este proyecto, aprenderás:

✅ Crear Shadow DOM con `attachShadow()`  
✅ Encapsular estilos CSS dentro de componentes  
✅ Entender el modo `open` vs `closed`  
✅ Usar `<style>` dentro de componentes  
✅ Diferenciar entre DOM light y Shadow DOM  

---

##  Estructura de Archivos

```
PRY_SHADOW_DOM/
├── index.html                          (Página principal)
├── suma_de_dos_numeros.html            (Página con ejemplos)
├── README.md                           (Este archivo)
└── public/
    ├── css/
    │   ├── alerta_simple.css           (Estilos para AlertaSimple)
    │   └── suma_dos_numeros.css        (Estilos para SumasDosNumeros)
    └── js/
        ├── AlertaSimple.js             (Componente de alerta)
        └── SumasDosNumeros.js          (Componente de suma)
```

---

##  Conceptos Clave

### 1. **Crear un Shadow DOM**

```javascript
class MiComponente extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = `
            <style>
                /* CSS encapsulado - solo afecta este componente */
                button { background-color: blue; }
            </style>
            <button>Mi Botón</button>
        `;
    }
}
```

### 2. **Modo Open vs Closed**

**Modo `open`**:
```javascript
const shadow = this.attachShadow({ mode: 'open' });
// El Shadow DOM es accesible desde JavaScript externo
// console.log(elemento.shadowRoot)  ✅ Funciona
```

**Modo `closed`**:
```javascript
const shadow = this.attachShadow({ mode: 'closed' });
// El Shadow DOM NO es accesible desde afuera
// console.log(elemento.shadowRoot)  ❌ Retorna null
```

### 3. **Encapsulación de Estilos**

```javascript
shadow.innerHTML = `
    <style>
        :host {
            display: block;
            padding: 10px;
        }
        
        button {
            background: blue;
            color: white;
        }
    </style>
    <button>Haz clic</button>
`;
```

El `button` dentro de este componente tendrá estilos azules sin afectar otros `<button>` en la página.

### 4. **Pseudoclase `:host`**

```javascript
shadow.innerHTML = `
    <style>
        :host {
            /* Aplica estilos al componente mismo */
            display: block;
            border: 1px solid red;
        }
        
        :host(.especial) {
            /* Aplica estilos si el componente tiene clase "especial" */
            border-color: green;
        }
    </style>
`;
```

---

##  Componentes del Proyecto

### `AlertaSimple.js`

**Función**: Componente que muestra alertas personalizadas con Shadow DOM

**Características**:
- Mensaje personalizable
- Tipo de alerta (éxito, error, advertencia, información)
- Botón para cerrar
- Estilos encapsulados

**Cómo usarlo**:
```html
<script type="module" src="./public/js/AlertaSimple.js"></script>

<alerta-simple tipo="exito" mensaje="¡Operación completada!"></alerta-simple>
<alerta-simple tipo="error" mensaje="Ha ocurrido un error"></alerta-simple>
```

**Estructura del componente**:
```javascript
export class AlertaSimple extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        const tipo = this.getAttribute('tipo') || 'info';
        const mensaje = this.getAttribute('mensaje') || '';
        
        shadow.innerHTML = `
            <style>
                :host { display: block; }
                .alerta { padding: 15px; border-radius: 5px; }
                .exito { background: #d4edda; color: #155724; }
                .error { background: #f8d7da; color: #721c24; }
            </style>
            <div class="alerta ${tipo}">
                <span>${mensaje}</span>
                <button onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;
    }
}

customElements.define('alerta-simple', AlertaSimple);
```

### `SumasDosNumeros.js`

**Función**: Componente que realiza sumas con interfaz visual

**Características**:
- Inputs para dos números
- Botón para calcular
- Display de resultado
- Estilos personalizados y encapsulados

**Cómo usarlo**:
```html
<script type="module" src="./public/js/SumasDosNumeros.js"></script>

<suma-dos-numeros></suma-dos-numeros>
```

**Ejemplo de implementación**:
```javascript
export class SumasDosNumeros extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = `
            <style>
                :host { display: block; padding: 20px; }
                .contenedor { border: 1px solid #ddd; padding: 15px; }
                input { padding: 8px; margin: 5px; }
                button { padding: 8px 15px; background: #007bff; color: white; }
                .resultado { font-size: 18px; font-weight: bold; margin-top: 10px; }
            </style>
            <div class="contenedor">
                <h3>Suma de Dos Números</h3>
                <input type="number" id="num1" placeholder="Número 1">
                <input type="number" id="num2" placeholder="Número 2">
                <button id="btnSumar">Sumar</button>
                <div class="resultado" id="resultado"></div>
            </div>
        `;
        
        // Lógica
        const btnSumar = shadow.getElementById('btnSumar');
        const resultado = shadow.getElementById('resultado');
        
        btnSumar.addEventListener('click', () => {
            const num1 = parseFloat(shadow.getElementById('num1').value) || 0;
            const num2 = parseFloat(shadow.getElementById('num2').value) || 0;
            resultado.textContent = `Resultado: ${num1 + num2}`;
        });
    }
}

customElements.define('suma-dos-numeros', SumasDosNumeros);
```

---

##  Cómo Ejecutar

### Opción 1: Live Server (VS Code)
1. Abre la carpeta `PRY_SHADOW_DOM` en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 2: Python
Desde la **raíz del repositorio**:
```powershell
python -m http.server 8000
```
Accede a:
- Principal: `http://localhost:8000/PRY_SHADOW_DOM/index.html`
- Ejemplos: `http://localhost:8000/PRY_SHADOW_DOM/suma_de_dos_numeros.html`

### Opción 3: Node.js
```powershell
npx http-server -p 8080
```
Accede a: `http://localhost:8080/PRY_SHADOW_DOM/index.html`

---

##  Cómo Probar

### AlertaSimple
1. Abre la página correspondiente
2. Verás alertas con diferentes tipos (éxito, error, etc.)
3. Los estilos están encapsulados (no afectan otros elementos)

### SumasDosNumeros
1. Ingresa dos números
2. Haz clic en "Sumar"
3. El resultado se mostrará encapsulado en el Shadow DOM

---

##  Estructura típica de un Componente con Shadow DOM

```javascript
export class MiComponente extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        // Obtener atributos
        const titulo = this.getAttribute('titulo') || 'Título por defecto';
        
        // Inyectar HTML y CSS
        shadow.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: Arial, sans-serif;
                }
                
                .contenedor {
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }
                
                h2 {
                    color: #333;
                    margin-top: 0;
                }
            </style>
            
            <div class="contenedor">
                <h2>${titulo}</h2>
                <p id="contenido">Contenido del componente</p>
            </div>
        `;
        
        // Acceder a elementos del Shadow DOM
        const contenido = shadow.getElementById('contenido');
        
        // Agregar event listeners
        this.addEventListener('click', () => {
            contenido.textContent = 'Fue clickeado';
        });
    }
}

customElements.define('mi-componente', MiComponente);
```

---

## 🔧 Patrones Avanzados

### Componente con Slot (Contenido Dinámico)
```javascript
shadow.innerHTML = `
    <style>
        ::slotted(*) {
            /* Estilos para el contenido insertado */
            margin: 10px;
        }
    </style>
    <h2>Contenedor</h2>
    <slot></slot>  <!-- Aquí irá el contenido interno -->
`;
```

**Uso**:
```html
<mi-componente>
    <p>Este contenido irá al slot</p>
</mi-componente>
```

### Comunicación Entre Shadow DOM y Light DOM
```javascript
// Dentro del componente
const evento = new CustomEvent('evento-personalizado', {
    detail: { mensaje: 'Dato del componente' },
    bubbles: true,
    composed: true  // Importante: permite que cruce el Shadow DOM
});
this.dispatchEvent(evento);
```

**Escuchar desde afuera**:
```javascript
document.addEventListener('evento-personalizado', (e) => {
    console.log(e.detail.mensaje);
});
```

---

##  Problemas Comunes

| Problema | Causa | Solución |
|----------|-------|----------|
| CSS externos no se aplican | Shadow DOM los aísla | Incluir `<style>` dentro del Shadow DOM |
| No puedo acceder a `shadowRoot` | Modo `closed` | Usar `mode: 'open'` en `attachShadow()` |
| El contenido no se muestra | HTML inválido | Validar sintaxis en `innerHTML` |
| Los eventos no se propagan | Falta `composed: true` | Agregar `composed: true` en CustomEvent |

---

## 🎓 Temas para Discusión en Clase

1. ¿Cuál es la ventaja principal de Shadow DOM?
2. ¿Cuándo usar `mode: 'open'` vs `mode: 'closed'`?
3. ¿Cómo Shadow DOM afecta el rendimiento?
4. ¿Es posible debuggear Shadow DOM en el navegador?
5. ¿Cómo combinarías Shadow DOM con TypeScript?

---

## 🔗 Progresión de Proyectos

Este proyecto es **intermedio-avanzado**:
1. PRY_ES_MODULES → Módulos básicos
2. PRY_SALUDO_WEB-COMPONENT → Web Components simples
3. **PRY_SHADOW_DOM** ← Estás aquí
4. PRY_ESTRCUTURA → Formularios
5. PRY_CALCULADORA → Integración completa

---

##  Debuggear Shadow DOM

En las DevTools del navegador:
1. Abre F12 (Developer Tools)
2. Ve a **Settings** (⚙️)
3. Busca "Show user agent shadow DOM"
4. Marca la opción
5. Ahora verás Shadow DOM en el Inspector

---

##  Recursos Adicionales

- [MDN - Shadow DOM](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM)
- [MDN - Pseudo-elementos Shadow](https://developer.mozilla.org/es/docs/Web/CSS/::slotted)
- [Shadow DOM v1 Spec](https://dom.spec.whatwg.org/#shadow-trees)
- [Estilos en Shadow DOM](https://developer.mozilla.org/es/docs/Web/CSS/:host)

---

**Última actualización**: 2025-11-10
