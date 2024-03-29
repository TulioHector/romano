"use client"

import { PureComponent } from "react";

class Footer extends PureComponent {
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
                <footer className="border-top">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-md-10 col-lg-8 col-xl-7">
                                <ul className="list-inline text-center">
                                    <li className="list-inline-item">
                                        <a href="https://twitter.com/RomanoTulioHec" aria-label="Follow me in Twitter">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://github.com/TulioHector" aria-label="Follow me in GitHub">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.linkedin.com/in/romanohector/" aria-label="Follow me in Linkedin">
                                            <span className="fa-stack fa-lg">
                                                <i className="fas fa-circle fa-stack-2x"></i>
                                                <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="small text-center text-muted fst-italic">Copyright &copy; Hector Abraham Romano {new Date().getFullYear()}</div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;