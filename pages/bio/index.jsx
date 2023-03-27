"use client"
import { PureComponent } from "react";
import dynamic from 'next/dynamic';
import { PageContext, pageHeaderType } from '../../components/context';

const PageHeader = dynamic(() => import("../../components/PageHeader"), {
    ssr: false,
});
const SeoHeader = dynamic(() => import("../../components/seoHeader"), {
    ssr: false,
});


class Bio extends PureComponent {
    static contextType = PageContext;

    constructor(props, context) {
        super(props);
        let pageConfig = context.pageSettings;
        pageConfig.backgroundImage = "url('/assets/img/biography.webp')";
        pageConfig.headerType = pageHeaderType.Bio;
        context.setPageSettings(pageConfig);
        this.state = {
            headers: [
                { property: "og:locale", content: "es_AR" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: "Blog – Technology" },
                { property: "og:description", content: "Looking for " },
                { property: "og:url", content: "https://romanohector.vercel.app/bio" },
                { property: "og:site_name", content: "Hector Romano Blog" },
                { property: "canonical", content: 'https://romanohector.vercel.app/bio' },
                { property: "itemProp", value: 'creator', content: 'Hector Abraham Romano' },
                { property: "itemProp", value: 'name', content: 'Hector Abraham Romano' },
                { property: "itemProp", value: 'description', content: 'Blog for solutions and software architecture' },
                { property: "itemProp", value: 'image', content: '/assets/img/tito-avatar.webp' },
            ],
            headerTitle: "Blog – Technology / Bio",
            description: "Blog about Technology and architecture-> Bio"
        };
    }

    async componentDidMount() {
        const language = this.state.currentLocale && window.navigator.userLanguage || window.navigator.language || navigator.language;
        //TODO: Set locale into header property header->og:locale
    }

