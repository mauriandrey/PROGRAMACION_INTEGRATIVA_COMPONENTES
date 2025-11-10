# PRY_SALUDO_WEB-COMPONENT - Introducción a Web Components

##  Descripción

Este proyecto proporciona una **introducción simple a Web Components** sin Shadow DOM complejo. Es el punto de partida ideal para comprender cómo crear elementos personalizados en HTML.

El proyecto contiene ejemplos básicos de componentes que saludan al usuario usando solo:
- **HTMLElement**: La clase base para Web Components
- **Atributos personalizados**: Para pasar información al componente
- **Templates**: Para definir estructura HTML

---

##  Objetivos de Aprendizaje

Al trabajar con este proyecto, aprenderás:

✅ Crear Web Components básicos con `class extends HTMLElement`  
✅ Definir atributos personalizados  
✅ Registrar componentes con `customElements.define()`  
✅ Acceder a atributos desde JavaScript  
✅ Renderizar contenido dinámico en componentes  

---

##  Estructura de Archivos

```
PRY_SALUDO_WEB-COMPONENT/
├── index.html                          (Página principal)
├── saludar_persona.html                (Página con ejemplos)
└── README.md                           (Este archivo)
```

**Nota**: Este proyecto NO utiliza Shadow DOM ni estructura `public/js/`, manteniendo la simplicidad.

---

##  Conceptos Clave

### 1. **Crear un Web Component Básico**

```javascript
class MiComponente extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        // Se ejecuta cuando el componente se añade al DOM
        this.innerHTML = '<h1>¡Hola!</h1>';
    }
}

customElements.define('mi-componente', MiComponente);
```

### 2. **Usar Atributos Personalizados**

En HTML:
```html
<mi-componente nombre="Juan"></mi-componente>
```

En JavaScript:
```javascript
class Saludo extends HTMLElement {
    connectedCallback() {
        const nombre = this.getAttribute('nombre') || 'visitante';
        this.innerHTML = `<h1>¡Hola, ${nombre}!</h1>`;
    }
}
```

### 3. **Ciclo de Vida de un Componente**

```javascript
class MiComponente extends HTMLElement {
    constructor() {
        super();
        console.log('1. Constructor');
    }
    
    connectedCallback() {
        console.log('2. Conectado al DOM');
    }
    
    disconnectedCallback() {
        console.log('3. Desconectado del DOM');
    }
    
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log('4. Atributo cambió:', attr, newVal);
    }
}
```

---

##  Páginas del Proyecto

### `index.html` (Página Principal)

Página de bienvenida con ejemplos básicos de Web Components.

**Contenido esperado**:
- Introducción a Web Components
- Ejemplos de uso de componentes simples
- Enlaces a otras páginas

### `saludar_persona.html` (Página de Ejemplos)

Página con ejemplos específicos de saludos personalizados.

**Ejemplo de uso**:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Saludar Persona</title>
</head>
<body>
    <h1>Web Components - Saludos</h1>
    
    <script>
        class SaludoPersona extends HTMLElement {
            connectedCallback() {
                const nombre = this.getAttribute('nombre') || 'Visitante';
                const edad = this.getAttribute('edad') || 'desconocida';
                
                this.innerHTML = `
                    <div style="border: 1px solid blue; padding: 10px;">
                        <h2>¡Hola, ${nombre}!</h2>
                        <p>Tu edad es: ${edad} años</p>
                    </div>
                `;
            }
        }
        
        customElements.define('saludo-persona', SaludoPersona);
    </script>
    
    <!-- Usar el componente -->
    <saludo-persona nombre="Juan" edad="25"></saludo-persona>
    <saludo-persona nombre="María" edad="30"></saludo-persona>
</body>
</html>
```

---

##  Cómo Ejecutar

### Opción 1: Live Server (VS Code)
1. Abre la carpeta `PRY_SALUDO_WEB-COMPONENT` en VS Code
2. Click derecho en `index.html` → "Open with Live Server"

### Opción 2: Python
Desde la **raíz del repositorio**:
```powershell
python -m http.server 8000
```
Accede a:
- Principal: `http://localhost:8000/PRY_SALUDO_WEB-COMPONENT/index.html`
- Ejemplos: `http://localhost:8000/PRY_SALUDO_WEB-COMPONENT/saludar_persona.html`

