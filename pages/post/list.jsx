"use client"
import { PureComponent, Fragment } from "react";
import Image from 'next/image';
import { PageContext } from '../../components/context';
import FirestoreFacade from '../../components/db/FirestoreFacade';
import moment from 'moment';

class List extends PureComponent {
    static contextType = PageContext;

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasMounted: false,
            currentLocale: '',
            page: 1,
            lastItemList: {},
            currentItemsTotal: 0,
        }
        this.loadPosts = this.loadPosts.bind(this);
        this.cargarMasArticulos = this.cargarMasArticulos.bind(this);
    }

    async loadPosts(page, monthQueryParam, tagsQueryParam, lastItemList, currentTotal) {
        let info = [];
        if (page) {
            const list = await FirestoreFacade.getInstance().getPostList(page, 5, lastItemList, currentTotal, monthQueryParam, tagsQueryParam);
            const lastVisible = list?.querySnapshot.docs[list?.querySnapshot.docs.length - 1];
            this.setState({ lastItemList: lastVisible, currentItemsTotal: list?.currentTotal });
            list?.querySnapshot.forEach((element) => {
                const data = element.data();
                info.push(data);
            });
        }
        return info;
    }

    async cargarMasArticulos(e) {
        e.preventDefault();
        const { page, lastItemList, currentItemsTotal } = this.state;
        const nextPage = page + 1;
        if (lastItemList && currentItemsTotal) {
            const info = await this.loadPosts(nextPage, null, null,lastItemList, currentItemsTotal);
            const listPost = this.state.posts.concat(info.map(doc => doc));
            this.setState({ posts: listPost, page: nextPage });
        }
    };

    async componentDidMount() {
        try {
            const language = this.state.currentLocale && window.navigator.userLanguage || window.navigator.language || navigator.language;
            moment.locale(language);
            const queryParams = new URLSearchParams(window.location.search);
            const month = queryParams.get("month");
            const tagsSelected = queryParams.get("tags");
            this.setState({ hasMounted: true, currentLocale: language });
            const Fetchdata = async () => {
                const info = await this.loadPosts(this.state.page, month, tagsSelected?.split(';'));
                const listPost = this.state.posts.concat(info)
                this.setState({ posts: listPost });
            }
            
            await Fetchdata();
        } catch (error) { console.log(error) }
    }

    render() {
        return this.state.hasMounted && (
            <>
                {this.state.posts.map(item => (
                    <Fragment key={item.id}>
                        <div className="col-sm-6 col-lg-4 mb-4">
                            <div className="card mb-3 card-list-post" key={item.id} style={{ "width": "511", "height": "260" }}>
                                <Image src={`/assets/posts/${item.id}/${item.cover}`} alt={item.Title} className="card-img-top" width={511} height={260} />
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
                    <button onClick={this.cargarMasArticulos} className="btn btn-primary btn-lg btn-bloc">Cargar más artículos</button>
                )}
            </>
        );
    }
}

export default List;