'use client';

import { Component } from "react";

class HeaderTypeToRender extends Component {
    typeHeader = '';

    constructor(props) {
        super(props);
        const {pageSettings} = props;
        this.typeHeader = pageSettings.headerType;
    }

    render() {
        const {pageSettings} = this.props;
        switch (this.typeHeader) {
            case 'post':
                return (
                    <>
                    <div className="post-heading">
                        <h1>{pageSettings.pageTitle}</h1>
                        <h2 className="subheading">{pageSettings.pageSubTitle}</h2>
                        <span className="meta">
                            Posted by&nbsp;
                            <a href="#!">{pageSettings.pageAuthor}</a>
                            on&nbsp;{pageSettings.pageDatePublish}
                        </span>
                    </div>
                    </>
                );
            case 'contact':
                console.log("contact");
                return (
                    <>
                    <div className="page-heading">
                        <h1>{pageSettings.pageTitle}</h1>
                        <span className="subheading">{pageSettings.pageSubTitle}</span>
                    </div>
                    </>
                );
            case 'about':
                console.log("about");
                return (
                    <>
                    <div className="page-heading">
                        <h1>{pageSettings.pageTitle}</h1>
                        <span className="subheading">{pageSettings.pageSubTitle}</span>
                    </div>
                    </>
                );
            default:
                console.log("index");
                return (
                    <>
                    <div className="site-heading">
                        <h1>{pageSettings.pageTitle}</h1>
                        <span className="subheading">{pageSettings.pageSubTitle}</span>
                    </div>
                    </>
                );
        }
    }
}

export default HeaderTypeToRender;