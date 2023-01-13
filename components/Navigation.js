"use client"
import { PureComponent } from "react";
import { withRouter } from 'next/router';
import Link from 'next/link';
import { LocaleContext, LoadLocaleAsync } from '../components/i18n';
class Navigation extends PureComponent {
    static contextType = LocaleContext;

    constructor(props) {
        super(props);
        this.state = {
            hasMounted: false,
            locale: ''
        };
    }

    handleClick(e, locale) {
        e.preventDefault();
        const localeSelected = this.context.locale.setLocaleSettings;
        this.props.router.push(this.props.router.asPath, undefined, { locale: locale });
        const jsonLocale = LoadLocaleAsync(locale).then((response) => {
            console.log("response reloaded->", response);
            localeSelected(response)
        });
    }

    async componentDidMount() {
        this.setState({ hasMounted: true, });
    }

    isEmpty(object) {
        return Object.keys(object).length === 0;
    }

    render() {
        const localeSelected = this.context.locale.localeSettings;
        if (this.isEmpty(localeSelected) === true)
            return null;

        const { home, menu } = localeSelected;

        return this.state.hasMounted && (
            <>
                <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <Link className="navbar-brand" href="/">{`${home.microdata.name}`}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto py-4 py-lg-0">
                                <li className="nav-item"><Link href="/" className="nav-link px-lg-3 py-3 py-lg-4">{`${menu.nav.home}`}</Link></li>
                                <li className="nav-item"><Link href="/about" className="nav-link px-lg-3 py-3 py-lg-4">{`${menu.nav.about}`}</Link></li>
                                <li className="nav-item"><Link href="/contact" className="nav-link px-lg-3 py-3 py-lg-4">{`${menu.nav.contact}`}</Link></li>
                                <li className="nav-item dropdown">
                                    <a href="#" className="nav-link px-lg-3 py-3 py-lg-4 dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">{`${menu.nav.language}`} <span className="caret"></span></a>
                                    <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenuLink">
                                        <li><a className="dropdown-item" href="#" onClick={(e) => this.handleClick(e, "es-AR")}><span className="fi fi-ar fis"></span>Argentina</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={(e) => this.handleClick(e, "es-ES")}><span className="fi fi-es fis"></span>España</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={(e) => this.handleClick(e, "en-US")}><span className="fi fi-us fis"></span>EEUU</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default withRouter(Navigation);