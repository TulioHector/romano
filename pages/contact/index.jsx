'use client';

import { Component } from "react";
import { PageContext } from '../../components/context';
import PageHeader from "../../components/PageHeader";
import SeoHeader from "../../components/seoHeader";

class ContactMe extends Component {
    static contextType = PageContext;

    constructor(props, context) {
        super(props);
        let pageConfig = context.pageSettings;
        pageConfig.backgroundImage = "url('../assets/img/contact-bg.jpg')";
        pageConfig.pageTitle = "Contact Me";
        pageConfig.pageSubTitle = "Contact with me";
        context.setPageSettings(pageConfig);
        this.state = {
            headers: [
                {property: "og:locale", content: "es_AR"},
                {property: "og:type", content: "website"},
                {property: "og:title", content: "Blog – Technology"},
                {property: "og:description", content: "Looking for "},
                {property: "og:url", content: "https://tuliohector.github.io/"},
                {property: "og:site_name", content: "Hector Romano Blog"},
            ],
            headerTitle: "Blog – Technology / Contact me",
            description: "Blog about Technology and architecture-> Contact me"
        };
    }

    render() {
        return (
            <>
            <PageHeader />
            <SeoHeader metatags={this.state.headers} title={this.state.headerTitle} description={this.state.description}/>
            <main className="mb-4">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                            <div className="my-5">

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