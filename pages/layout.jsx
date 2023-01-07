"use client"
import { Component } from 'react';
import dynamic from 'next/dynamic';
import {PageContextProvider,PageContext} from '../components/context';
import LocaleContextProvider from '../components/i18n';

const Navigation = dynamic(() => import('../components/Navigation'));
const Footer = dynamic(() => import('../components/Footer'));

class RootLayout extends Component {
  static contextType = PageContext;

  constructor(props, context) {
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
      <>
        <LocaleContextProvider>
          <Navigation />
          <PageContextProvider>
            {this.props.children}
          </PageContextProvider>
          <Footer />
        </LocaleContextProvider>
      </>
    )
  }
}

export default RootLayout;