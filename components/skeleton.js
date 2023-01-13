"use client"
import { PureComponent } from 'react';

class Skeleton extends PureComponent {

    render() {
        return (
            <>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className="post-preview">
                            <a href="#!">
                                <h2 className="skeleton-title">.</h2>
                                <h3 className="skeleton-description"></h3>
                            </a>
                            <p className="skeleton-powerby">
                                
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div className="post-preview">
                            <a href="#!">
                                <h2 className="skeleton-title">.</h2>
                                <h3 className="skeleton-description">.</h3>
                            </a>
                            <p className="skeleton-powerby">
                                
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div className="post-preview">
                            <a href="#!">
                                <h2 className="skeleton-title">.</h2>
                                <h3 className="skeleton-description">.</h3>
                            </a>
                            <p className="skeleton-powerby">
                                
                            </p>
                        </div>
                        <hr className="my-4" />
                        <div className="post-preview">
                            <a href="#!">
                                <h2 className="skeleton-title">.</h2>
                                <h3 className="skeleton-description">.</h3>
                            </a>
                            <p className="skeleton-powerby">
                                
                            </p>
                        </div>
                        <hr className="my-4" />
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Skeleton;