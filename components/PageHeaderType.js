"use client"
import { PureComponent } from "react";
import { withRouter } from 'next/router';
import { LocaleContext } from '../components/i18n';
import Typed from "react-typed";
import moment from 'moment';

class HeaderTypeToRender extends PureComponent {
    typeHeader = '';
    static contextType = LocaleContext;

    constructor(props) {
        super(props);
        const { pageSettings } = props;
        this.typeHeader = pageSettings.headerType;
        this.state = {
            hasMounted: false,
            locale: {},
        };
    }

    async componentDidMount() {
        if (this.typeHeader === 'about' || this.typeHeader === 'bio') {
            const phrass = this.context.locale.localeSettings.pages.about.subTitle.split('|');
            this.setState({ aboutSubTitleArray: phrass });
        }
        this.setState({ hasMounted: true, locale: this.context.locale.localeSettings });
    }

    async componentDidUpdate() {
        this.setState({ locale: this.context.locale.localeSettings });
    }

    render() {
        const { pageSettings } = this.props;
        const { locale } = this.state;

        if (Object.keys(locale).length === 0)
            return;

        switch (this.typeHeader) {
            case 'post':
                return this.state.hasMounted && (
                    <>
                        <div className="post-heading">
                            <h1 itemProp="headline">{pageSettings.pageTitle}</h1>
                            <h2 className="subheading" itemProp="description">{pageSettings.pageSubTitle}</h2>
                            <span className="meta" itemProp="author">
                                Posted by&nbsp;
                                <a href="/bio" itemProp="name">{pageSettings.pageAuthor}&nbsp;</a>
                                <time itemProp="datePublished" dateTime={pageSettings.pageDatePublish}>
                                    {moment(pageSettings.pageDatePublish).format('LL')}
                                </time>
                            </span>
                        </div>
                    </>
                );
            case 'contact':
                return this.state.hasMounted && (
                    <>
                        <div className="page-heading">
                            <h1>{locale.pages.contact.title}</h1>
                            <span className="subheading">{locale.pages.contact.subTitle}</span>
                        </div>
                    </>
                );
            case 'about':
                return this.state.hasMounted && (
                    <>
                        <div className="page-heading">
                            <h1>{locale.pages.about.title}</h1>
                            <Typed className="subheading"
                                strings={this.state.aboutSubTitleArray}
                                typeSpeed={50}
                                backSpeed={10}
                                loop
                            />

                        </div>
                    </>
                );
            case 'bio':
                return this.state.hasMounted && (
                    <>
                        <div className="page-heading">
                            <h1>{locale.pages.bio.title}</h1>
                            <Typed className="subheading"
                                strings={this.state.aboutSubTitleArray}
                                typeSpeed={50}
                                backSpeed={10}
                                loop
                            />
                        </div>
                    </>
                );
            case 'index':
                return this.state.hasMounted && (
                    <>
                        <div className="page-heading">
                            <h1>{locale.pages.home.title}</h1>
                            <span className="subheading">{locale.pages.home.subTitle}</span>
                        </div>
                    </>
                );
            default:
                return this.state.hasMounted && (
                    <>
                        <div className="site-heading">
                            <h1>{locale.pages.title}</h1>
                            <span className="subheading">{locale.pages.subTitle}</span>
                        </div>
                    </>
                );
        }
    }
}

export default withRouter(HeaderTypeToRender);