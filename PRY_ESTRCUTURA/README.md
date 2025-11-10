# PRY_ESTRCUTURA - Estructura y Componentes de Formularios

##  Descripción

Este proyecto demuestra cómo trabajar con **estructuras de datos**, **formularios** y **componentes personalizados** en JavaScript puro.

El proyecto incluye ejemplos de:
- Captura de datos desde formularios HTML
- Procesamiento y validación de información
- Componentes reutilizables para interactuar con usuarios
- Organización modular del código

---

##  Objetivos de Aprendizaje

Al trabajar con este proyecto, aprenderás:

✅ Acceder y manipular elementos del formulario  
✅ Capturar eventos de formularios (submit, input, change)  
✅ Crear componentes reutilizables para formularios  
✅ Procesar datos capturados  
✅ Validar entrada del usuario  
✅ Organizar código con ES Modules  

---

##  Estructura de Archivos

```
PRY_ESTRCUTURA/
├── index.html                          (Página principal)
├── captura_datos.html                  (Página alternativa con formulario)
├── README.md                           (Este archivo)
└── public/
    ├── css/                            (Estilos personalizados)
    ├── img/                            (Imágenes)
    └── js/
        └── components/
            ├── CapturaDatosPersona.js (Componente de captura)
            └── SaludarPersona.js      (Componente de saludo)
```

---

##  Conceptos Clave

### 1. **Acceso a Elementos del Formulario**

En HTML:
```html
<form id="miFormulario">
    <input type="text" name="nombre" id="nombre">
    <input type="text" name="correo" id="correo">
    <button type="submit">Enviar</button>
</form>
```

En JavaScript:
```javascript
const formulario = document.getElementById('miFormulario');
const nombre = document.getElementById('nombre').value;
const correo = document.getElementById('correo').value;
```

### 2. **Escuchar Eventos de Formulario**

```javascript
formulario.addEventListener('submit', (e) => {
    e.preventDefault();  // Evitar recarga de página
    console.log('Nombre:', nombre.value);
});
```

### 3. **Crear Componentes Reutilizables**

```javascript
export class CapturaDatosPersona extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    // Métodos y lógica del componente
}

customElements.define('captura-datos', CapturaDatosPersona);
```

---

##  Detalle de los Componentes

### `CapturaDatosPersona.js`

**Función**: Proporciona un formulario encapsulado para capturar información personal

**Características**:
- Input para nombre
- Input para correo
- Input para edad
- Botón de envío
- Validación básica

**Cómo usarlo**:
```html
<captura-datos></captura-datos>
```

**Eventos que emite**:
- `datos-capturados`: Se dispara cuando se envía el formulario

**Acceso a datos**:
```javascript
document.addEventListener('datos-capturados', (e) => {
    console.log(e.detail.nombre);
    console.log(e.detail.correo);
    console.log(e.detail.edad);
});
```

### `SaludarPersona.js`

**Función**: Muestra un saludo personalizado basado en la información capturada

**Características**:
- Recibe datos de la persona
- Genera un saludo dinámico
- Puede mostrar información adicional

**Cómo usarlo**:
```html
<saludar-persona nombre="Juan" edad="25"></saludar-persona>
```

---

##  Cómo Ejecutar

### Opción 1: Live Server (VS Code)
1. Abre la carpeta `PRY_ESTRCUTURA` en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 2: Python
Desde la **raíz del repositorio**:
```powershell
python -m http.server 8000
```
Accede a:
- Principal: `http://localhost:8000/PRY_ESTRCUTURA/index.html`
- Formulario: `http://localhost:8000/PRY_ESTRCUTURA/captura_datos.html`

### Opción 3: Node.js
```powershell
npx http-server -p 8080
```
Accede a: `http://localhost:8080/PRY_ESTRCUTURA/index.html`

---

##  Cómo Usar

### Página Principal (`index.html`)

1. Abre la página en el navegador
2. Verás una interfaz interactiva (contenido específico depende de la implementación)

### Página de Captura (`captura_datos.html`)