### Opción 3: Abrir Directamente
Como este proyecto usa Web Components sin ES Modules, puedes abrir directamente en el navegador:
```
file:///C:/Users/HP/Documents/PROGRAMACION_INTEGRATIVA_COMPONENTES/PRY_SALUDO_WEB-COMPONENT/index.html
```

---

##  Cómo Probar

1. Abre cualquiera de las páginas HTML
2. Verás componentes renderizados dinámicamente
3. Abre la Consola del Navegador (F12) para ver mensajes de ciclo de vida

---

##  Crear tu Propio Componente

### Paso 1: Definir la clase
```javascript
class MiSaludo extends HTMLElement {
    connectedCallback() {
        const nombre = this.getAttribute('nombre') || 'Amigo';
        this.innerHTML = `<p>Bienvenido, ${nombre}</p>`;
    }
}
```

### Paso 2: Registrar el componente
```javascript
customElements.define('mi-saludo', MiSaludo);
```

### Paso 3: Usar en HTML
```html
<mi-saludo nombre="Carlos"></mi-saludo>
```

---

##  Patrones Comunes

### Componente con Contenido Interno
```javascript
class Contenedor extends HTMLElement {
    connectedCallback() {
        const contenido = this.innerHTML;  // El HTML dentro del componente
        this.innerHTML = `
            <div style="border: 1px solid red; padding: 10px;">
                <h3>Contenedor</h3>
                ${contenido}
            </div>
        `;
    }
}
```

**Uso**:
```html
<contenedor>
    <p>Este es el contenido interno</p>
</contenedor>
```

### Componente con Estilos Inline
```javascript
class Botón extends HTMLElement {
    connectedCallback() {
        const texto = this.getAttribute('texto') || 'Click';
        this.innerHTML = `
            <button style="
                background-color: blue;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            ">${texto}</button>
        `;
    }
}
```

### Componente que Responde a Eventos
```javascript
class Contador extends HTMLElement {
    connectedCallback() {
        let count = 0;
        this.innerHTML = `
            <div>
                <p>Contador: <span id="valor">0</span></p>
                <button id="btn">+1</button>
            </div>
        `;
        
        this.querySelector('#btn').addEventListener('click', () => {
            count++;
            this.querySelector('#valor').textContent = count;
        });
    }
}
```

---

##  Diferencias: Web Components Básico vs Avanzado

| Característica | Básico (Este Proyecto) | Avanzado (PRY_SHADOW_DOM) |
|---|---|---|
| Shadow DOM | ❌ No | ✅ Sí |
| Encapsulación de CSS | ❌ No | ✅ Sí |
| Complejidad | ⭐ Baja | ⭐⭐⭐ Alta |
| Punto de Inicio | ✅ Ideal | Intermedio |
| Conflictos CSS | ⚠️ Posibles | ❌ Evitados |

---

##  Temas para Discusión en Clase

1. ¿Cuál es la diferencia entre un componente Web Component y un elemento HTML regular?
2. ¿Por qué `connectedCallback()` es importante?
3. ¿Cuándo deberías usar Web Components vs librerías como React?
4. ¿Cómo evitar conflictos de nombres de componentes?
5. ¿Qué ventajas tiene usar Web Components en un proyecto grande?

---

##  Progresión de Proyectos

Este es el **segundo proyecto** recomendado para aprender:
1. **PRY_ES_MODULES** → Entender módulos JS
2. **PRY_SALUDO_WEB-COMPONENT** ← Estás aquí
3. **PRY_SHADOW_DOM** → Encapsulación avanzada
4. **PRY_ESTRCUTURA** → Formularios
5. **PRY_CALCULADORA** → Proyecto integrador

---

##  Pasos Siguientes

Una vez domines Web Components básicos:
- Aprende **Shadow DOM** en `PRY_SHADOW_DOM`
- Aprende **comunicación entre componentes** en `PRY_CALCULADORA`
- Integra **formularios** con `PRY_ESTRCUTURA`

---

##  Recursos Adicionales

- [MDN - Web Components Introducción](https://developer.mozilla.org/es/docs/Web/Web_Components)
- [MDN - Ciclo de Vida](https://developer.mozilla.org/es/docs/Web/Web_Components/Using_custom_elements)
- [Web Components Google](https://www.webcomponents.org/)
- [getAttribute() - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/getAttribute)

---

**Última actualización**: 2025-11-10
