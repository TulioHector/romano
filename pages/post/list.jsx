"use client"
import { PureComponent, Fragment, createRef } from "react";
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
        this.postImages = createRef([]);
    }

    async loadPosts(page, monthQueryParam, tagsQueryParam, lastItemList, currentTotal) {
        let info = [];
        if (page) {
            const list = await FirestoreFacade.getInstance().getPostList(page, 5, lastItemList, currentTotal, monthQueryParam, tagsQueryParam);
            const lastVisible = list?.lastItemList;
            this.setState({ lastItemList: lastVisible, currentItemsTotal: list?.currentTotal });
            list?.posts.forEach((element) => {
                const data = element;
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
            const info = await this.loadPosts(nextPage, null, null, lastItemList, currentItemsTotal);
            const listPost = this.state.posts.concat(info.map(doc => doc));
            this.postImages = listPost.map((element, i) => createRef(i));
            this.setState({ posts: listPost, page: nextPage });
        }
        this.fitBackground();
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
                this.postImages = listPost.map((element, i) => createRef(i));
            }

            await Fetchdata();
        } catch (error) { console.log(error) }
    }

    fitBackground = () => {
        const postImagesArray = Object.values(this.postImages);
        postImagesArray.forEach((ref, i) => {
            if (ref && ref.current) {
                const current = ref.current;
                const backgroundSrc = current.getAttribute('data-src');
                const newCss = {
                    backgroundImage: `url('${backgroundSrc}')`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                };
                Object.assign(current.style, newCss);
            }
        });
    };

    async componentDidUpdate() {
        this.fitBackground();
    }

    render() {
        return this.state.hasMounted && (
            <>
                {this.state.posts.map((item, index) => (
                    <Fragment key={item.id}>
                        <div className="card-box col-sm-6 col-lg-4 mb-4">
                            <div className="card card-list-post" key={item.id} data-background="image" data-src={`/assets/posts/${item.id}/${item.cover}`} ref={this.postImages[index]}>
                                <div className="header">
                                    <div className="category">
                                        {item.tags.map((tag, tagIndex) => (
                                            <h6 key={`tag_${tagIndex}`} className="label label-danger">{tag}</h6>
                                        ))}
                                        <p className="description">{item.Description}</p>
                                    </div>
                                </div>
                                <div className="content">
                                    <h4 className="title title-uppercase">
                                        <a href={`${this.state.currentLocale}/${item.url}/${item.id}`}>{item.Title}</a>
                                    </h4>
                                </div>
                                <div className="filter">
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