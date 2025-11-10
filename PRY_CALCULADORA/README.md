# PRY_CALCULADORA - Calculadora con Web Components

##  Descripción

Este proyecto implementa una **calculadora funcional** utilizando **Web Components**, **Shadow DOM** y **ES Modules**. 

La calculadora está dividida en componentes reutilizables:
- **`<boton-numero>`**: Componente para botones numéricos (0-9)
- **`<boton-operacion>`**: Componente para operaciones matemáticas (+, -, *, /)
- **`<calculadora-basica>`**: Componente contenedor que orquesta la lógica de cálculo

Esta estructura demuestra cómo crear componentes independientes que se comunican mediante **eventos personalizados**.

---

##  Objetivos de Aprendizaje

Al trabajar con este proyecto, aprenderás:

✅ Crear Web Components personalizados con `HTMLElement`  
✅ Usar Shadow DOM para encapsular estilos  
✅ Organizar código con ES Modules (`import`/`export`)  
✅ Implementar comunicación entre componentes mediante eventos  
✅ Manejar atributos personalizados en componentes  

---

##  Estructura de Archivos

```
PRY_CALCULADORA/
├── index.html                          (Punto de entrada HTML)
├── README.md                           (Este archivo)
└── public/
    ├── css/                           (Estilos adicionales si aplican)
    ├── js/
    │   ├── main.js                    (Importa los módulos)
    │   ├── Calculadora.js             (Componente principal)
    │   ├── BotonNumero.js             (Componente números)
    │   ├── BotonOperacion.js          (Componente operaciones)
    └── vendor/
        └── bootstrap/                 (Framework CSS)
```

---

## Conceptos Clave del Proyecto

### 1. **Componente `BotonNumero.js`**
```javascript
<boton-numero valor="1"></boton-numero>
```
- Recibe un atributo `valor` con el número a mostrar
- Emite un evento personalizado `numero-click` cuando se hace clic
- Estilo encapsulado con Shadow DOM (botón rojo)

### 2. **Componente `BotonOperacion.js`**
```javascript
<boton-operacion value="+"></boton-operacion>
```
- Recibe un atributo `value` con la operación (+, -, *, /)
- Emite un evento personalizado `operacion-click`
- Estilo encapsulado con Shadow DOM (botón naranja)

### 3. **Componente `Calculadora.js`**
- Contiene la lógica de cálculo
- Escucha eventos `numero-click` y `operacion-click` de los componentes hijo
- Actualiza el display con los números y resultados
- Ejecuta operaciones matemáticas usando `Function()` (evaluación segura)

### 4. **Comunicación entre Componentes**
Los componentes hijo disparan eventos con `bubbles: true` y `composed: true`:
```javascript
this.dispatchEvent(new CustomEvent('numero-click', {
    detail: valor,
    bubbles: true,
    composed: true
}));
```

El componente padre escucha:
```javascript
shadow.addEventListener('numero-click', (e) => {
    const valor = e.detail;
    // Procesar valor
});
```

---

##  Cómo Ejecutar

### Opción 1: Live Server (VS Code)
1. Abre la carpeta `PRY_CALCULADORA` en VS Code
2. Click derecho en `index.html` → "Open with Live Server"
3. La calculadora se abrirá en `http://localhost:5500`

### Opción 2: Python
Desde la **raíz del repositorio**:
```powershell
python -m http.server 8000
```
Accede a: `http://localhost:8000/PRY_CALCULADORA/index.html`

### Opción 3: Node.js
```powershell
npx http-server -p 8080
```
Accede a: `http://localhost:8080/PRY_CALCULADORA/index.html`

---

##  Cómo Usar la Calculadora

1. **Ingresa números**: Haz clic en los botones numerados (0-9)
2. **Selecciona operación**: Haz clic en +, -, *, o /
3. **Ingresa el segundo número**
4. **Calcula el resultado**: Haz clic en = (botón verde)

**Ejemplo**: Para calcular `5 + 3`:
- Click: `5`
- Click: `+`
- Click: `3`
- Click: `=`
- Resultado: `8`

---

##  Código Relevante

### Cómo importar componentes en `main.js`
```javascript
import { BotonOperacion } from './BotonOperacion.js';
import { BotonNumero } from './BotonNumero.js';
import { Calculadora } from './Calculadora.js';
```

### Cómo usar un componente en `index.html`
```html
<calculadora-basica></calculadora-basica>

<script type="module" src="./public/js/main.js"></script>
```

### Estructura básica de un Web Component
```javascript
export class BotonNumero extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        
        const valor = this.getAttribute('valor') || '0';
        
        shadow.innerHTML = `
            <style>/* CSS encapsulado */</style>
            <button>${valor}</button>
        `;
    }
}

customElements.define('boton-numero', BotonNumero);
```

---

## 🔧 Cómo Modificar el Proyecto

### Cambiar colores de botones
Edita `BotonNumero.js` o `BotonOperacion.js` y modifica las clases de Bootstrap:
```javascript
// Cambiar de btn-light a btn-primary (azul)
<button class="btn btn-primary w-100">
```

### Agregar más operaciones
1. En `Calculadora.js`, agrega un nuevo botón en la interfaz:
   ```html
   <boton-operacion value="%"></boton-operacion>
   ```
2. La lógica de evaluación con `Function()` manejará automáticamente `%`

### Cambiar el layout
Edita la estructura HTML en `Calculadora.js` (cambiar clases de Bootstrap, agregar más filas, etc.)

---

##  Problemas Comunes

| Problema | Causa | Solución |
|----------|-------|----------|
| "Failed to load module script" | Acceso por `file://` sin servidor | Usar Live Server, Python o Node |
| Botones no responden | Eventos no propagándose | Verificar `bubbles: true` y `composed: true` |
| Estilos no se aplican | Bootstrap no encuentra la ruta | Verificar que `public/vendor/bootstrap/` exista |
| Cálculos incorrectos | Error en la expresión | Revisar la consola (F12) para ver errores |

---

##  Temas para Discusión en Clase

1. ¿Por qué usamos `Shadow DOM`? ¿Qué ventajas tiene?
2. ¿Cómo podrías agregar validación de entrada en la calculadora?
3. ¿Cuáles son las diferencias entre componentes Web Components y componentes React?
4. ¿Cómo mejorarías la arquitectura de comunicación entre componentes?
5. ¿Qué ocurriría si quitamos `composed: true` del evento?

---

##  Recursos Adicionales

- [MDN - Web Components](https://developer.mozilla.org/es/docs/Web/Web_Components)
- [MDN - Shadow DOM](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_shadow_DOM)
- [MDN - ES Modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- [CustomEvent API](https://developer.mozilla.org/es/docs/Web/API/CustomEvent)

---

**Última actualización**: 2025-11-10
