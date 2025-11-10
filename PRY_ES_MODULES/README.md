# PRY_ES_MODULES - Introducción a Módulos ES6

##  Descripción

Este proyecto demuestra los conceptos fundamentales de **ES Modules** (módulos ECMAScript) en JavaScript. 

Incluye ejemplos prácticos de cómo:
- **Exportar** funciones y variables desde módulos
- **Importar** funciones y variables en otros módulos
- Organizar código en módulos reutilizables

El proyecto contiene funciones simples para saludar y despedir de diferentes formas, organizadas en módulos independientes.

---

##  Objetivos de Aprendizaje

Al trabajar con este proyecto, aprenderás:

✅ Sintaxis de `import` y `export`  
✅ Diferencia entre exportación por defecto y nombrada  
✅ Organizar código en módulos  
✅ Reutilizar código entre módulos  
✅ Cómo el navegador carga módulos ES  

---

##  Estructura de Archivos

```
PRY_ES_MODULES/
├── index.html                          (Punto de entrada HTML)
├── README.md                           (Este archivo)
└── public/
    └── js/
        ├── main.js                    (Importa y usa otros módulos)
        ├── saludo.js                  (Módulo base de saludos)
        ├── SaludoPorNombre.js         (Módulo especializado)
        ├── SaludoPorClase.js          (Módulo especializado)
        ├── DespedidaPorDia.js         (Módulo de despedidas)
        └── DespedidaPorClase.js       (Módulo de despedidas)
```

---

##  Conceptos Clave

### 1. **Exportación Nombrada**
En `saludo.js`:
```javascript
export function saludar(nombre) {
    return `Hola, ${nombre}`;
}
```

Importación en otro módulo:
```javascript
import { saludar } from './saludo.js';
```

### 2. **Exportación por Defecto**
En un módulo:
```javascript
export default function() {
    console.log('Función principal');
}
```

Importación:
```javascript
import miModulo from './miModulo.js';
```

### 3. **Múltiples Exportaciones**
```javascript
export { saludar, despedir, etc };
```

### 4. **Importar Todo**
```javascript
import * as modulo from './archivo.js';
modulo.saludar();
```

---

##  Detalle de los Módulos

### `saludo.js` (Módulo Base)
Contiene la función principal de saludo que otros módulos utilizan.

**Exporta:**
- `saludar(nombre)` - Función básica de saludo

**Uso:**
```javascript
import { saludar } from './saludo.js';
console.log(saludar('Juan'));  // "Hola, Juan"
```

### `SaludoPorNombre.js` (Módulo Especializado)
Extiende la funcionalidad básica con saludos personalizados por nombre.

**Importa:**
- `saludar` desde `saludo.js`

**Exporta:**
- `saludoPorNombre(nombre)` - Saludo personalizado

### `SaludoPorClase.js` (Módulo Especializado)
Crea saludos basados en clases o grupos.

**Exporta:**
- `saludoPorClase(nombre, clase)` - Saludo con clase

### `DespedidaPorDia.js` y `DespedidaPorClase.js`
Módulos similares para despedidas.

---

##  Cómo Ejecutar

### Opción 1: Live Server (VS Code)
1. Abre la carpeta `PRY_ES_MODULES` en VS Code
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abrirá en `http://localhost:5500`

### Opción 2: Python
Desde la **raíz del repositorio**:
```powershell
python -m http.server 8000
```
Accede a: `http://localhost:8000/PRY_ES_MODULES/index.html`

### Opción 3: Node.js
```powershell
npx http-server -p 8080
```
Accede a: `http://localhost:8080/PRY_ES_MODULES/index.html`

---

##  Cómo Ver los Resultados

1. Abre `index.html` en el navegador (con servidor HTTP)
2. Abre la **Consola del Navegador** (F12)
3. Verás los mensajes de saludo y despedida que genera `main.js`

**Ejemplo de salida en consola:**
```
Hola, Juan
Buenos días, Juan
Hola, Juan - Clase A
Hasta luego, Juan
Hasta el jueves, Juan
```

---

##  Modificaciones Sugeridas

### Agregar un nuevo módulo
1. Crea un archivo `public/js/SaludoFormales.js`:
```javascript
export function saludoFormal(nombre) {
    return `Buenos días, estimado/a ${nombre}`;
}
```

2. Importa en `main.js`:
```javascript
import { saludoFormal } from './SaludoFormales.js';
console.log(saludoFormal('Profesor'));
```

### Modificar saludos existentes
Edita el contenido de cualquier módulo en `public/js/` para cambiar los mensajes.

### Agregar interactividad
Modifica `index.html` para añadir un formulario de entrada:
```html
<input type="text" id="nombre" placeholder="Ingresa tu nombre">
<button onclick="procesarNombre()">Saludar</button>
```

Luego en `main.js`:
```javascript
function procesarNombre() {
    const nombre = document.getElementById('nombre').value;
    console.log(saludar(nombre));
}
```

---

##  Estructura Típica de un Módulo

```javascript
// archivo.js

// Función auxiliar (no exportada)
function calcular(a, b) {
    return a + b;
}

// Exportación nombrada
export function saludar(nombre) {
    return `Hola, ${nombre}`;
}

// Otra exportación
export const edad = 25;

// O agrupar exportaciones
export { calcular, edad };
```

Uso en otro archivo:
```javascript
import { saludar, calcular } from './archivo.js';

console.log(saludar('Juan'));
console.log(calcular(5, 3));  // 8
```

---

##  Problemas Comunes

| Problema | Causa | Solución |
|----------|-------|----------|
| "Failed to load module script" | Acceso por `file://` | Usar servidor HTTP (Live Server, Python, Node) |
| "Cannot find module" | Ruta incorrecta | Verificar la ruta relativa en `import` |
| Función no definida | Olvido de `export` | Agregar `export` antes de la función |
| "Unexpected token" | Sintaxis incorrecta | Revisar puntuación en `import`/`export` |

---

##  Análisis de `main.js`

El archivo `main.js` es el **punto de entrada** que importa todos los módulos:

```javascript
import { saludar } from './saludo.js';
import { saludoPorNombre } from './SaludoPorNombre.js';
import { saludoPorClase } from './SaludoPorClase.js';
import { despedidaPorDia } from './DespedidaPorDia.js';
import { despedidaPorClase } from './DespedidaPorClase.js';

// Usar los módulos
console.log(saludar('Juan'));
console.log(saludoPorNombre('Juan'));
console.log(saludoPorClase('Juan', 'Clase A'));
console.log(despedidaPorDia('Juan', 'lunes'));
console.log(despedidaPorClase('Juan', 'Clase A'));
```

---

##  Temas para Discusión en Clase

1. ¿Por qué es importante usar módulos en JavaScript?
2. ¿Cuál es la diferencia entre exportación nombrada y por defecto?
3. ¿Cómo los módulos ayudan a evitar conflictos de nombres globales?
4. ¿Qué sucede si un módulo importa otro que a su vez importa un tercero?
5. ¿Cómo aumenta la mantenibilidad del código usando módulos?

---

##  Relación con Otros Proyectos

Este proyecto es fundamental para entender:
- **PRY_CALCULADORA**: Usa ES Modules para importar componentes
- **PRY_ESTRCUTURA**: También organiza código con módulos
- **PRY_SHADOW_DOM**: Importa componentes como módulos

---

##  Recursos Adicionales

- [MDN - ES Modules](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules)
- [JavaScript.info - Módulos](https://es.javascript.info/modules-intro)
- [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
- [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)

---

**Última actualización**: 2025-11-10
