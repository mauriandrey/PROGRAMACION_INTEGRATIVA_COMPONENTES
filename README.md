Guía de proyectos — PROGRAMACION_INTEGRATIVA_COMPONENTES

Este repositorio contiene varios proyectos de ejemplo que muestran el uso de Web Components, Shadow DOM y ES Modules usando HTML/JS (sin framework).

Cada carpeta de proyecto contiene un `index.html` y una estructura `public/` con sus recursos.

## Resumen de proyectos

- **PRY_CALCULADORA/**
  - Descripción: Calculadora básica construida con Web Components y Shadow DOM. Los botones numéricos y de operación son componentes separados (`boton-numero`, `boton-operacion`) y se consumen mediante ES Modules.
  - Archivos clave: `index.html`, `public/js/Calculadora.js`, `public/js/BotonNumero.js`, `public/js/BotonOperacion.js`, `public/js/main.js`.
  - Cómo ejecutarlo: Debido al uso de ES Modules es recomendable servir los archivos por HTTP (no usar `file://`). Desde la carpeta raíz del repositorio puedes usar cualquiera de las opciones:
    - VS Code: usar la extensión Live Server y abrir `PRY_CALCULADORA/index.html`.
    - Python 3: abrir PowerShell y ejecutar desde la raíz del repositorio:

      ```powershell
      cd 'c:\Users\HP\Documents\PROGRAMACION_INTEGRATIVA_COMPONENTES'
      python -m http.server 8000
      ```

      Luego abrir en el navegador: http://localhost:8000/PRY_CALCULADORA/index.html

    - Node (si tienes Node.js):

      ```powershell
      npx http-server -p 8080
      ```

      Luego abrir: http://localhost:8080/PRY_CALCULADORA/index.html

  - Nota: `PRY_CALCULADORA/index.html` ya referencia `public/js/main.js` con `type="module"`. Si el proyecto no carga, asegúrate de usar un servidor HTTP.

- **PRY_ES_MODULES/**
  - Descripción: Ejemplos simples de ES Modules — importación y uso de módulos JavaScript para saludos y despedidas.
  - Archivos clave: `index.html`, `public/js/saludo.js`, `public/js/SaludoPorNombre.js`, `public/js/SaludoPorClase.js`, `public/js/main.js`.
  - Cómo ejecutarlo: Igual que arriba, servir por HTTP y abrir `PRY_ES_MODULES/index.html`.

- **PRY_ESTRCUTURA/**
  - Descripción: Ejemplos de captura de datos desde formularios y componentes en `public/js/components/`.
  - Archivos clave: `index.html`, `captura_datos.html`, `public/js/components/CapturaDatosPersona.js`, `public/js/components/SaludarPersona.js`.
  - Cómo ejecutarlo: Servir por HTTP y abrir `PRY_ESTRCUTURA/index.html` o `captura_datos.html` según lo que quieras probar.

- **PRY_SALUDO_WEB-COMPONENT/**
  - Descripción: Páginas de ejemplo que muestran el uso básico de web components sin Shadow DOM complejo; contiene ejemplos `index.html` y `saludar_persona.html`.
  - Cómo ejecutarlo: Servir por HTTP y abrir los HTML dentro de la carpeta.

- **PRY_SHADOW_DOM/**
  - Descripción: Ejemplos centrados en Shadow DOM y encapsulación; incluye una pequeña demo de suma y una alerta usando componentes con shadow.
  - Archivos clave: `index.html`, `suma_de_dos_numeros.html`, `public/js/SumasDosNumeros.js`, `public/js/AlertaSimple.js`.
  - Cómo ejecutarlo: Servir por HTTP y abrir `PRY_SHADOW_DOM/index.html` o `suma_de_dos_numeros.html`.

## Consejos generales y solución de problemas

- **Uso de ES Modules:** cuando `index.html` incluye scripts con `type="module"`, el navegador cargará módulos vía HTTP(es). Por eso usar un servidor local evita problemas de importación o CORS.

- **Si ves errores tipo "Failed to load module script" o rutas 404 en la consola del navegador:**
  1. Verifica que el `src` del script en `index.html` esté con `type="module"` y la ruta correcta (`./public/js/main.js`).
  2. Asegúrate de servir desde la carpeta raíz del repo o ajustar el server para que la URL corresponda (por ejemplo `http://localhost:8000/PRY_CALCULADORA/index.html`).

- **Cambiar estilos:** Los componentes usan `bootstrap` desde `public/vendor/bootstrap`. No es necesario instalar dependencias externas.

- **Probar rápidamente (comando recomendado desde PowerShell):**

```powershell
cd 'c:\Users\HP\Documents\PROGRAMACION_INTEGRATIVA_COMPONENTES'
python -m http.server 8000
# Abrir en el navegador: http://localhost:8000/PRY_CALCULADORA/index.html
```

## Pasos siguientes (opcional)

- Puedo añadir un `README.md` específico dentro de cada subcarpeta con instrucciones de desarrollo y pruebas automáticas.
- Puedo añadir una pequeña nota sobre las rutas relativas en los `import` si prefieres usar bundlers o deploy en GitHub Pages.

---

Última actualización: 2025-11-07

