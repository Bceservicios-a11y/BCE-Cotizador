# Cotizador de BCE Servicios Digitales

Base de un proyecto web estático con HTML, CSS y JavaScript, sin dependencias ni proceso de compilación.

## Estructura

```text
bce-cotizador/
├── index.html           # Página inicial
├── css/styles.css       # Estilos y variables visuales
├── js/main.js           # Punto de entrada de JavaScript
├── assets/
│   ├── images/          # Imágenes
│   └── icons/           # Iconos
├── .editorconfig       # Convenciones de edición
├── .gitattributes      # Normalización de archivos en Git
├── .gitignore          # Exclusiones de Git
└── README.md
```

## Ejecutar localmente

Abre `index.html` en tu navegador. Esta versión funciona directamente desde el sistema de archivos y no requiere instalar paquetes.

## Estado inicial

- Página de presentación adaptable a móvil y escritorio.
- HTML semántico, enlace para saltar al contenido y estilos de foco.
- Año del pie de página actualizado mediante JavaScript.
- Carpetas de recursos conservadas en Git mediante `.gitkeep`.
- Sin catálogo, precios ni cálculos todavía.
- Sin conexiones externas, despliegue ni publicación.

## Versionado

El repositorio local está inicializado con la rama `main`. Para crear el primer commit, desde esta carpeta:

```sh
git add .
git commit -m "chore: estructura inicial del cotizador BCE"
```

No hay un repositorio remoto configurado. Configura tu nombre y correo en Git si aún no lo has hecho.

## Próximos pasos

1. Definir servicios, moneda, tarifas e impuestos aplicables.
2. Diseñar el formulario y el resumen de cotización.
3. Incorporar validación y reglas de cálculo.
4. Definir si se necesita guardar o exportar cotizaciones.

La paleta y la tipografía actuales son provisionales, pendientes de la identidad visual definitiva.
