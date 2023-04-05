"use client"
import { PureComponent, Fragment, createRef } from "react";
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { PageContext } from '../../components/context';
import Database from '../../components/Firebase';
import moment from 'moment';
//import Masonry from 'react-masonry-css';

class List extends PureComponent {
    static contextType = PageContext;
    page = createRef(1);

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasMounted: false,
            currentLocale: ''
        }
        this.page.current = 1;
        this.loadPosts.bind(this);
    }

    async loadPosts(page) {
        let info = [];
        if (page) {
            const list = await Database.getPostList();
            list.forEach((element) => {
                const data = element.data();
                info.push(data);
            });
        }
        return info;
    }

    cargarMasArticulos = () => {
        //setNumArticulos(numArticulos + 10);
        console.log("voy a buscar mas posts");
    };

    async componentDidMount() {
        try {
            const language = this.state.currentLocale && window.navigator.userLanguage || window.navigator.language || navigator.language;
            this.setState({ hasMounted: true, currentLocale: language });
            const Fetchdata = async () => {
                const info = await this.loadPosts(this.page);
                const listPost = this.state.posts.concat(info)
                this.setState({ posts: listPost });
            }
            moment.locale(language);
            await Fetchdata();
        } catch (error) { console.log(error) }
    }

    render() {
        return this.state.hasMounted && (
            <>
                {this.state.posts.map(item => (
                    // <Fragment key={item.id}>
                    //     <div className="post-preview" id={item.id}>
                    //         <a href={`${this.state.currentLocale}/${item.url}/${item.id}`}>
                    //             <h2 className="post-title">{item.Title}</h2>
                    //             <h3 className="post-subtitle">{item.Description}</h3>
                    //         </a>

                    //         <p className="post-meta">
                    //             Posted by
                    //             <a href="#!"> {item.Author} </a>
                    //             {moment(item.DatePublish.toDate()).format('LL')}
                    //         </p>
                    //     </div>
                    //     <hr className="my-4" />
                    // </Fragment>

                    <Fragment key={item.id}>
                        <div className="col-sm-6 col-lg-4 mb-4">
                            <div className="card grid-item border-light mb-3 card-posts text-right" key={item.id} style={{ "width": "511", "height": "260" }}>
                                <div className="card-img-block">
                                    <Image src={`/assets/posts/${item.id}/${item.cover}`} alt={item.Title} className="card-img-top" width={511} height={260} />
                                </div>
                                <div className="card-body">
                                    <a href={`${this.state.currentLocale}/${item.url}/${item.id}`}>
                                        <h5 className="card-title">{item.Title}</h5>
                                    </a>

                                    <p className="card-text">{item.Description}</p>
                                    <p className="card-text"><small className="text-muted">{moment(item.DatePublish.toDate()).format('LL')}</small></p>
                                </div>
                            </div>
                        </div>

                    </Fragment>
                ))}

                {(
                    <button onClick={this.cargarMasArticulos}>Cargar más artículos</button>
                )}
            </>
        );
    }
}

export default List;