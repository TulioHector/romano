'use client';

import { Component } from 'react';
import dynamic from 'next/dynamic';
import { PageContext,pageHeaderType } from '../../../components/context';
import Database from '../../../components/Firebase';
import Loading from '../../../components/Loading';

const Markdown = dynamic(() => import("markdown-to-jsx"), {
    ssr: false,
});
const Code = dynamic(() => import("../../../components/Code"), {
    ssr: false,
});
const PageHeader = dynamic(() => import('../../../components/PageHeader'), {
    ssr: false,
});
const SeoHeader = dynamic(() => import('../../../components/seoHeader'), {
    ssr: false,
});

export async function getStaticProps({ params }) {
    const { slug } = params
    return {
        revalidate: 1,
        props: { slug },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: ['2022-12-01-ADR-architecture-decision-records', '3'] } },
            { params: { slug: ['tutorial1', '1'] } },
            { params: { slug: ['2022-10-20-arquitectura-evolutiva', '2'] } },
        ], fallback: false
    }
}

class Post extends Component {
    static contextType = PageContext;
    static idPost = 0;
    static postName = {};

    constructor(props, context) {
        super(props);
        const slug = props.slug;
        this.idPost = slug[1];
        this.postName = slug[0];
        this.state = {
            postContent: '',
            isDark: true,
            setIsDark: (toogle) => {
                this.setState({ isDark: toogle });
            },
        }
        this.getTask = this.getTask.bind(this);
        context.setPageSettings({headerType: pageHeaderType.Post, });
    }

    async getTask() {
        try {
            const idPost = Number(this.idPost);
            const postUrl = `/posts/${this.postName}`;
            const postDb = Database.getPOstById(idPost);
            const response = await fetch(postUrl + '.md');
            const mdFile = await response.text();

            this.setState({ postContent: mdFile });

            const result = await postDb.then((item) => {
                let post;
                item.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    post = doc.data();
                });
                return post;
            }).catch(err => console.log(err));
                       
            this.setState({
                postInfo: { ...result },
                headers: [
                    { property: "og:locale", content: "es_AR" },
                    { property: "og:type", content: "website" },
                    { property: "og:title", content: result.Title },
                    { property: "og:description", content: result.Description },
                    { property: "og:url", content: `https://romanohector.vercel.app/post/${this.postName}/${this.idPost}` },
                    { property: 'og:image', content: `https://romanohector.vercel.app/assets/posts/${this.idPost}/${result.cover}` },
                    { property: "og:site_name", content: result.Author },
                    { property: "canonical", content: `https://romanohector.vercel.app/post/${this.postName}/${this.idPost}` },
                ],
                headerTitle: result.Title,
                description: result.Description + result.DatePublish
            });
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount() {
        try {
            const result = await this.getTask();
            let pageConfig = this.context.pageSettings;
            const settings = {
                ...pageConfig,
                backgroundImage: `url('../../../assets/posts/${this.idPost}/${result.cover}')`,
                pageTitle: result.Title,
                pageSubTitle: result.Description + result.DatePublis,
                headerType: pageHeaderType.Post,
                pageAuthor: result.Author,
                pageDatePublish: result.DatePublish,
            }
            this.context.setPageSettings(settings); 
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        if (this.state.postInfo !== undefined) {
            return (
                <>
                    <PageHeader />
                    <SeoHeader metatags={this.state.headers} title={this.state.headerTitle} description={this.state.description} />
                    <article className="mb-4">
                        <div className="container px-4 px-lg-5">
                            <div className="row gx-4 gx-lg-5 justify-content-center">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <Markdown
                                        options={{
                                            overrides: {
                                                Code: {
                                                    component: Code,
                                                    props: {
                                                        isDark: this.state.isDark,
                                                        setIsDark: this.state.setIsDark
                                                    }
                                                }
                                            }
                                        }}
                                    >
                                        {this.state.postContent}
                                    </Markdown>
                                </div>
                            </div>
                        </div>
                    </article>
                </>
            );
        } else {
            return (
                <>
                    <PageHeader />
                    <article className="mb-4">
                        <div className="container px-4 px-lg-5">
                            <div className="row gx-4 gx-lg-5 justify-content-center">
                                <div className="col-md-10 col-lg-8 col-xl-7">
                                    <Loading />
                                </div>
                            </div>
                        </div>
                    </article>
                </>
            )
        }
    }
}

export default Post;