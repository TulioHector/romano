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

class About extends PureComponent {
    static contextType = PageContext;

    constructor(props, context) {
        super(props);
        let pageConfig = context.pageSettings;
        pageConfig.backgroundImage = "url('/assets/img/about-bg.webp')";
        pageConfig.headerType = pageHeaderType.About;
        context.setPageSettings(pageConfig);
        this.state = {
            headers: [
                { property: "og:locale", content: "es_AR" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: "Blog – Technology" },
                { property: "og:description", content: "Looking for " },
                { property: "og:url", content: "https://romanohector.vercel.app/about" },
                { property: "og:site_name", content: "Hector Romano Blog" },
                { property: "canonical", content: 'https://romanohector.vercel.app/about' },
                { property: "itemProp", value: 'creator', content: 'Hector Abraham Romano' },
                { property: "itemProp", value: 'name', content: 'Hector Abraham Romano' },
                { property: "itemProp", value: 'description', content: 'Blog for solutions and software architecture' },
                { property: "itemProp", value: 'image', content: '/assets/img/tito-avatar.webp' },
            ],
            headerTitle: "Blog – Technology / About me",
            description: "Blog about Technology and architecture-> About me"
        };
    }

    render() {
        return (
            <>
                <PageHeader />
                <SeoHeader metatags={this.state.headers} title={this.state.headerTitle} description={this.state.description} />
                <main className="mb-4" itemScope itemType="https://schema.org/Person">
                    <div className="text-center"><h3 itemProp="name" style={{ display: 'none' }}>Hector Abraham Romano</h3></div>
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <p>Como arquitecto de soluciones con ocho años de experiencia, he enfrentado desafíos técnicos únicos en diferentes tipos de negocios y sectores, incluyendo el sector financiero. Mi experiencia me ha permitido desarrollar habilidades en la escalabilidad, seguridad y regulaciones, y trabajar en equipos multidisciplinarios.</p>
                                <p>Durante mis tres años como arquitecto de software .NET, adquirí habilidades especializadas en tecnologías .NET y en el desarrollo de software en general. También tuve la oportunidad de liderar equipos técnicos como líder técnico .NET durante un año y trabajar en estrecha colaboración con otros líderes empresariales.</p>
                                <p>Como desarrollador full-stack con siete años de experiencia, he adquirido habilidades en el desarrollo tanto del lado del servidor como del lado del cliente, lo que me permite abordar los desafíos técnicos desde diferentes perspectivas.</p>
                                <p>Me apasiona la innovación, la investigación y la arquitectura de soluciones. Me gusta aprender de la experiencia de mis colegas y también transmitir mi conocimiento al equipo de trabajo. Además, he adquirido habilidades de liderazgo que me permiten guiar a otros en la dirección correcta.</p>
                                <p>En mi sitio de Blog, compartiré mi experiencia y conocimiento sobre temas relacionados con la arquitectura de soluciones, la innovación y las nuevas tecnologías. Espero que mis publicaciones sean útiles y relevantes para otros profesionales en el campo.</p>
                                <p>Agradezco su tiempo en leer mi perfil y visitar mi sitio de Blog. ¡Espero conectar con ustedes en LinkedIn y seguir compartiendo nuestras experiencias y conocimientos!</p>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
};

export default About;