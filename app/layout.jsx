"use client"
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
import '../styles/Post.css';
import '../styles/Code.css';
import '../styles/notfound.css';
import '../styles/loading.css';
import '../styles/profile.css';

import { Component } from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import PageContextProvider from '../components/context';

const Navigation = dynamic(() => import('../components/Navigation'));
const Footer = dynamic(() => import('../components/Footer'));

class RootLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasMounted: false,
    };
  }

  async componentDidMount() {
    this.setState({ hasMounted: true, });
  }
  
  render() {
    return (
      <html lang='en' itemScope itemType="https://schema.org/Blog">
        <head />
        <body>
          <Navigation />
          <PageContextProvider>
            {this.props.children}
          </PageContextProvider>
          <Footer />
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-QXP7TC03LZ" />
          <Script strategy="afterInteractive" src='/scripts/analytics.js' />
          <Script strategy="afterInteractive" src="/template.js" />
        </body>
      </html>
    )
  }
}

export default RootLayout;