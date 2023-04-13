'use client';
import { useEffect } from 'react'; 
import Head from 'next/head';
import Script from 'next/script';
import Layout from "./layout";
import '../styles/index.css';
import '../styles/Post.css';
import '../styles/Code.css';
import '../styles/notfound.css';
import '../styles/loading.css';
import '../styles/bio.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'flag-icons';
import '../styles/box-cards.css';

function MyApp({ Component, pageProps, appProps }) {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.js');
    }, [])

    return (
        <>
            <Layout>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    <meta name="google-site-verification" content="_CEGB1blc7j4nO9Axyzlkf-DPCWnRHCJOJXZN2FaKec" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="HandheldFriendly" content="true" />
                    <link rel="apple-touch-icon" href="/logo192.png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link rel="preconnect" href="https://googletagmanager.com" crossOrigin="true" />
                    <link rel="preconnect" href="https://identitytoolkit.googleapis.com" crossOrigin="true" />

                    <title>Blog Hector Abraham Romano</title>
                </Head>
                <Component {...pageProps} {...appProps} />
            </Layout>
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-J121YJLNSF" />
            <Script src='/scripts/analytics.js' />
            <Script src="/template.js" />
            <Script src='/scripts/masonry.pkgd.min.js'/>
            <Script src='/scripts/runMasonry.js'/>
        </>
    )
}

export default MyApp;