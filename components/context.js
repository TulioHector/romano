import {createContext, useState} from 'react';

export const pageHeaderType = {
    About: 'about',
    Contact: 'contact',
    Index: 'index',
    Post: 'post',
    PageNotFound: '404',
    Bio: 'bio',
}

export const pageConfig = {
    "backgroundImage": "url('assets/img/home-bg.webp')",
    "pageTitle": "Architecture Blog",
    "pageSubTitle": "A Blog for architecture",
    "githubToken": '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',
    headerType: pageHeaderType.Index,
    pageAuthor: "",
    pageDatePublish: "",
    "firebaseConfi": {
        apiKey: "AIzaSyBczw0vICVnVZcfrdYXW1DJTaAvbdhGR0M",
        authDomain: "blog-hector.firebaseapp.com",
        projectId: "blog-hector",
        storageBucket: "blog-hector.appspot.com",
        messagingSenderId: "782647056381",
        appId: "1:782647056381:web:c4b836092a06d03fc0ab94",
        measurementId: "G-5LDTLQ3CPB",
    },
    "pagingSize": 10,
    i18n: {},
};

export const PageContext = createContext();

export const PageContextProvider = (props) => {
    const [pageSettings, setPageSettings] = useState(pageConfig);
//    const value = useMemo(() => [pageSettings, setPageSettings], [pageSettings]);

    return (
        <PageContext.Provider value={{pageSettings, setPageSettings}}>
            {props.children}
        </PageContext.Provider>
    )
}

export default PageContextProvider;