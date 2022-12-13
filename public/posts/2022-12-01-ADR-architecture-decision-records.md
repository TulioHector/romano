Como sabemos la arquitectura de una aplicación está basada en el análisis y diseño de requerimientos funcionales y no funcionales. De tal manera, que nos encontramos con los requerimientos arquitectónicamente significantes (ASR Architecturally Significant Requirement) y surgen las daciones de arquitectura (AD).

El registro de las secciones de arquitectura (ADR Architectural Decision Record), son simplemente el modo o manera en que se registran las AD. Las ADR van a documentar las decisiones tomadas junto con su contexto y consecuencias.

Es bastante frecuente encontrarse con los escenarios, en donde el "por qué y el cómo "se encuentran dentro de la cabeza del desarrollador que toma una decisión. Los recién incorporados al equipo se encuentran ante la situación de por qué ciertas cosas se realizaron cierto modo, lo que dificulta describir y contribuir, ya que el conocimiento necesario no está disponible.

Michael Nygard identifico esta problemática y presento el concepto de ADRs.

Las ADR generalmente son un archivo de texto plano que describe una decisión de arquitectura especifica. Estos registros se ven más necesarios para proyectos grandes o distribuidos, especialmente aquellos en los que no hay un solo arquitecto disponible o en los que se incorporan nuevos colaboradores.

## Estructura de un ADR

Las ADRs deben ser concisas y simples. Y se componen en secciones:

- Título: El título contiene una frase corta que describa la decisión de arquitectura
- Estado: Representa un estado de la ADR y pueden ser:
  - Proposed: Este es el estado de propuesto y se considera el inicio.
  - Acceptance: Estado que representa que la ADR fua aceptada por los responsables involucrados.
  - Rejection: Este estado representa que la ADR fue rechazada y que debe revisarse o reemplazarse.
  - Deprecation: Este estado representa que la ADR fue deprecada.
  - Superseding: Este estado representa que la ADR es reemplazada por otra ADR.
- Contexto: El contexto explica por qué necesitamos tomar la decisión. También describe las alternativas junto a sus pros y contras.
- Decisión: La decisión describe la justificación de por qué se aceptó la solución en particular. Esta tiene mucho más énfasis en el "¿Por qué?" que en el "¿Cómo?".
- Consecuencia: Describe la información sobre el impacto general de una decisión de arquitectura. Cada decisión conlleva un trade-off o reducción de funcionalidad o capacidad de nuestro producto con el fin de mejorar otras funcionalidades.

## Cuando escribir un ADR

Se deben escribir siempre que se tome una decisión de impacto significativo. Dependiendo de cada equipo definir el concepto de impacto significativo. Como comienzo, presento algunos escenarios o preguntas con un modelo mental para determinar cuándo escribir un ADR:

- Se plantean las siguientes preguntas.
  - ¿Por qué se tomó esta decisión en particular?
  - ¿Por qué los arquitectos eligieron esta tecnología sobre otra en particular o general?
  - La implementación actual tiene ventajas y desventajas, como por ejemplo un menor rendimiento, entonces, ¿Por qué optaron por este tipo de arquitectura?
- Dentro del ciclo de vida de una aplicación, muchas veces debemos tomar decisiones con un gran impacto, tanto en el diseño, mantenimiento, arquitectura, etc. A medida que evoluciona los requerimientos es posible introducir cambios importantes. En este caso, una forma adecuada es crear la ADR para iniciar la discusión y realizar las revisiones de pros y contras.
- Nos encontramos con decisiones de relleno donde tomamos una decisión o un estándar implícito de forma natural por si solo, pero dado que no se documento nunca queda claro para el resto del equipo, en especial para los nuevos colaboradores. De esta mandra podemos podemos inferir el siguiente pensamiento; que se tomó una decisión y no se realizó la documentación. Por lo tanto, ¿Cómo puede ser un estándar o definición? La mejor manera de identificar una decisión no documentada es por revisión de pares.
- ¿Y si tenemos pequeños cambios? En nuestro día a día, tenemos pequeñas decisiones que tienen poco o ningún impacto. El costo de las decisiones no documentadas resulta difícil de calcular, pero los efectos generalmente infieren esfuerzos duplicados o soluciones que compiten entre sí, como bibliotecas de terceros que hacen los mismo. También hay que considerar que tener muchas decisiones pequeñas puede ser muy problema a futuro, porque requiere un proceso o esfuerzo. Las ADR´s están enfocadas para que sean simples y enfocadas, por lo que no tiene que representar un gran esfuerzo.


## Almacenado de ADR

Las se pueden almacenar dentro del repositorio donde se almacena el código de la aplicación. Puede estar almacenada por servicio, modulo o multi repositorio. Por lo general dentro del repositorio se destina una carpeta llamada "Doc" y dentro de ella "ADR", quedando el path como "doc/adr". Sin embargo, no todo el mundo tiene acceso a estos repositorios, como por ejemplo perfiles como analistas de negocio, producto owners, etc. Por lo tanto, no es una buena opción analizar donde alojar esta información y los accesos.

Para empezar con este tipo de documentación, existen muchos templates. De los cuales van de mayor detalla a algo un poco más simple y conciso. La elección siempre depende las necesidades de cada arquitecto o proyecto.


## Herramientas de ADR

Hay varias herramientas que nos pueden ayudar a administrar las ADR´s. A continuación, les dejo un enlace de una herramienta cli (command-line interface), que estoy desarrollando en node js.

[https://www.npmjs.com/package/adr-cli](https://www.npmjs.com/package/adr-cli)

Si sientes que has extraído algún valor del contenido de este articulo, considera colaborar con la compra de café. ¡Gracias!

[ko-fi](https://ko-fi.com/hectorromano)