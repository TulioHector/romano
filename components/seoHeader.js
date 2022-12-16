'use client';
import Head from "next/head";

const SeoHeader = (metatags) => {
    return (
        <Head>
            <title>{metatags.title}</title>
            <meta name="description" content={metatags.description} />
            <meta name="author" content="Hector Abraham Romano" />
            {
                metatags.metatags.map((item, i) => {
                    switch (item.property) {
                        case 'canonical':
                            return <link key={i} rel="canonical" href={item.content} />
                        case 'itemProp':
                            return <meta key={i} itemProp={item.value} content={item.content} />
                        default:
                            return <meta key={i} property={item.property} content={item.content} />
                    }
                })
            }
        </Head>
    );
}

export default SeoHeader;