---
layout: ../../layouts/BaseLayout.astro
title: Componentes
---

# Componentes

Los componentes sirven pa reutilizar partes de una pagina.

Por ejemplo, si tenemos un encabezado que aparece en varias paginas no tiene sentido escribirlo una y otra vez.

Podemos crear un componente llamado Header.astro.

Ejemplo:

```astro
<header>
  <h1>Mi Manual Astro</h1>
</header>
```

Luego simplemente lo importamos donde lo necesitemos.

```astro
<Header />
```

Algo parecido pasa con el Footer o el menu de navegacion.

Es como construir con bloques de Lego, cada pieza tiene una funcion especifica y despues las unimos.