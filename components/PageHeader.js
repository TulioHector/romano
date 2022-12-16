'use client';

import { Component } from 'react';
import dynamic from 'next/dynamic';
import { PageContext } from '../components/context';

const HeaderTypeToRender = dynamic(() => import('../components/PageHeaderType'), {
    ssr: false,
});
class PageHeader extends Component {
    static contextType = PageContext;

    render() {
        return (
            <>
                <PageContext.Consumer>
                    {
                        (value) => {
                            return (
                                <header className="masthead" style={{ backgroundImage: value.pageSettings.backgroundImage }}>
                                    <div className="container position-relative px-4 px-lg-5">
                                        <div className="row gx-4 gx-lg-5 justify-content-center">
                                            <div className="col-md-10 col-lg-8 col-xl-7">
                                                <HeaderTypeToRender pageSettings={value.pageSettings}/>
                                            </div>
                                        </div>
                                    </div>
                                </header>
                            )
                        }
                    }
                </PageContext.Consumer>
            </>
        );
    }
}
export default PageHeader;
