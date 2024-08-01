---
title: "¿Por qué elegí Astro?"
description: "Mi experiencia con Astro."
pubDate: 2024-07-31
category: "frontend"
author: "Lucas Videla"
image: "https://cdn.buttercms.com/xrVbfdR5TBy4iTaY4xl7"
---

## Introducción

*Astro* es un moderno framework de frontend que he encontrado increíblemente útil y agradable para trabajar. O al menos así es descrito por la comunidad frontender. En el siguiente artículo voy a dar mis impresiones.

## ¿Qué es Astro?

Para las personas que no están familiarizadas, *Astro* es un framework que te permite construir sitios web rápidos y modernos. Se enfoca en la generación de sitios estáticos, aunque también soporta contenido dinámico. Generalmente, cuando uno escucha de Astro, lo que se le viene a la mente es generación de sitios estáticos como un blog, una página portfolio o una landing page, y ese fue el enfoque inicial. ¡Y qué bueno que lo crearon! Astro es increíble en lo que hace y en lo que se propone.

Si bien su enfoque no busca reemplazar frameworks como Next.js, Angular, Nuxt y cualquier otro framework que haya sido creado en la actualidad, estos frameworks están enfocados para las SPA (Single Page Application), pero Astro no tiene nada que envidiarles a sus competidores. En breve veremos por qué.

## Experiencia inicial

Como programador que va y vuelve (front al back, no me gusta el término full stack), me encuentro constantemente en búsqueda de una experiencia de desarrollo fluida. Lo más cercano que tenía a esto era Vite + React Router Dom, con su facilidad para desarrollo, un bundle size inicial pequeño (se puede mejorar) y un modo de desarrollo tan rápido que da gusto codear ahí.

En cuanto a frameworks que vienen con todo lo necesario para codear, probé Next.js y no entiendo el hype. Si es muy cómodo para muchas cosas y, sin lugar a dudas, el App Router es una innovación con la funcionalidad de layouts, pages y los React Server Components (esto último es genial). Siempre me encontré con el mismo problema: una experiencia de desarrollo lenta y tediosa, con muchas dependencias y mucha abstracción para el desarrollador, que quizás a algunas personas no les molesta, pero a mí sí.

En mi viaje por encontrar una buena experiencia para codear, me topé con Astro que me llegó por medio de influencers tech dentro de YouTube, el gran Midudev, así es. Lo primero que vi era la facilidad de la utilización de componentes con un router ya configurado, ¡qué genialidad! ¿Quieres CSS scopeado para el componente? Fácil, crea una etiqueta de estilos y ya es local al componente, no sobreescribe nada. Lo mismo pasa para el JavaScript. Esto hace la creación de componentes más modular que nunca (estilos, interactividad y HTML dentro del mismo archivo).

Otra cosa genial fue la creación de endpoints. Para este mismo blog tuve que crear mi propio servicio de envío de correos, lo cual fue tan sencillo como crear el endpoint (archivo dentro de la carpeta api) y consumirlo dentro del mismo form, y listo. Obviamente, al tener un enfoque puramente estático, uno no quiere que sea estático el endpoint, así que hay que configurar cosas, pero no hay nada que la documentación de Astro no resuelva.

Ese es otro punto genial: la documentación está super completa y de fácil acceso, se la mantiene actualizada constantemente y es algo que da gusto (cof cof te estoy viendo a vos React cof cof).

### Facilidad de configuración

Desde que entras a la documentación ya sabes qué hacer: solo correr el `npm create astro@latest` (prefiero pnpm por cierto, o Bun), respondes las preguntas que te hace el CLI y ya estás para correr `pnpm run dev`. Y listo, ya está configurado el repo (obvio hay que agregar las env y si quieres ponerle Tailwind es tan fácil como seguir la doc de Tailwind para Astro) y listo para codear.

### Rendimiento

Uno de los aspectos más destacados para mí ha sido el rendimiento. Gracias a la generación de HTML estático y al enfoque en la entrega de contenido optimizado, los tiempos de carga son increíblemente rápidos.

