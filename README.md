# UNIVERSIDAD DE LAS FUERZAS ARMADAS "ESPE"
**Autor**: Mauri Tandazo 
**Correo**: matandazo3@espe.edu.ec  


# PROGRAMACIÓN INTEGRATIVA CON COMPONENTES

## Descripción General

Este repositorio contiene una colección de proyectos educativos que demuestran los conceptos fundamentales de **Web Components**, **Shadow DOM** y **ES Modules** en JavaScript puro, sin dependencias de frameworks externas.

Cada proyecto está diseñado como un ejemplo práctico independiente que puede ser explorado y ejecutado de manera sencilla. Todos los proyectos utilizan **HTML5**, **CSS3** y **JavaScript moderno** (ES6+).

---

##  Estructura del Repositorio

```
PROGRAMACION_INTEGRATIVA_COMPONENTES/
├── README.md                          (Este archivo - Guía general)
├── PRY_CALCULADORA/                   (Calculadora con Web Components)
│   └── README.md                      (Guía específica del proyecto)
├── PRY_ES_MODULES/                    (Módulos ES básicos)
│   └── README.md                      (Guía específica del proyecto)
├── PRY_ESTRCUTURA/                    (Estructura y componentes personalizados)
│   └── README.md                      (Guía específica del proyecto)
├── PRY_SALUDO_WEB-COMPONENT/          (Introducción a Web Components)
│   └── README.md                      (Guía específica del proyecto)
└── PRY_SHADOW_DOM/                    (Shadow DOM y encapsulación)
    └── README.md                      (Guía específica del proyecto)
```

---

##  Proyectos Incluidos

| Proyecto | Objetivo | Tecnologías |
|----------|----------|-------------|
| **PRY_CALCULADORA** | Construir una calculadora funcional con componentes reutilizables | Web Components, Shadow DOM, ES Modules |
| **PRY_ES_MODULES** | Aprender importación y exportación de módulos JavaScript | ES Modules, módulos simples |
| **PRY_ESTRCUTURA** | Manejo de formularios y captura de datos con componentes | Componentes personalizados, formularios |
| **PRY_SALUDO_WEB-COMPONENT** | Introducción a los Web Components básicos | Web Components, atributos personalizados |
| **PRY_SHADOW_DOM** | Encapsulación de estilos y estructura con Shadow DOM | Shadow DOM, CSS encapsulado |

Para detalles completos de cada proyecto, consulta el `README.md` dentro de cada carpeta.

---

## Requisitos Previos

- **Navegador moderno**: Chrome, Firefox, Edge, Safari (todos soportan Web Components)
- **Python 3** (recomendado) O **Node.js** para un servidor local
- **Editor de código**: VS Code u otro editor de tu preferencia
- **Extensión recomendada en VS Code**: Live Server (para servir archivos localmente)

---

## Cómo Ejecutar los Proyectos

###  Opción 1: Usar Live Server (VS Code)

1. Instala la extensión **Live Server** en VS Code
2. Navega a la carpeta del proyecto deseado (ej: `PRY_CALCULADORA`)
3. Abre el archivo `index.html`
4. Haz clic derecho → "Open with Live Server"

### Opción 2: Usar Python (Recomendado)

Abre una terminal (PowerShell en Windows) desde la **raíz del repositorio** y ejecuta:

```powershell
python -m http.server 8000
```

Luego accede a los proyectos en tu navegador:
- Calculadora: `http://localhost:8000/PRY_CALCULADORA/index.html`
- ES Modules: `http://localhost:8000/PRY_ES_MODULES/index.html`
- Estructura: `http://localhost:8000/PRY_ESTRCUTURA/index.html`
- Saludo Web Component: `http://localhost:8000/PRY_SALUDO_WEB-COMPONENT/index.html`
- Shadow DOM: `http://localhost:8000/PRY_SHADOW_DOM/index.html`

###  Opción 3: Usar Node.js + http-server

Si tienes Node.js instalado:

```powershell
npx http-server -p 8080
```

Luego accede a `http://localhost:8080/PRY_CALCULADORA/index.html` (u otro proyecto)

---

## Conceptos Clave Tratados

### Web Components
- Creación de elementos personalizados con `HTMLElement`
- Definición de componentes con `customElements.define()`
- Paso de datos mediante atributos

### Shadow DOM
- Encapsulación de estilos CSS
- Aislamiento del DOM principal
- Ventajas de la encapsulación

### ES Modules
- Importación y exportación de módulos (`import`, `export`)
- Organización del código en módulos reutilizables
- Dependencias entre módulos

### Comunicación entre Componentes
- Eventos personalizados (`CustomEvent`)
- Paso de datos entre componentes padre e hijo
- Propagación de eventos (`bubbles`, `composed`)

---

##  Solución de Problemas

### Error: "Failed to load module script" o "CORS error"

**Causa**: Los módulos ES requieren ser servidos por HTTP, no por `file://`

**Solución**: 
1. Asegúrate de usar un servidor local (Python, Node, o Live Server)
2. Verifica que las rutas en los `<script>` sean relativas correctas

### Los estilos no se aplican

**Causa**: Las rutas a Bootstrap pueden ser incorrectas

**Solución**:
1. Verifica que `public/vendor/bootstrap/` exista en cada proyecto
2. Comprueba que los `href` en los `<link>` sean relativos a la ubicación del HTML

### El componente no responde a clics

**Causa**: Los eventos pueden no estar siendo escuchados correctamente

**Solución**:
1. Abre la consola del navegador (F12) para ver mensajes de error
2. Verifica que los eventos personalizados tengan `bubbles: true` y `composed: true`

---

##  Un poco mas para conocer...

Estos proyectos fueron diseñados para enseñar conceptos modernos de JavaScript con enfoque práctico. Cada proyecto:

- ✅ Es independiente y puede ejecutarse sin otros
- ✅ Incluye comentarios explicativos en el código
- ✅ Demuestra buenas prácticas de estructura
- ✅ Progresa en dificultad (de básico a intermedio)

Se recomienda trabajarlos en este orden:
1. **PRY_SALUDO_WEB-COMPONENT** → Introducción a Web Components
2. **PRY_ES_MODULES** → Entender módulos JavaScript
3. **PRY_ESTRCUTURA** → Formularios y componentes más complejos
4. **PRY_SHADOW_DOM** → Encapsulación avanzada
5. **PRY_CALCULADORA** → Proyecto integrador

---

##  Licencia

Este repositorio es de uso educativo. Siéntete libre de usar, modificar y distribuir estos ejemplos para propósitos académicos.

---

##  Información

**Repositorio**: PROGRAMACION_INTEGRATIVA_COMPONENTES  
**Rama**: main  
**Última actualización**: 2025-11-10

