
Dentro de los enfoques tradicionales de arquitectura, se sostiene que los elementos de una arquitectura eran "difíciles de cambiar después". Donde la realidad termina sobrepasando a la arquitectura provocando una distancia entre lo esperado y lo que se obtiene. Una arquitectura evolutiva plantea un diseño de cambios incrementales en la arquitectura. En el libro (Neal Ford, Building Evolutionary Architectures, 2017). Este nuevo enfoque permite que la arquitectura se adapte desde un principio a la realidad.

En la actualidad, ya no es posible encasillar una arquitectura en el contexto "es difícil de cambiar". Especialmente hoy en día que todo está inspirado en metodologías agiles, los requerimientos funcionales, no funcionales y atributos de calidad cambian rápidamente. Acá es donde entra en juego el concepto de arquitectura evolutiva. Soportando cambios guiados, continuos e incrementales como primer principio a largo plazo entre muchas dimensiones.

Una arquitectura evolutiva se divide en 3 aspectos principales:

- Cambio incremental
- Funciones de Aptitud (Fitness Functions)
- Acoplamiento apropiado

Siendo características criticas dos de ellas; Cambio incremental y cambios guiados a través de múltiples dimensiones. Siendo las dimensiones las siguientes:

- Técnico: Las partes de implementación de la arquitectura. Los frameworks, librerías de dependencias, lenguajes de implementación, etc.
- Información / Datos: Bases de datos, tablas, etc. El administrador de la base de dato es quien maneja este tipo de arquitectura.
- Seguridad: Políticas de seguridad, pautas y herramientas específicas para ayudar a descubrir deficiencias.
- Operacional / Sistema: Refiere a como la arquitectura se asigna a la infraestructura física y/o virtuales existentes; servidores, cluster de máquinas, recursos en la nube, comunicaciones, etc.

Cada una de estas perspectivas forma una dimensión de la arquitectura, una parte intencional que soporta una perspectiva particular.

Refiriéndose al entorno donde se despliega y donde se ejecuta, comenzado a evolucionar. Así, es como aparecen nuevos problemas inesperados, como, por ejemplo; la necesidad de mantener con vida versiones incompatibles de sistemas.

Esto se debe a que los cambios de software realmente tienen dos orígenes. Por un lado, están los cambios relacionados al modelo de negocio (los famosos requerimientos) donde existen herramientas para gestionarlos dentro del proyecto. Pero, además hay otros tipos de cambios que son generalmente ignorados; los cambios en el ecosistema donde funciona y ejecuta el software. Donde podemos observar como el entorno donde se despliega el software no es estático, si no que va evolucionando con su propia velocidad y de manera independiente.

## **Atributos de calidad**