Una de las cosas que me gusta más y que destaca muchísimo es el rendimiento. Gracias al enfoque principal en HTML estático, la carga es muy, muy rápida y la DX (Developer Experience) es rapidísima. Hice mis propias pruebas tanto en proyectos de HTML simples como en proyectos más trabajados (repositorios open source hechos con Astro) y funciona muy bien en contraposición de sus competidores... Next, te estoy mirando. Obviamente, todavía para lo que es SPA está verde, pero Astro no pretende eso. Tiene un problema y lo busca resolver, tan simple como eso.

### Flexibilidad

La capacidad de usar componentes de diferentes frameworks es otro punto fuerte. Esto me permite aprovechar lo mejor de cada tecnología sin comprometer la coherencia del proyecto.

## Características favoritas

Una de las cosas que más me gusta es que es agnóstico para la UI. ¿Estás acostumbrado a React? Puedes usar cualquier framework de UI. También me gusta cómo evita usar el cliente a no ser que sea necesario para reducir el cómputo y enfocarse en el lado server-side.

### Principios

La documentación oficial dice que los principios fundamentales de Astro son: diseñado para destacar al contenido, que sea server-first, que sea rápido por defecto, que sea fácil de usar y que esté enfocado para los developers. Estos principios sonarán repetitivos en el entorno web, pero son reales o al menos eso buscaron los creadores de Astro para resolver. Para una mayor profundidad de los principios, revisar la [documentación oficial](https://docs.astro.build/es/concepts/why-astro/).

### Herramientas y plugins

Si bien para este portfolio no hice uso de varios plugins (solo el de MDX), hay un ecosistema completo y creciente creado por y para la comunidad.

### Arquitectura

Ahora la cereza: la arquitectura de islas. Haciendo referencia a la documentación provista por patterns.dev, es definida así: "La arquitectura de islas fomenta pequeños y enfocados fragmentos de interactividad dentro de páginas web renderizadas en el servidor. La salida de las islas es HTML mejorado progresivamente, con más especificidad sobre cómo ocurre dicha mejora. En lugar de que una sola aplicación tenga el control del renderizado de toda la página, hay múltiples puntos de entrada. El script para estas 'islas' de interactividad puede entregarse e hidratarse de manera independiente, permitiendo que el resto de la página sea simplemente HTML estático."

Para Astro, cuando hablamos de Islas nos referimos a cualquier componente de UI interactivo en la página, que convive con el otro HTML estático. Cada isla se ejecuta por sí sola y no depende de las otras, al igual que los componentes. Todas pueden vivir en armonía y comunicarse entre ellas.

¿Por qué se aboga por este tipo de arquitectura? No es solo por sencillez y por modularización, sino por el rendimiento. Este enfoque es gracias a la generación de HTML estático y la separación que permite cargar el JavaScript solo cuando se lo necesita, esto es genial.

## Conclusión

En resumen, mi experiencia con Astro ha sido extremadamente positiva. Es un framework que recomiendo para aquellos que buscan una solución moderna y eficiente para sus proyectos web. Planeo seguir explorando sus capacidades y aprovechar al máximo lo que ofrece.

Para resumir, mi experiencia codeando con Astro fue muy buena y estoy seguro de que voy a tenerla como prioridad para sitios estáticos. Lo recomiendo tanto para devs experimentados como para personas que inician en el mundo del frontend (hasta que la IA nos quite toda la diversión, jaja). Tengo la idea de seguir explorando sus capacidades tanto para otros sitios como para mantener este sitio y ajustar varias tuercas, pero por ahora estoy satisfecho.

## Referencias

- [Documentación oficial de Astro](https://astro.build)
- [Ejemplos de proyectos con Astro](https://github.com/withastro/astro/tree/main/examples)
- [Arquitectura de Islas en patterns.dev](https://www.patterns.dev/posts/islands-architecture)

## ¡Gracias por leer!