1. Rellena los campos del formulario:
   - Nombre: Tu nombre
   - Correo: Tu correo electrónico
   - Edad: Tu edad
2. Haz clic en "Enviar"
3. El componente capturará los datos y mostrará un saludo personalizado

---

##  Estructura Típica de Captura de Datos

```javascript
// En el HTML
<form id="formulario">
    <input type="text" id="nombre" placeholder="Nombre">
    <input type="email" id="correo" placeholder="Correo">
    <button type="submit">Enviar</button>
</form>

// En JavaScript
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    
    // Validar
    if (!nombre || !correo) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    // Procesar datos
    console.log({ nombre, correo });
    
    // Limpiar formulario
    formulario.reset();
});
```

---

##  Cómo Modificar el Proyecto

### Agregar más campos al formulario

En el componente `CapturaDatosPersona.js`, agrega más inputs:
```html
<input type="text" name="telefono" placeholder="Teléfono">
<input type="text" name="ciudad" placeholder="Ciudad">
```

### Agregar validación más rigurosa

```javascript
if (nombre.length < 3) {
    alert('El nombre debe tener al menos 3 caracteres');
    return;
}

if (!correo.includes('@')) {
    alert('Correo inválido');
    return;
}

if (edad < 18 || edad > 100) {
    alert('Edad debe estar entre 18 y 100');
    return;
}
```

### Guardar datos localmente

```javascript
// Guardar en localStorage
localStorage.setItem('persona', JSON.stringify({ nombre, correo, edad }));

// Recuperar
const datosGuardados = JSON.parse(localStorage.getItem('persona'));
```

### Mostrar datos en una tabla

```javascript
const tabla = document.getElementById('miTabla');
const fila = tabla.insertRow();
fila.insertCell(0).textContent = nombre;
fila.insertCell(1).textContent = correo;
fila.insertCell(2).textContent = edad;
```

---

##  Patrones Comunes

### Validación de Email
```javascript
function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
```

### Prevención de envío duplicado
```javascript
let enviando = false;

formulario.addEventListener('submit', async (e) => {
    if (enviando) return;
    enviando = true;
    
    // Procesar...
    
    enviando = false;
});
```

### Mostrar mensajes de estado
```javascript
const mensaje = document.getElementById('mensaje');

mensaje.textContent = 'Procesando...';
mensaje.className = 'alerta-info';

// Luego
mensaje.textContent = 'Datos guardados correctamente';
mensaje.className = 'alerta-success';
```

---

##  Problemas Comunes

| Problema | Causa | Solución |
|----------|-------|----------|
| El formulario recarga la página | Falta `e.preventDefault()` | Agregar `e.preventDefault()` en el submit |
| Los valores no se capturan | Selectores incorrectos | Verificar `id` o `name` de los inputs |
| El componente no aparece | ES Module no cargado | Verificar `<script type="module">` |
| Validación no funciona | Lógica incorrecta | Usar console.log() para debuggear |

---

##  Temas para Discusión en Clase

1. ¿Cuál es la diferencia entre `value` y `textContent`?
2. ¿Por qué es importante `e.preventDefault()`?
3. ¿Cómo validarías datos más complejos?
4. ¿Cuándo usar `localStorage` vs enviar a un servidor?
5. ¿Cómo mejorarías la experiencia del usuario en un formulario?

---

##  Relación con Otros Proyectos

Este proyecto combina conceptos de:
- **PRY_ES_MODULES**: Organización con módulos
- **PRY_SHADOW_DOM**: Componentes encapsulados
- **PRY_CALCULADORA**: Comunicación entre componentes

---

##  Recursos Adicionales

- [MDN - HTMLFormElement](https://developer.mozilla.org/es/docs/Web/API/HTMLFormElement)
- [MDN - Validación de Formularios](https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation)
- [MDN - FormData](https://developer.mozilla.org/es/docs/Web/API/FormData)
- [localStorage - MDN](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)

---

**Última actualización**: 2025-11-10
