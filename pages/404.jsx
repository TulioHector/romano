"use client"
import { Component } from "react";
import dynamic from 'next/dynamic';
import { PageContext, pageHeaderType } from '../components/context';

const PageHeader = dynamic(() => import("../components/PageHeader"));
const SeoHeader = dynamic(() => import("../components/seoHeader"));

//https://codepen.io/WithAnEs/pen/abNGxX
class NoPage extends Component {
    static contextType = PageContext;

    constructor(props, context) {
        super(props);
        let pageConfig = context.pageSettings;
        pageConfig.backgroundImage = "url('/assets/img/404-rebound.webp')";
        pageConfig.pageTitle = "404";
        pageConfig.pageSubTitle = "Page Not Found";
        pageConfig.headerType = pageHeaderType.PageNotFound;
        context.setPageSettings(pageConfig);
        this.state = {
            hasMounted: false,
            headers: [
                { property: "og:locale", content: "es_AR" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: "404 - Blog – Technology" },
                { property: "og:description", content: "Looking for " },
                { property: "og:url", content: "https://romanohector.vercel.app/404" },
                { property: "og:site_name", content: "Hector Romano Blog" },
            ],
            headerTitle: "Page Not Found 404",
            description: "Blog about Technology and architecture-> Page Not Found 404"
        };
    }

    async componentDidMount() {
        this.setState({ hasMounted: true, });
    }

    render() {
        return this.state.hasMounted && (
            <>
                <PageHeader />
                <SeoHeader metatags={this.state.headers} title={this.state.headerTitle} description={this.state.description} />
                <div className='mb-4'>
                    <div className='container px-4 px-lg-5'>
                        <div className="container404">
                            <div className="error404page">
                                <div className="newcharacter404">
                                    <div className="chair404"></div>
                                    <div className="leftshoe404"></div>
                                    <div className="rightshoe404"></div>
                                    <div className="legs404"></div>
                                    <div className="torso404">
                                        <div className="body404"></div>
                                        <div className="leftarm404"></div>
                                        <div className="rightarm404"></div>
                                        <div className="head404">
                                            <div className="eyes404"></div>
                                        </div>
                                    </div>
                                    <div className="laptop404"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

};

export default NoPage;