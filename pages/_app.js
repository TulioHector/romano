'use client';
import Head from 'next/head';
import Script from 'next/script';
import Layout from "./layout";
import '../styles/index.css';
import '../styles/Post.css';
import '../styles/Code.css';
import '../styles/notfound.css';
import '../styles/loading.css';
import '../styles/profile.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps, appProps }) {
    return (
        <>
            <Layout>
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta name="google-site-verification" content="dukoEJNsE9B8LQzeFGHXMIfD0OoVFGwb7tVr843WQyA" />
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
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-QXP7TC03LZ" />
            <Script src='/scripts/analytics.js' />
            <Script src="/template.js" />
        </>
    )
}

export default MyApp