---
layout: ../../layouts/BaseLayout.astro
title: Instalación de Node.js
---

# Instalación de Node.js

Node.js es una herramienta que permite ejecutar JavaScript fuera del navegador. Astro depende de Node.js pa funcionar correctamente.

Lo primero que hice fue actualizar los repositorios:

```bash
sudo apt update
```

Despues instalé Node.js y npm:

```bash
sudo apt install nodejs npm
```

Cuando terminó la instalacion verifiqué que todo estuviera bien:

```bash
node -v
npm -v
```

Si aparecen numeros como por ejemplo:

```bash
v22.0.0
10.5.1
```

significa que la instalacion fue exitosa.

Un pequeño consejo es reiniciar la terminal despues de instalarlo porque a veces Linux se pone medio raro y no detecta los cambios inmediatamente.