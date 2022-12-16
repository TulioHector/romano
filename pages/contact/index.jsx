'use client';

import { Component } from "react";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { PageContext,pageHeaderType } from '../../components/context';

const PageHeader = dynamic(() => import("../../components/PageHeader"), {
    ssr: false,
});
const SeoHeader = dynamic(() => import("../../components/seoHeader"), {
    ssr: false,
});

class ContactMe extends Component {
    static contextType = PageContext;

    constructor(props, context) {
        super(props);
        let pageConfig = context.pageSettings;
        pageConfig.backgroundImage = "url('../assets/img/contact-bg.webp')";
        pageConfig.pageTitle = "Contact Me";
        pageConfig.pageSubTitle = "Contact with me";
        pageConfig.headerType = pageHeaderType.Contact;
        context.setPageSettings(pageConfig);
        this.state = {
            headers: [
                { property: "og:locale", content: "es_AR" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: "Blog – Technology" },
                { property: "og:description", content: "Looking for " },
                { property: "og:url", content: "https://romanohector.vercel.app/contact" },
                { property: "og:site_name", content: "Hector Romano Blog" },
                { property: "canonical", content: `https://romanohector.vercel.app/contact` },
                { property: "itemProp", value: 'creator', content: 'Hector Abraham Romano' },
                { property: "itemProp", value: 'name', content: 'Hector Abraham Romano' },
                { property: "itemProp", value: 'description', content: 'Blog for solutions and software architecture' },
                { property: "itemProp", value: 'image', content: '/assets/img/tito-avatar.webp' },
            ],
            headerTitle: "Blog – Technology / Contact me",
            description: "Blog about Technology and architecture-> Contact me"
        };
    }

    render() {
        return (
            <>
                <PageHeader />
                <SeoHeader metatags={this.state.headers} title={this.state.headerTitle} description={this.state.description} />
                <main className="mb-4">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                                <div className="my-5">
                                    <div className="container" itemScope itemType="https://schema.org/Person">
                                        <div className="main-body">
                                            <div className="row gutters-sm">
                                                <div className="col-md-4 mb-3">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <div className="d-flex flex-column align-items-center text-center">
                                                                <Image itemProp="image" src="/assets/img/tito-avatar.webp" alt="Hector Abraham Romano" className="rounded-circle" width={150} height={150} />
                                                                <div className="mt-3">
                                                                    <h4 itemProp="name">Hector</h4>
                                                                    <p className="text-secondary mb-1" itemProp="jobTitle">Solution Architect</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card mb-3">
                                                        <div className="card-body">

                                                            <div className="row">
                                                                <div className="col-sm-3">
                                                                    <h6 className="mb-0">Full Name</h6>
                                                                </div>
                                                                <div className="col-sm-9 text-secondary" itemProp="name">
                                                                    Hector Abraham Romano
                                                                </div>
                                                            </div>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-sm-3">
                                                                    <h6 className="mb-0">Address</h6>
                                                                </div>
                                                                <div className="col-sm-9 text-secondary" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                                                    <span itemProp="addressLocality">Buenos Aires</span>,
                                                                    <span itemProp="addressRegion"> Argentina, AR</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
};

export default ContactMe;