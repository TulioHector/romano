"use client"
import { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { PageContext, pageHeaderType } from '../../../components/context';
import FirestoreFacade from '../../../components/db/FirestoreFacade';
import Loading from '../../../components/Loading';
import moment from 'moment';

const Markdown = dynamic(() => import("markdown-to-jsx"), {ssr: false});
const Code = dynamic(() => import("../../../components/Code"), {ssr: false});
const PageHeader = dynamic(() => import('../../../components/PageHeader'), {ssr: false});
const SeoHeader = dynamic(() => import('../../../components/seoHeader'), {ssr: false});
const LastPosts = dynamic(() => import('../recentList'), {ssr: false});
const SideBar = dynamic(() => import('../sidebar'), {ssr: false});

export async function getStaticProps({ params }) {
    const { slug } = params;
    return {
        revalidate: 7200,
        props: { slug },
    };
}

export async function getStaticPaths({ locales }) {
    const listPost = [
        { slug: ['2022-12-01-ADR-architecture-decision-records', '3'] },
        { slug: ['tutorial1', '1'] },
        { slug: ['2022-10-20-arquitectura-evolutiva', '2'] },
        { slug: ['2023-01-05-diagrams-arquitectura', '4'] },
        { slug: ['2023-01-06-pensar-como-arquitecto', '5'] },
        { slug: ['2023-03-14-API-Gateway', '7'] },
        { slug: ['2023-03-28-deuda-tecnica', '8'] },
        { slug: ['2023-04-13-Agile-discovery-with-cards', '9'] },
        { slug: ['2023-04-24-evaluacion-riesgos-arquitectura', '10'] },
        { slug: ['2023-04-18-desacoplamiento-servicios', '11'] },
        { slug: ['2023-04-21-cohesion-servicios', '12'] },
        { slug: ['19-12-2023-Construcciones-Estratégicas', '13'] },
    ];
    const paths = listPost.flatMap(post => {
        return locales.map(locale => {
            //console.log("a post->", post);
            return {
                params: post,
                locale: locale,
            };
        });
    });
    return {
        paths: paths, fallback: false
    }
}

class Post extends PureComponent {
    static contextType = PageContext;
    static idPost = 0;
    static postName = {};

    constructor(props, context) {
        super(props);
        const slug = props.slug;
        this.idPost = slug[1];
        this.postName = slug[0];
        this.state = {
            hasMounted: false,
            postContent: '',
            isDark: true,
            setIsDark: (toogle) => {
                this.setState({ isDark: toogle });
            },
        }
        this.getTask = this.getTask.bind(this);
        context.setPageSettings({ headerType: pageHeaderType.Post, });
    }

    async getTask() {
        try {
            const idPost = Number(this.idPost);
            const postUrl = `/posts/${this.postName}`;
            const postDb = FirestoreFacade.getInstance().getPostById(idPost);
            const response = await fetch(postUrl + '.md');
            const mdFile = await response.text();

            this.setState({ postContent: mdFile });

            const result = await postDb.then((item) => {
                let post;
                item.forEach((doc) => {
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
                    { property: "itemProp", value: 'creator', content: result.Author },
                    { property: "itemProp", value: 'name', content: result.Author },
                    { property: "itemProp", value: 'description', content: result.Description },
                    { property: "itemProp", value: 'image', content: `https://romanohector.vercel.app/assets/posts/${this.idPost}/${result.cover}` },
                ],
                headerTitle: result.Title,
                description: result.Description + result.DatePublish
            });
            return result;
        } catch (error) {
            console.log("Error to load md file:", error);
        }
    }

    async componentDidMount() {
        try {
            this.setState({ hasMounted: true, });
            const result = await this.getTask();
            let pageConfig = this.context.pageSettings;
            const language = window.navigator.userLanguage || window.navigator.language;
            moment.locale(language);
            const settings = {
                ...pageConfig,
                backgroundImage: `url('/assets/posts/${this.idPost}/${result.cover}')`,
                pageTitle: result.Title,
                pageSubTitle: result.Description,
                headerType: pageHeaderType.Post,
                pageAuthor: result.Author,
                pageDatePublish: moment(result.DatePublish.toDate()).format('YYYY-MM-DDThh:mm:ssZ'),
            }

            this.context.setPageSettings(settings);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        if (this.state.postInfo !== undefined) {
            return this.state.hasMounted && (
                <>
                    <PageHeader />
                    <SeoHeader metatags={this.state.headers} title={this.state.headerTitle} description={this.state.description} />
                    <article className="mb-4" title={this.state.headerTitle} lang="es">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div itemProp="articleBody" className='col-lg-9'>
                                    <Markdown
                                        options={{
                                            overrides: {
                                                Code: {
                                                    component: Code,
                                                    props: {
                                                        isDark: this.state.isDark,
                                                        setIsDark: this.state.setIsDark
                                                    }
                                                },
                                                table: {
                                                    props: {
                                                        className: 'table table-sm table-responsive',
                                                    }
                                                }
                                            }
                                        }}
                                    >
                                        {this.state.postContent}
                                    </Markdown>
                                </div>
                                <SideBar/>
                            </div>
                        </div>
                    </article>
                    <LastPosts />
                </>
            );
        } else {
            return this.state.hasMounted && (
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