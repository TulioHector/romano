"use client"
import { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { PageContext } from '../components/context';

const HeaderTypeToRender = dynamic(() => import('../components/PageHeaderType'));
class PageHeader extends PureComponent {
    static contextType = PageContext;

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
        return this.state.hasMounted && (
            <>
                <PageContext.Consumer>
                    {
                        (value) => {
                            console.log(value.pageSettings);
                            if(value.pageSettings.headerType == 'post') {
                                return (
                                    <>
                                    <header className="masthead" itemScope itemType='https://schema.org/Article' style={{ backgroundImage: value.pageSettings.backgroundImage }}>
                                        <meta itemProp="image" content={value.pageSettings.backgroundImage} />
                                        <div className="container position-relative px-4 px-lg-5">
                                            <div className="row gx-4 gx-lg-5 justify-content-center">
                                                <div className="col-md-10 col-lg-8 col-xl-7">
                                                    <HeaderTypeToRender pageSettings={value.pageSettings} />
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    </>
                                )
                            }
                            return (
                                <>
                                <header className="masthead" style={{ backgroundImage: value.pageSettings.backgroundImage }}>
                                    <div className="container position-relative px-4 px-lg-5">
                                        <div className="row gx-4 gx-lg-5 justify-content-center">
                                            <div className="col-md-10 col-lg-8 col-xl-7">
                                                <HeaderTypeToRender pageSettings={value.pageSettings} />
                                            </div>
                                        </div>
                                    </div>
                                </header>
                                </>
                            )
                        }
                    }
                </PageContext.Consumer>
            </>
        );
    }
}
export default PageHeader;
