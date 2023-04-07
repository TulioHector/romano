"use client"
import { PureComponent, Fragment, createRef } from "react";
import Image from 'next/image';
//import Database from '../../components/Firebase';
import FirestoreFacade from '../../components/db/FirestoreFacade';

class LastPost extends PureComponent {

    constructor(props) {
        super(props);
        this.masonryRef = createRef();
        this.state = {
            hasMounted: false,
            lastPosts: [],
        };
    }

    async getTask() {
        try {
            const postDb = FirestoreFacade.getInstance().getLastPosts();
            const result = await postDb.then((item) => {
                const latestPosts = [];
                item.forEach((doc) => {
                    latestPosts.push(doc.data());
                });
                return latestPosts;
            }).catch(err => console.log(err));

            this.setState({
                lastPosts: result,
            });
            return result;
        } catch (error) {
            console.log("Error to load recento posts:", error);
        }
    }

    async componentDidMount() {
        const language = this.state.currentLocale && window.navigator.userLanguage || window.navigator.language || navigator.language;
        const result = await this.getTask();
        this.setState({ hasMounted: true, currentLocale: language, lastPosts: result });
    }

    render() {
        return this.state.hasMounted && (
            <>
                <div ref={this.masonryRef} className="mb-4">
                    <div className="container">
                        <h1>Ultimos Articulos</h1>
                        <div className="grid card-columns">
                            {this.state.lastPosts.map((post) => {
                                return (
                                    <Fragment key={post.id}>
                                        <div className="card grid-item border-light mb-3 profile-card-5 text-right" style={{"width": "18rem"}}>
                                            <div className="card-img-block">
                                                <Image src={`/assets/posts/${post.id}/${post.cover}`} alt={post.Title} className="card-img-top" width={286} height={180} />
                                            </div>
                                            <div className="card-body">
                                                <h5 className="card-title">{post.Title}</h5>
                                                <p className="card-text">{post.Description}</p>
                                                <a href={`/${this.state.currentLocale}/${post.url.replace('../', '')}/${post.id}`} className="btn btn-primary">Read</a>
                                            </div>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LastPost;