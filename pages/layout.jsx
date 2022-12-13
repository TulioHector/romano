'use client';

import { Component } from 'react';
import dynamic from 'next/dynamic';
import PageContextProvider from '../components/context';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navigation = dynamic(() => import('../components/Navigation'), {
    ssr: false,
});
const Footer = dynamic(() => import('../components/Footer'), {
    ssr: false,
});

class Layout extends Component {
    render() {
        return (
            <>
                <Navigation />
                <PageContextProvider>
                    
                    {this.props.children}
                </PageContextProvider>
                <Footer />
            </>
        );
    }
}

export default Layout;