'use client';

import { Component } from "react";
import dynamic from 'next/dynamic';
import { PageContext, pageHeaderType } from '../../components/context';

const PageHeader = dynamic(() => import("../../components/PageHeader"), {
    ssr: false,
});
const SeoHeader = dynamic(() => import("../../components/seoHeader"), {
    ssr: false,
});

class About extends Component {
    static contextType = PageContext;

    constructor(props, context) {
        super(props);
        let pageConfig = context.pageSettings;
        pageConfig.backgroundImage = "url('../assets/img/about-bg.webp')";
        pageConfig.pageTitle = "About Me";
        pageConfig.pageSubTitle = "";
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
                                <p>Hace más de 6 años se desempeña como arquitecto de soluciones participando en equipos multidisciplinarios generando desafíos técnicos en diferentes tipos de negocio.</p>
                                <p>Cuenta con experiencia en el sector financiero. Le interesan las nuevas tecnologías, la innovación, la investigación, la arquitectura de soluciones.</p>
                                <p>Le gusta capacitarse y transmitir experiencia al equipo de trabajo y aprender de la experiencia de colegas. Actualmente se interesa poder avanzar a arquitectura empresarial.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
};

export default About;