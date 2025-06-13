# Fundamentos de Javascript

Proyecto que contiene ejemplos de fundamentos de Javascript, desde lo mas basico, hasta temas ligeramente avanzados

# Requisitos

- [Node.js](https://nodejs.org/) instalado (v18 o superior recomendado)
- [npm](https://www.npmjs.com/)


# Instalaciones

- Para crear el `package.json`, en la terminal pondremos el siguiente comando:
```bash
npm init -y
```

- Luego para tener `node_modules` y `package-lock.json` pondremos el siguiente comando:
```bash
npm install
```
`Nota:` *node_modules* nos sirve para importar y exportar, tanto en CommonJs y en ESM

# Instalacion local de tailwindcss

#### Estructura de los archivos

Primeramente nos ubicaremos en la carpeta donde pondremos los comandos para usar tailwindcss:
```bash
fundamento-Js-a-Ts/
├── Ejmplos/
│   └── DOM/ <-----------------"Ubicacion donde se instalara tailwind"
│       └── ejemplo-1/ 
│           ├── script.ts <--- "Archivo vacio"
│           └──index.html <--- "Archivo vacio"
│         
```

#### Instalacion de Tailwindcss V3
En la terminal pondremos los siguientes comandos:
```bash
npm init -y
```
Nos generar el `package.json`


```bash
npm install -D tailwindcss@3 postcss autoprefixer
```
Esto nos creara `node_modules` y `package-lock.json`


#### Inicializacion y configuracion

1. **Iniciamos tailwind:**
En la terminal pondremos el siguiente comando:
```bash
npx tailwindcss init -p
```
Esto nos creara dos archivos:
- tailwind.config.js
- postcss.config.js

2. **Configuracion de tailwind.config.js:**
En el bloque de content pondremos correctamente las ubicaciones de los archivos `.html` y `.js`
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./ejemplo-*/**/*.html", "./ejemplo-*/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3. **Creamos src:**
Ahora en la raiz de DOM creamos la carpeta de `src` y dentro creamos el archivo `input.css` que tendra el siguiente codigo:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
---
##### Hasta aqui tiene que quedar asi:
```bash
fundamento-Js-a-Ts/
├── Ejmplos/
│   └── DOM/
│       └── ejemplo-1
│       └── node_modules
│       └──src
│       │    └── input.css
│       └── package-lock.json
│       └── package.json
│       └── postcss.config.js
│       └── tailwind.config.js
│         
```
---


4.**Configuracion de package.json:**
Agregamos el siguiente script para compilar tailwind
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build:css": "tailwindcss -i ./src/input.css -o ./dist/output.css --watch"
  },
```

5. **Iniciar tailwindcss:**
En la termimal pondremos el siguiente comando:
```bash
npm run build:css
```
Esto nos agregara una carpeta `dist` con el archivo de `output.css`

##### Warn:
- Una vez puesto `npm run build:css` lo mas probable esque nos salga esto:
```bash
warn - No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.
warn - https://tailwindcss.com/docs/content-configuration
```
- Para solucionarlo iremos a nuestro archivo `index.html` que esta en `ejemplo-1` donde enlazaremos el `output.css`

```html
<head>
  <title>Ejemplo 1</title>
  <link href="../dist/output.css" rel="stylesheet"/>
</head>
```
- Y agregamos tailwindcss a una etiqueta para ver si todo esta correcto

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Ejemplo 1</title>
  <link href="../dist/output.css" rel="stylesheet">
</head>
<body class="bg-blue-100 p-4">
  <h1 class="text-2xl font-bold text-center text-blue-600">Hola Tailwind</h1>
</body>
</html>
```
- Ahora nuevamente pondremos en la terminal `npm run build:css`, donde si todo esta bien tendria que salirnos:

```bash
npm run build:css

> dom@1.0.0 build:css
> tailwindcss -i ./src/input.css -o ./dist/output.css --watch


Rebuilding...

Done in 457ms.
```

#### Estructuracion final de como deberia quedar todo

---
```bash
fundamento-Js-a-Ts/
├── Ejmplos/
│   └── DOM/
│       └── dist/
│       │    └── output.css
│       └── ejemplo-1/
│       │    └── index.html
│       │    └── script.js
│       └── node_modules
│       └──src/
│       │    └── input.css
│       └── package-lock.json
│       └── package.json
│       └── postcss.config.js
│       └── tailwind.config.js
│         
```
---


