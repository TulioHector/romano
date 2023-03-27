"use client"
import { PureComponent, Fragment, createRef } from "react";
import dynamic from 'next/dynamic';
import { PageContext } from '../../components/context';
import Database from '../../components/Firebase';
import moment from 'moment';

const InfiniteScroll = dynamic(() => import('react-infinite-scroll-component'), {
    ssr: false,
  });

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
        if(page){
            const list = await Database.getPostList();
            list.forEach((element) => {
                const data = element.data();
                info.push(data);
            });
        }
        return info;
    }

    async componentDidMount() {
        try {
            const language = this.state.currentLocale && window.navigator.userLanguage || window.navigator.language || navigator.language;
            this.setState({ hasMounted: true, currentLocale: language});
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
                <InfiniteScroll
                    dataLength={3}
                    next={this.loadPosts.bind(this)}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                          <b>Yay! You have seen it all</b>
                        </p>
                      }
                >
                    {this.state.posts.map(item => (
                        <Fragment key={item.id}>
                            <div className="post-preview" id={item.id}>
                                <a href={`${this.state.currentLocale}/${item.url}/${item.id}`}>
                                    <h2 className="post-title">{item.Title}</h2>
                                    <h3 className="post-subtitle">{item.Description}</h3>
                                </a>

                                <p className="post-meta">
                                    Posted by
                                    <a href="#!"> {item.Author} </a>
                                    {moment(item.DatePublish.toDate()).format('LL')}
                                </p>
                            </div>
                            <hr className="my-4" />
                        </Fragment>
                    ))}
                </InfiniteScroll>
            </>
        );
    }
}

export default List;