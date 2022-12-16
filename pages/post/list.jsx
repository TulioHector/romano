'use client';

import { Component, Fragment, createRef } from "react";
import dynamic from 'next/dynamic';
import { PageContext } from '../../components/context';
import Database from '../../components/Firebase';

const InfiniteScroll = dynamic(() => import('react-infinite-scroll-component'), {
    ssr: false,
  });

class List extends Component {
    static contextType = PageContext;
    page = createRef(1);

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
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
            const Fetchdata = async () => {
                const info = await this.loadPosts(this.page);
                const listPost = this.state.posts.concat(info)
                this.setState({ posts: listPost });
            }
            await Fetchdata();
        } catch (error) { console.log(error) }
    }

    render() {
        return (
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
                                <a href={`${item.url}/${item.id}`}>
                                    <h2 className="post-title">{item.Title}</h2>
                                    <h3 className="post-subtitle">{item.Description}</h3>
                                </a>

                                <p className="post-meta">
                                    Posted by
                                    <a href="#!"> {item.Author} </a>
                                    {item.DatePublish}
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