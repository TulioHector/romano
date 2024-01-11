"use client"
import { Component } from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';
import { PageContextProvider } from '../components/context';
import LocaleContextProvider from '../components/i18n';
import { SpeedInsights } from "@vercel/speed-insights/next"

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
    return this.state.hasMounted && (
      <>
        <LocaleContextProvider>
          <Navigation />
          <PageContextProvider>
            {this.props.children}
          </PageContextProvider>
          <Footer />
        </LocaleContextProvider>
        <SpeedInsights />
      </>
    )
  }
}

export default withRouter(RootLayout);