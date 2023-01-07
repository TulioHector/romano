import { useState } from 'react';
import { PageContext, pageConfig } from './context';
import LocaleContext from './i18n';
import BuildProviderTree from './utils';

export const PageContextProvider = (props) => {
    const [pageSettings, setPageSettings] = useState(pageConfig);
    const Providers = BuildProviderTree([
        [PageContext.Provider, { value: { pageSettings, setPageSettings } }],
        [LocaleContext.Provider],
    ]);
    return (
        <Providers>
            {props.children}
        </Providers>
    )
}

export default PageContextProvider;