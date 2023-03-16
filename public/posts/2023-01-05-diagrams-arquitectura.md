
En este articulo voy a explicar los distintos tipos de diagramas para tener en cuenta a la hora de presentar una arquitectura compleja. Esto se debe, a que, en determinado momento las palabras que usamos para explicar una arquitectura conceptual se dispersan cuando la audiencia trata de seguir un modelo mental y seguir un hilo de pensamiento al mismo tiempo. En estas situaciones, son de ayuda distintos diagramas para visualizar las ideas conceptuales y complejas. Los diagramas de arquitecturas no suelen ser adecuadas para distintos perfiles de audiencias. Por este motivo, los diagramas que se crean deben transmitir una misma idea a distintos grupos de personas. Como arquitectos debemos proporcionar el tipo de diagrama correcto a las personas adecuadas al realizar la presentación de la solución.
A continuación, les voy a comentar 5 tipos de audiencias y por ende sus diagramas propuestos sobre un ejemplo de un negocio ficticio.

## Diagrama de flujo

Este diagrama “Diagrama de flujo de arquitectura” es el más genérico y generalmente de mayor alcance. Es un diagrama de nivel medio a alto nivel que muestra todas las piezas / componentes / artefactos de un flujo de trabajo.
Este diagrama muestra los movimientos de las partes en el proceso de negocio.

![](/assets/posts/4/diagrama1.webp)

# Audiencia:
La audiencia para este tipo de diagrama es generalmente técnica. Es usado para presentar una idea a otros arquitectos o explicar un proceso comercial a un desarrollador.
 
# Consideraciones:
El componente principal del diorama de flujo de la arquitectura es la inclusión de todas las partes móviles. En el caso de nuestro ejemplo, indicamos los componentes que intervienen y como se comunican entre sí. En el caso de estar en un entorno Cloud como Azure o AWS, debemos etiquetar cada servicio administrado y cuales se comunican entre sí.
No se describen detalles sobre como las piezas o componentes interactúan entre sí, pero el diagrama muestra las conexiones. Muestran como fluyen los datos a través del sistema.
 
 
## Diagrama de servicios
Un diagrama servicios de arquitectura muestra la conectividad desde un alto nivel. No muestra ningún detalle sobre cómo funciona un flujo de trabajo o el servicio, sino que muestra las principales piezas o componentes. Es un diagrama destinado a mostrar los servicios internos frentes a los externos que se utilizan en el sistema / aplicación.

![](/assets/posts/4/diagrama2.webp)

# Audiencia:
Los ingenieros de IT y redes / telecomunicaciones están más interesados en este tipo de diagramas. Se preocupan por cualquier conexión que se haga con servicios externos. Además, necesitan saber si es necesario monitorear alguna conectividad interna. Este diagrama se utiliza también para mostrar cómo funcionan los sistemas a los ejecutivos. Quieren conocer las conexiones entre las principales aplicaciones y este diagrama de servicios cumple con la necesidad de representar las conexiones.
 
# Consideraciones:
Al crear un diagrama de servicios de arquitectura, es bueno enumerar todos los microservicios que componen su aplicación o ecosistema. Etiquetando que servicios se comunican entre sí y asegurase de distinguir entre los servicios que posean internamente y los servicios de terceros o externos.
Los detalles como funcionan los servicios no son necesarios para este diagrama de alto nivel. Se trata de los servicios que hacen que una aplicación se ejecute o funcione.
 
## Diagrama de personas
Como en cada arquitectura planteada es necesario e importante demostrar que resuelve el problema empresarial o comercial y que puede cumplir con los requerimientos necesarios. Un diagrama de persona (basado en diagrama de actividad) describe una cronología y actores en un flujo de trabajo particular. Esta es una buena herramienta para demostrar que se ha tenido en cuenta el negocio al momento de plantear y desarrollar la arquitectura.

![](/assets/posts/4/diagrama3.webp)

# Audiencia:
Las personas orientadas a negocios y los propietarios de los productos son los interesados en este tipo de diagrama. Se centran en las personas y en como interactúan con el sistema. Mostrarles un gráfico de quien hace que y cuando describirá perfectamente lo que está haciendo su sistema.
 
