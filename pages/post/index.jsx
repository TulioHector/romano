'use client';

import { Component, Suspense, lazy } from 'react';
import { PageContext } from '../../components/context';
import PageHeader from '../../components/PageHeader';
import SeoHeader from '../../components/seoHeader';
import Loading from '../../components/Loading';

const List = lazy(() => import('./list'));

class Home extends Component {
    static contextType = PageContext;

    constructor(props) {
        super(props);

        this.state = {
            headers: [
                { property: "og:locale", content: "es_AR" },
                { property: "og:type", content: "website" },
                { property: "og:title", content: "Blog – Technology" },
                { property: "og:description", content: "Looking for " },
                { property: "og:url", content: "https://tuliohector.github.io/" },
                { property: "og:site_name", content: "Hector Romano Blog" },
            ],
            headerTitle: "Blog – Technology",
            description: "Blog about Technology and architecture"
        };
    }

    render() {
        return (
            <>
                <PageHeader />
                <SeoHeader metatags={this.state.headers} title={this.state.headerTitle} description={this.state.description} />
                <Suspense fallback={<Loading />}>
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7" id='poastList'>
                                <List />
                            </div>
                        </div>
                    </div>
                </Suspense>
            </>
        )
    }
};

export default Home;