    render() {
        return (
            <>
                <PageHeader />
                <SeoHeader metatags={this.state.headers} title={this.state.headerTitle} description={this.state.description} />
                <main className="mb-4" itemScope itemType="https://schema.org/Person">
                    <div className="text-center"><h3 itemProp="name" style={{ display: 'none' }}>Hector Abraham Romano</h3></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div>
                                <p>¡Hola a todos! Soy Héctor, un arquitecto de soluciones con ocho años de experiencia en el campo. A lo largo de mi carrera he tenido la oportunidad de trabajar en diversos sectores, enfrentando desafíos técnicos únicos y complejos.</p>
                                <p>Empecé mi carrera como desarrollador full-stack, lo que me permitió adquirir habilidades en el desarrollo tanto del lado del servidor como del lado del cliente. Durante siete años trabajé en proyectos desafiantes y desarrollé mi capacidad para abordar los desafíos técnicos desde diferentes perspectivas.</p>
                                <p>Posteriormente, adquirí experiencia como arquitecto de software .NET, donde desarrollé habilidades especializadas en tecnologías .NET y en el desarrollo de software en general. Durante tres años trabajé en proyectos desafiantes y fui capaz de liderar equipos técnicos como líder técnico .NET durante un año, trabajando en estrecha colaboración con otros líderes empresariales.</p>
                                <p>Desde hace más de seis años me desempeño como arquitecto de soluciones participando en equipos multidisciplinarios, generando desafíos técnicos en diferentes tipos de negocio. Mi experiencia en el sector financiero me ha permitido adquirir conocimientos especializados en ese campo.</p>
                                <p>Soy un apasionado de la innovación, la investigación y la arquitectura de soluciones. Me gusta mantenerme actualizado con las últimas tecnologías y tendencias en mi campo y compartir mi conocimiento con el equipo de trabajo y la comunidad en general.</p>
                                <p>En mi Blog, compartiré mi experiencia y conocimiento sobre temas relacionados con la arquitectura de soluciones, la innovación y las nuevas tecnologías. Espero que mis publicaciones sean útiles y relevantes para otros profesionales en el campo.</p>
                                <p>Agradezco su tiempo en leer mi biografía y espero conectarme con ustedes en LinkedIn y en mi Blog. ¡Sigamos compartiendo nuestras experiencias y conocimientos para seguir creciendo juntos en este campo apasionante!</p>
                            </div>
                        </div>
                    </div>
                </main>
                <section id="resume" className="resume">
                    <div className="container">
                        <div className="section-title">
                            <h2>Resume</h2>
                            <p>Durante mi trayectoria profesional he adquirido una amplia experiencia en el desarrollo y diseño de software, desde mi inicio como desarrollador full-stack hasta mi evolución a arquitecto de soluciones y liderazgo técnico en proyectos de alta complejidad. Con más de 10 años de experiencia en el sector tecnológico, he tenido la oportunidad de trabajar en equipos multidisciplinarios y enfrentar desafíos técnicos en diferentes tipos de negocios, lo que me ha permitido desarrollar habilidades en la gestión de proyectos y liderazgo de equipos de trabajo. Además, me apasiona estar actualizado en las últimas tecnologías y tendencias, y transmitir mi experiencia y conocimiento a mis colegas.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-up">
                                <h3 className="resume-title">Sumary</h3>
                                {/* <div className="resume-item pb-0">
                                    <h4>Alex Smith</h4>
                                    <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                    <ul>
                                        <li>Portland par 127,Orlando, FL</li>
                                        <li>(123) 456-7891</li>
                                        <li>alice.barkley@example.com</li>
                                    </ul>
                                </div> */}

                                <h3 className="resume-title">Education</h3>
                                <div className="resume-item">
                                    <h4>Técnico Superior en Electrónica, especialidad en Electrónica.</h4>
                                    <h5>2001-2006 INSPT UTN</h5>
                                    <p><em>Asistente de Laboratorio Física II, Ayudante de Laboratorio Técnicas Digitales I.</em></p>
                                    <p></p>
                                </div>
                                <div className="resume-item">
                                    <h4>Técnico en Redes y Administrador de Windows 2000, Informática.</h4>
                                    <h5>2003 FUCE</h5>
                                    <p><em>Participación como ayudante en las prácticas del curso, tanto en administración de red como en reparación de PC.</em></p>
                                    <p></p>
                                </div>
                                <div className="resume-item">
                                    <h4>Programa Cisco Networking Academy, CCNA Módulo 1.</h4>
                                    <h5>2006 Fundación Proydesa</h5>
                                    <p><em></em></p>
                                    <p></p>
                                </div>
                                <div className="resume-item">
                                    <h4>Técnico Superior en Análisis de Sistemas, Informática.</h4>
                                    <h5>2008-2010: IFTS Nº 18</h5>
                                    <p><em></em></p>
                                    <p></p>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <h3 className="resume-title">Professional Experience</h3>
                                <div className="resume-item">
                                    <h4>Senior Arquitecto de Soluciones</h4>
                                    <h5>Marzo 2016 - presente</h5>
                                    <p><em>RedLink S.A </em></p>
                                    <p>Desde marzo de 2016 hasta la actualidad, con una duración de 7 años y 1 mes, he trabajado como Arquitecto de Soluciones en RedLink Argentina. Durante mi tiempo en esta posición, he liderado a un equipo de arquitectos de software y he colaborado con diversas áreas de la empresa para ayudar a alcanzar los objetivos comerciales y las necesidades del negocio. También he participado y liderado evaluaciones de necesidades y problemas comerciales, y he sido tutor e instructor en el programa interno de capacitación para futuros arquitectos.</p>
                                    <p>Además, he identificado áreas clave para ayudar a los objetivos comerciales y he identificado oportunidades de negocio. He diseñado soluciones técnicas de alto nivel, cumpliendo con las normativas del BCRA y las de la empresa, basándome en los requerimientos del negocio. Finalmente, he promovido iniciativas internas para aumentar la exposición del área de arquitectura.</p>
                                </div>
                                <div className="resume-item">
                                    <h4>Referente Técnico & Arquitecto .NET</h4>
                                    <h5>Agosto 2015 - Febrero 2016</h5>
                                    <p><em>QStom</em></p>
                                    <p>
                                        Durante mi trabajo en Qstom como Referente Técnico y Arquitecto .NET entre agosto de 2015 y febrero de 2016, me encargué de capacitar al equipo de desarrollo en tecnologías como HTML5, JavaScript, SQL Server, C# y MVC5. También diseñé y definí sistemas web y móviles teniendo en cuenta la mantenibilidad, auditabilidad, flexibilidad y comunicación con otros sistemas de terceros. Me aseguré de que los sistemas fueran escalables tanto horizontal como verticalmente, e implementé la metodología Scrum para los proyectos. Por último, me encargué tanto del desarrollo FrontEnd utilizando Knockout, HTML5 y Bootstrap, como del desarrollo Backend utilizando C#, .NET 4.5, WCF, Web API, LINQ y Entity Framework 6.
                                    </p>
                                </div>
                                <div className="resume-item">
                                    <h4>Referente Técnico & Arquitecto .NET</h4>
                                    <h5>Agosto 2012 - Agosto 2015</h5>
                                    <p><em>ADC - Administradora de Conocimientos SA</em></p>
                                    <p>
                                    En el periodo de agosto de 2012 a agosto de 2015, trabajé como Desarrollador y Referente Senior en .NET en ADC - Administradora de Conocimientos SA. Mi trabajo consistió en participar en proyectos web con alta concurrencia, utilizando patrones de diseño MVC 4 y 5 de Microsoft, Entity Framework 5, 6, SignalR2, Identity 2.0, Windows Communication Fundation, Framework Ext.Net 1.5 e Infragistics IgNite 2012.2 Asp.Net MVC. Además, realicé análisis de Best Practice y Security en C#.NET utilizando la herramienta ANTS Profiler, así como también análisis de optimización tanto del C#.NET como del servidor web IIS. Durante mi tiempo en ADC, también desarrollé en Visual Studio 2012 y 2013 con Framework 4.5, herramientas Team Foundation Server y Microsoft Enterprise Library, y trabajé con TypeScript y LESS, así como otros frameworks de JavaScript como Angular, Knockout y jQuery.
                                    </p>
                                </div>
                                <div className="resume-item">
                                    <h4>Referente Técnico & Arquitecto .NET</h4>
                                    <h5>Julio 2011 - Agosto 2012</h5>
                                    <p><em>SPSS Argentina S.A</em></p>
                                    <p>
                                    Durante mi trabajo como Desarrollador Sr. .NET en SPSS Argentina S.A, mis responsabilidades incluyeron el diseño de un Sistema SGC (Ticket, Bug Tracking, No Conformidades), el desarrollo de Plugins No conformidades en la plataforma GLPI 0.80.2 y la integración de Open Flash Chart y JQuery en GLPI 0.80.2. También implementé Subversion Apache 1.7.1 y el driver AnkhSVN Subversion Support para Visual Studio 2010. Además, desarrollé Nodos (plugins) para interconexión con distintos Burós como Veraz, Fidelitas y Nosis para el software IBM SPSS Modeler codificado en C#.NET. Finalmente, llevé a cabo la refactorización en el framework base para los Nodos codificado en C#.NET y desarrollé la comunicación.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Bio;