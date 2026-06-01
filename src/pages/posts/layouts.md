---
layout: ../../layouts/BaseLayout.astro
title: Layouts
---

# Layouts

Los layouts ayudan a mantener una estructura comun entre todas las paginas.

Por ejemplo, si todas las paginas tienen Header, Footer y Menu, podemos colocarlos en un Layout.

Ejemplo:

```astro
<Header />
<slot />
<Footer />
```

La etiqueta slot permite que cada pagina inserte su contenido en ese espacio.

Gracias a esto el codigo queda mas organizado y mas facil de mantener.

Ademas evita repetir muchas lineas innecesarias.