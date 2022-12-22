"use client"
import { Component } from 'react';
import dynamic from 'next/dynamic';
import { PageContext } from '../../components/context';

const List = dynamic(() => import('./list'));
const PageHeader = dynamic(() => import('../../components/PageHeader'));
const SeoHeader = dynamic(() => import('../../components/seoHeader'));

class Home extends Component {
    static contextType = PageContext;

    constructor(props) {
        super(props);

        this.state = {
            hasMounted: false,
            headers: [
                { property: "og:locale", content: "es_AR" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: "Blog – Technology" },
                { property: "og:description", content: "Looking for " },
                { property: "og:url", content: "https://romanohector.vercel.app/" },
                { property: "og:site_name", content: "Hector Romano Blog" },
                { property: "canonical", content: `https://romanohector.vercel.app/` },
                { property: "itemProp", value: 'creator', content: 'Hector Abraham Romano' },
                { property: "itemProp", value: 'name', content: 'Hector Abraham Romano' },
                { property: "itemProp", value: 'description', content: 'Blog for solutions and software architecture' },
                { property: "itemProp", value: 'image', content: '/assets/img/tito-avatar.webp' },
            ],
            headerTitle: "Blog – Technology",
            description: "Blog about Technology and architecture"
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
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7" id='poastList'>
                            <List />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;