Como ya se habló anteriormente, los atributos de calidad son requerimientos no funcionales para evaluar el rendimiento de un sistema. Estos atributos de calidad se denominan "-ilidades", debido al sufijo que la mayoría de estos términos comparten. Estos atributos son representados por los requerimientos que requieren la atención de los arquitectos. Ver lista de [atributos de calidad](https://en.wikipedia.org/wiki/List_of_system_quality_attributes).

Un atributo nuevo que se puede destacar es el de "Evolucionabilidad". Este atributo de calidad se encuentra presente en los sistemas genéticos. Y define o refiere a la capacidad de un sistema a la evolución adaptativa. Como definición del atributo "Evolucionabilidad", es la habilidad de una población de organismos de no solamente generar diversidad genética, sino generar diversidad genética adaptativa y así evolucionar a través de la selección natural.

Haciendo una relación, si los sistemas se crean en la mente de los desarrolladores, la evolución debería ocurrir a partir del segundo y/o posteriores sistemas que cree. Y esto vienen relacionado con el "Síndrome del segundo sistema" explicado en el libro de Fred Brooks (The Mythical Man-Month: Essays on Software Engineering, 1975), [Wiki link](https://es.wikipedia.org/wiki/El_M%C3%ADtico_Hombre-Mes#El_efecto_Segundo-Sistema).

Dentro de la arquitectura evolutiva, el atributo Evolucionabilidad es una característica, una envoltura arquitectónica que protege las demás características arquitectónicas. Pero que también guía las decisiones en otros atributos de calidad.


## **Cambio incremental**

El camio incremental se refiere a los equipos que construyen de forma incremental, y su despliegue. Esto es parte del ADM (Application Lifecycle Magament). Donde la primera parte se puede cubrir usando la técnica de desarrollo Extreame programing (EX.). Mientras que la segunda se puede cubrir implementado prácticas de CD Continuos Delivery.


## **Fitness functions (funciones de aptitud)**

A medida que la arquitectura va evolucionando, necesitamos mecanismos que evalúen los cambios y como afectan esos cambios a las características de la arquitectura y evitar así la degradación de esas características en el tiempo.

Las funciones de aptitud abarcan una variedad de mecanismos que emplearemos para garantizar que la arquitectura no cambie en el tiempo de forma indeseable, como métricas, pruebas y otras herramientas de verificación.

Estas funciones de aptitud comprueban de forma objetiva un atributo de calidad de la arquitectura. Por ejemplo; una suite de unit test que comprueban que el sistema cumpla con las necesidades del negocio en cuanto a características. Otro ejemplo; Test para detectar dependencias circulares, siendo una prueba atómico, automatizado y estático. Otro ejemplo; una prueba de build cycle time esté por debajo del doble del build time medio, siendo una prueba holística, automatizada y estática.

Supongamos que nos solicitan diseñar una arquitectura para una solución que tenga "buen rendimiento", para esto hacemos uso de las funciones de aptitud (fitness function) que va a definir qué significa "buen rendimiento", creando un mecanismo de control que verifique en cada nueva versión de la aplicación que las operaciones o transacciones más importantes no tomen más de medio segundo en ser ejecutadas; esta función de aptitud puede ser ejecutada en el proceso de integración continua antes de liberar una nueva versión a producción.

Por otro lado, si buscamos que sea mantenible entendiendo que para esto es crear una arquitectura en capas donde buscamos donde solo tengamos dependencias en una sola dirección, debemos crear una función de aptitud que verifique las dependencias entre paquetes y que sean las que se hayan definido.

Es por esto por lo que al momento de construir arquitecturas evolutivas debemos soportar un cambio incremental y guiado a lo largo de múltiples dimensiones, sabiendo hacia donde estamos guiando el cambio y es en este momento donde las funciones de aptitud cumplen un rol principal. Ya que son controles que nos permiten identificar si las características principales de la arquitectura se están preservando al mismo tiempo que la arquitectura evoluciona. Dicho de otro modo. Las funciones de aptitud nos permiten identificar si una arquitectura está evolucionando hacia dónde queremos que evolucione.

Por último, las funciones de aptitud se pueden caracterizar a través de distintos ejes o categorías:

| Atómico & Holístico | Las fitness functions atómicas se ejecutan contra un contexto singular y ejercitan un aspecto particular de la arquitectura. Las fitness functions Holísticas se ejecutan contra un contexto compartido y ejercitan una combinación de aspectos arquitectónicos como seguridad y escalabilidad. Ejemplo: la prueba unitaria comprueba el sistema de forma atómica. La prueba de humo en producción comprueba el sistema de forma holística. |
| --- | --- |
| Triggered vs Continuo | Las Triggered fitness functions se ejecutan basadas en un evento particular, como puede ser un programador ejecutando una prueba unitaria, una deployment pipeline ejecutando pruebas unitarias o un QA realizando un testing exploratorio. Los tests continuos no se ejecutan de forma programada, y en su lugar ejecutan verificaciones constantes de aspectos arquitectónicos como la velocidad de transacción. Ejemplo: unas pruebas unitarias se disparan en un nuevo commit. El site sigue activo en un test continuo, ejecutado cada x minutos/segundos. |
| Estático vs Dinámico | Las fitness functions estáticas tienen un resultado fijado, como puede ser aprobado/fallado en un test unitario binario. Las fitness functions dinámicas confían en una definición cambiante basada en contexto extra. Ejemplo: la unit test suite es estática. Contar el número de TODOs (to do comments) en la fuente es dinámico, donde marcas un máximo (actual) y disminuye la cuenta a medida que pasa el tiempo. No permites que nuevos TODOs entren en el código. |
| Automatizado vs Manual | fitness functions en un entorno automatizado: integración continua, deployment pipelines, etc. Ejemplo: la unit test suite debería estar automatizada. Comprobar la experiencia de usuario (UX) de una interfaz puede ser manual. |
| Intencional vs Emergente | Intencionales son fitness functions al comienzo del proyecto mientras se dilucidan las características de la arquitectura. Emergentes son algunos fitness functions emergerán durante el desarrollo del sistema. |
| Domain-specific | Algunas arquitecturas tienen preocupaciones específicas, como seguridad especial o requerimientos regulatorios. Ejemplo: no se ha logueado ninguna información de tarjeta de crédito en el sistema, para cumplir con las regulaciones y auditorías PCI. |
| Temporal | construir un componente temporal para evaluar fitness. Ejemplo: "break upon upgrade test" (una fitness function que se ejecuta cuando las dependencias de un proyecto cambian). |

A continuación, se muestra un ejemplo de cómo representar las funciones de aptitud de una arquitectura evolutiva.

![](/assets/posts/2/fitnes-function.webp)

El análisis previo de que función de aptitud debería existir en un sistema particular, proporciona direccionamiento en la toma de decisiones y su planificación en el tiempo. Las decisiones de arquitectura son evaluadas en relación con las funciones de aptitud de tal manera que podamos verificar que la arquitectura está evolucionando en la dirección correcta.


## **Cómo ocurren las decisiones**

La mayor diferencia entre la arquitectura tradicional y la evolutiva es justamente cuando ocurren las decisiones. Estas decisiones pueden ser sobre la estructura de la aplicación, la pila de tecnología, herramientas especificas o patrones de comunicación. En la arquitectura tradicional estas decisiones se toman de forma temprana, antes de escribir código más precisamente. En una arquitectura evolutiva, esperamos hasta el último momento responsable para tomar decisiones. El beneficio de tomar de forma retrasada la decisión es la información adicional disponible para tomarla. El costo asociado es el de cualquier posible retrabajo que tiene que ocurrir una vez que la decisión fue tomada, que puede ser mitigado a través de las abstracciones apropiadas (el costo sigue siendo real). Sin embargo, el costo de tomar una decisión demasiado temprano es también real.

Esto no quiere decir que deberíamos abstraer todas las cosas de forma anticipada (nos apoyamos en el principio ágil YAGNI, You Ain´t Gonna Need It) sino para optar por un intento informado y tomar la decisión en un momento más adecuado.


## **Planificación a largo plazo**

Como sabemos, en los ecosistemas biológicos, el medio ambiente cambia constantemente tanto por causas naturales y causas humanas. Dado que, aunque se traten de sistemas, lo que implica cierto orden intrínseco en sí mismo, es que son sistemas abiertos al cambio. Es decir, que los ecosistemas tienden tienden al equilibrio de forma natural, pero que, si aparece un nuevo elemento o agente que modifique el equilibrio, se genera un cambio en el ecosistema y esta tendera a asumirlo como propio e intentar adaptarse a dicho cambio. No obstante, el éxito o fracaso a la hora de adaptarse a dicho cambio será el que determine la supervivencia del ecosistema en su conjunto.

De esta forma, son los elementos nuevos los que permiten que se lleven a cabo los cambios en los ecosistemas. En este sentido, un elemento nuevo puede ser una nueva enfermedad que afecte a una parte de la cadena trófica, lo que haría, aunque solo se afecte a una especie, se vea afectado todo el ecosistema en su conjunto por el efecto domino que eso genera. O también se puede dar un cambio en un ecosistema por algo tan sencillo como cambios climáticos en el entorno que modifiquen la presencia de precipitaciones, haciendo que haya mayor o menor cantidad de vegetación.

Uno de los factores que hay que tener en cuenta al momento de que se den cambios en el ecosistema es que, cuanto más lentos sean dichos cambios, más posibilidades tendrá el ecosistema de sobrevivir a dichos cambios, ya que tendrá más posibilidades de adaptarse con éxito a la nueva tesitura. Por el contrario, si los cambios se manifiestan de forma muy rápida, es probable que muchas especies sean incapaces de adaptarse a las nuevas modificaciones y, en consecuencia, podrán llegar a extinguirse o desaparecer de dicho ecosistema.

Dentro de un ecosistema de desarrollo de software este compuesto de herramientas, marcos de trabajo, bibliotecas y mejores prácticas: el estado del arte acumulado en el desarrollo de software. Este ecosistema forma un equilibrio, muy similar a un sistema biológico, que los desarrolladores pueden entender y construir cosas dentro del ecosistema. Sin embargo, este equilibrio es dinámico: constantemente aparecen cosas nuevas, que alteran inicialmente el equilibrio hasta que surge un nuevo equilibrio. Imagine a una persona caminando y transportando unas cajas de un punto a otro. Esto en física se lo conoce como equilibrio dinámico, por que la persona va a estar manteniendo un equilibrio al caminar, evitando obstáculos en su camino y/o eventos que puedan hacer perder el equilibrio y que las cajas se caigan.

![](/assets/posts/2/balance.webp)

En el ecosistema de desarrollo de software, cada innovación o practica puede alterar el statu quo, obligando a generar un nuevo equilibrio. Siguiendo el ejemplo anterior, seguimos cargando cajas a la persona que las transporta, obligándola a regenerar un nuevo equilibrio.

En muchas maneras, los arquitectos se parecen a la persona que transporta las cajas, constantemente se encuentran equilibrándose y adaptándose a las condiciones de cambios dinámicos. Las prácticas de CI (Continuous Delivery) representa un cambio en el equilibrio: la incorporación de funciones anteriormente aisladas, como las operaciones, dentro del ciclo de vida de desarrollo de software permitió nuevas perspectivas sobre el significado del cambio. Los arquitectos empresariales ya no pueden confiar en planes estáticos a futuro, por ejemplo, a 5 años, porque todo el universo de desarrollo de software evolucionara en ese periodo de tiempo, lo que lograra que a cada decisión a largo plazo sea potencialmente discutible.


## **Degradación de la arquitectura en el tiempo**

Para poder entender este concepto debemos acuñar el termino de "bit rot", que refiere a la deterioro o degradación de los componentes dentro de una arquitectura con el paso del tiempo. Por ejemplo; este término es a menudo utilizado para describir como gradualmente se va transformando el código en incorrecto debido a cambios en la interface del código activo que es requerido dentro de un código incorrecto.

O sea que, un programa puede funcionar perfectamente durante años sin ningún problema y luego comenzar a funcionar de manera incorrecta sin ninguna razón aparente. A este tipo de fallas se las conoce como "bit rot".

Los arquitectos debemos lidiar con esta degradación accidentales y eventuales a través del tiempo. Para lidiar con esta degradación, debemos agregar la capacidad de evolucionar la arquitectura y proteger las características principales o importantes a medida que el sistema evoluciona en el tiempo.

Detrás del concepto de arquitectura evolutiva, se desarrollan mecanismos que sirven para proteger las características importantes de la arquitectura. Esto se basa en definir arquitecturas que no tienen un estado final y están diseñadas o preparadas para evolucionar junto con el ecosistema de desarrollo de software en constante cambios, que incluyen protecciones integradas a las características importantes de la arquitectura. Si no que, nos enfocamos en las definiciones actuales para agregar tiempo y cambiar los elementos arquitectónicos para un análisis posterior.


## **Katas**

En el siguiente enlace podemos ingresar a un sitio con distintos katas para practicar las arquitecturas por medio de las funciones de aptitud. En el sitio se encuentras las reglas para practicar estos katas: [Building Evolutionary Architecture Katas](http://evolutionaryarchitecture.com/ffkatas/index.html).


Si deseas leer más artículos interesantes sobre tecnología, asegúrate de visitar su sitio web en [mi blog](https://romanohector.vercel.app/).
Si sientes que has extraído algún valor del contenido de este articulo, considera colaborar con la compra de café. ¡Gracias!

[ko-fi](https://ko-fi.com/hectorromano)