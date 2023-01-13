"use client"
import { PureComponent } from "react";
import { withRouter } from 'next/router';
import { LocaleContext } from '../components/i18n';

class HeaderTypeToRender extends PureComponent {
    typeHeader = '';
    static contextType = LocaleContext;

    constructor(props) {
        super(props);
        const { pageSettings } = props;
        console.log("HeaderTypeToRender props->", props);
        this.typeHeader = pageSettings.headerType;
        this.state = {
            hasMounted: false,
            locale: {},
        };
    }

    async componentDidMount() {
        this.setState({ hasMounted: true, locale: this.context.locale.localeSettings });
    }

    async componentDidUpdate() {
        const locale = this.props.router.locale;
        console.log("componentDidUpdate",locale, this.context);
        this.setState({locale: this.context.locale.localeSettings});
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
                            <h1>{locale.pages.title}</h1>
                            <h2 className="subheading">{locale.pages.subTitle}</h2>
                            <span className="meta">
                                Posted by&nbsp;
                                <a href="#!">{pageSettings.pageAuthor}&nbsp;</a>
                                on&nbsp;{pageSettings.pageDatePublish}
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
                            <span className="subheading">{locale.pages.about.subTitle}</span>
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