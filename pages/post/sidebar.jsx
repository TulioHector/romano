"use client"
import { PureComponent } from "react";
import Image from 'next/image';
import FirestoreFacade from '../../components/db/FirestoreFacade';
import {capitalizeText} from '../../components/utils';

class SideBar extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            hasMounted: false,
            listPost: [],
            listTags: [],
        };
    }

    async getTask(language) {
        try {
            const postDb = FirestoreFacade.getInstance().getCountByMonth(2022, language);
            const listPost = await postDb;
            const tagsDb = FirestoreFacade.getInstance().getAllTags();

            const listTags = await tagsDb.then((item) => {
                let tags = [];
                item.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    tags.push(doc.data());
                });
                return tags;
            }).catch(err => console.log(err));

            this.setState({
                listPost: listPost,
                listTags: listTags,
            });
            return { listPost, listTags };
        } catch (error) {
            console.log("Error to load sidebar posts:", error);
        }
    }

    async componentDidMount() {
        const language = this.state.currentLocale && window.navigator.userLanguage || window.navigator.language || navigator.language;
        const result = await this.getTask(language);
        this.setState({ hasMounted: true, currentLocale: language, listPost: result.listPost, listTags: result.listTags });
    }

    render() {
        return this.state.hasMounted && (
            <>
                <div className="col-lg-3 sidebar">
                    {/* <div class="sidebar-box search-form-wrap">
                                        <form action="#" class="search-form">
                                            <div class="form-group">
                                                <span class="icon fa fa-search"></span>
                                                <input type="text" class="form-control" id="s" placeholder="Type a keyword and hit enter">
                                            </div>
                                        </form>
                                    </div> */}

                    <div className="sidebar-box">
                        <div className="bio text-center" itemScope itemType="https://schema.org/Person">
                            <Image itemProp="image" src="/assets/img/tito-avatar.webp" alt="Hector Abraham Romano" className="rounded-circle" width={150} height={150} />
                            <div className="bio-body">
                                <h2 itemProp="name">Hector Abraham Romano</h2>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem facilis sunt repellendus excepturi beatae porro debitis voluptate nulla quo veniam fuga sit molestias minus.</p>
                                <p><a href="#" className="btn btn-primary btn-sm rounded px-4 py-2">Read my bio</a></p>

                            </div>
                        </div>
                    </div>

                    <div className="sidebar-box">
                        <h3 className="heading">Posts</h3>
                        <ul className="list-group list-group-flush list-unstyled">
                            {
                                this.state.listPost.map((post, index) => {
                                    return (
                                        <li key={index} className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold"><a href="#" >({post.year}) {post.month}</a></div>
                                            </div>
                                            <span className="badge bg-primary rounded-pill">{post.count}</span>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>

                    <div className="sidebar-box">
                        <h3 className="heading">Tags</h3>
                        <div className="justify-content-start text-start w-100 my-5">
                            {
                                this.state.listTags.map((tag, index) => {
                                    return (
                                        <a key={index} href="#" className="btn btn-tag btn-primary btn-sm rounded px-4 py-2">{capitalizeText(tag.name)}</a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    };
}

export default SideBar;