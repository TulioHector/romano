import TagService from './TagService';
import PostService from './PostService';
import TagsPostService from './TagsPostService';

class FirestoreFacade {
    constructor() {
        this.postService = new PostService();
        this.tagService = new TagService();
        this.tagsPostService = new TagsPostService();
    }

    static getInstance() {
        if (!FirestoreFacade.instance) {
            FirestoreFacade.instance = new FirestoreFacade();
        }
        return FirestoreFacade.instance;
    }

    async getPostList(page, perPage, lastItemList, currentTotal, monthFilter, tagFilters) {
        return this.postService.getPostList(page, perPage, lastItemList,currentTotal, monthFilter, tagFilters);
    }

    async getPostById(id) {
        return this.postService.getPostById(id);
    }

    async getPostsWhitoutLimit() {
        return this.postService.getPostsWhitoutLimit();
    }

    async getLastPosts() {
        return this.postService.getLastPosts();
    }

    async getCountByMonth(startYear, locale) {
        return this.postService.getCountByMonth(startYear, locale);
    }

    // tags regions

    async getAllTags() {
        return this.tagService.getAllTags();
    }

    async getTagById(id) {
        return this.tagService.getTagById(id);
    }

    async createTag(data) {
        return this.tagService.createTag(data);
    }

    //Tags and posts

    async getPostByTag(tagName) {
        return this.TagsPostService.getPostByTag(tagName);
    }
}

export default FirestoreFacade;