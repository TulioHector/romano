"use client"
import dynamic from 'next/dynamic';
import { Component } from 'react';
import { PageContext, pageHeaderType } from '../components/context';

const Home = dynamic(() => import('./post/index'), {
  ssr: false,
});
const PageHeader = dynamic(() => import("../components/PageHeader"), {
  ssr: false,
});
const SeoHeader = dynamic(() => import("../components/seoHeader"), {
  ssr: false,
});

class HomePage extends Component {
  static contextType = PageContext;

  constructor(props, context) {
    super(props);
    let pageConfig = context.pageSettings;
    pageConfig.backgroundImage = "url('../assets/img/home-bg.webp')";
    pageConfig.pageTitle = "Architecture Blo";
    pageConfig.pageSubTitle = "A Blog for architecture";
    pageConfig.headerType = pageHeaderType.About;
    context.setPageSettings(pageConfig);
    this.state = {
      hasMounted: false,
      headers: [
        { property: "og:locale", content: "es_AR" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Blog – Technology" },
        { property: "og:description", content: "Looking for " },
        { property: "og:url", content: "https://romanohector.vercel.app/" },
        { property: "og:site_name", content: "Hector Romano Blog" },
        { property: "canonical", content: 'https://romanohector.vercel.app/' },
        { property: "itemProp", value: 'creator', content: 'Hector Abraham Romano' },
        { property: "itemProp", value: 'name', content: 'Hector Abraham Romano' },
        { property: "itemProp", value: 'description', content: 'Blog for solutions and software architecture' },
        { property: "itemProp", value: 'image', content: '/assets/img/tito-avatar.webp' },
      ],
      headerTitle: "Blog – Technology / Home",
      description: "Blog about Technology and architecture-> Home",
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
        <Home />
      </>
    )
  }
}

export default HomePage;