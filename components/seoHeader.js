'use client';
import Head from "next/head";

const SeoHeader = (metatags) => {
    return (
        <Head>
            <title>{metatags.title}</title>
            <meta name="description" content={metatags.description} />
            <meta name="author" content="Hector Abraham Romano" />
            {
                metatags.metatags.map((item, i) => (
                    <meta key={i} property={item.property} content={item.content} data-react-helmet="true" />        
                ))
            }
        </Head>
    );
}

export default SeoHeader;