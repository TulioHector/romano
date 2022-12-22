"use client"
import { Component } from 'react';
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
      <>
        <Navigation />
        <PageContextProvider>
          {this.props.children}
        </PageContextProvider>
        <Footer />
      </>
    )
  }
}

export default RootLayout;