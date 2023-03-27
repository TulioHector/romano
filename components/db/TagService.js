import { collection, addDoc, getDocs, query, orderBy, limit, where } from "firebase/firestore";
import FirebaseSingleton from './FirebaseSingleton';

class TagService {
    constructor() {
        this.db = FirebaseSingleton.getInstance().getDb();
    }

    async getAllTags() {
        const tagsRef = collection(this.db,"tags");
        const q = query(tagsRef, orderBy("name"));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }

    async getTagById(id) {
        const tagRef = collection(this.db,"tags").doc(id);
        const doc = await tagRef.get();
        return doc.data();
    }

    async createTag(data) {
        const tagsRef = collection(this.db,"tags");
        await tagsRef.add(data);
    }
}

export default TagService;