# Consideraciones:
Este diagrama se sumerge un poco en un modelo BPMN. Utilizando una notación de carriles o filas para mostrar los diferentes actores en un flujo de trabajo. Este tipo de diagramas tiende a ser de nivel inferior, ya que incluye más detalle que los demás.
Asegurando de etiquetar a las personas / actores, el flujo de trabajo, y cualquier suposición de cómo el proceso empresarial pasa de un paso al otro.
Estos diagramas también ayudan a los desarrolladores que son nuevos en un dominio y ofrecen un contexto revelador sobre lo que estarán construyendo.
 
## Diagrama de infraestructura
El diagrama de infraestructura representa un modelo de “lo que ves es lo que obtienes”. Representa todo lo que se ha implementado. Es un diagrama de bajo nivel que incluye todo lo relacionado con en un servicio / aplicación / ecosistema.
El propósito de este diagrama es representar lo que se ha construido y como funciona actualmente el sistema. Se considera este diagrama como un plano de la aplicación que se construyó o a construir.

![](/assets/posts/4/diagrama4.webp)
 
# Audiencia:
La audiencia de un diagrama de infraestructura es variada. Se utiliza para ilustrar a los desarrolladores con que tienen que trabajar. También se puede usar para mostrar a un cliente todos los recursos que utiliza la empresa para realizar una tarea.
Los más interesados serán los perfiles más técnicos. Dado que proporciona un inventario y no una idea o proceso comercial.
 
# Consideraciones:
Al crear un diagrama de infraestructura, no omita ninguna pieza o componente. El objetivo de este diagrama es mostrar todo lo relacionado con la aplicación y como se interconectan cada parte. No es necesario que se describan detalles sobre el funcionamiento, sino que se debe concentrar en incluir todas las piezas de la aplicación en el diagrama.
Estos diagramas muchas veces requieren una gran cantidad de trabajo para mantenerlos.
 
## Diagrama de desarrollo
Este diagrama de desarrollador incluye todo lo necesario para construir la solución.
El objetivo de este diagrama es responder a cualquier pregunta que pueda surgir observando un diagrama de flujo e incluirla en el diseño. Este es el diagrama de más bajo nivel y está destinado a transmitir la idea sin la presencia de un arquitecto.
EL desarrollador debería poder leer este diagrama y saber que exactamente qué hacer.

![](/assets/posts/4/diagrama5.webp)

# Audiencia:
Los desarrolladores que van a implementar la solución. El nivel de detalle representado en este diagrama es innecesario para personas ajenas al equipo de desarrollo. Ya que a veces demasiados detalles pueden ser perjudicial para una determinada audiencia que no lo necesita.
Proporcionar detalles de implementación a personas ajenas al equipo de desarrollo es un ejemplo práctico. Esto causa una distracción y quita otros mensajes que se están tratando de transmitir.
# Consideraciones:
El diagrama de desarrollo es esencialmente el diagrama de flujo con detalles adicionales. Se deben etiquetar cada pieza con cualquier detalle implementación especifico que puedas considerar necesario y asegurarte de etiquetar las transacciones importantes.
Este tipo de diagramas no reemplaza las historias de usuarios, pero ayuda a mejorarlas y a aumentar la comprensión en el equipo de desarrollo.
 
## Procedimiento y/o uso sugerido
En ciertos momentos, una versión del diagrama no es suficiente. Por lo tanto, al comenzar un análisis de un nuevo diseño de un proyecto o producto, siempre conviene comenzar con el diagrama de flujo. En este diagrama exponemos nuestras ideas y luego lo compartimos y validamos con otros arquitectos. Una vez que tenemos la validación, convertimos el diagrama de flujo en un diagrama de personas y se lo acercamos al área de negocios/comerciales para validar.
Cuando tenemos la aprobación del lado comercial/negocio, entonteces podemos comenzar con los diagramas de servicio y de desarrollador. El diagrama de servicios se los entregamos a las áreas de telecomunicaciones y/o ingenieros IT para asegurarnos que comprendan a alto nivel lo que se está desarrollando. Mientras que el diagrama de desarrollador se los entregamos al equipo de desarrollo que va a implementar la solución.
Una vez que finalizamos con los diagramas, podemos encarar el diagrama de infraestructura.


Si deseas leer más artículos interesantes sobre tecnología, asegúrate de visitar su sitio web en [mi blog](https://romanohector.vercel.app/).
Si sientes que has extraído algún valor del contenido de este articulo, considera colaborar con la compra de café. ¡Gracias!

[ko-fi](https://ko-fi.com/hectorromano)