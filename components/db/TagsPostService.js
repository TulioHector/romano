import { collection, addDoc, getDocs, query, orderBy, limit, where } from "firebase/firestore";
import FirebaseSingleton from './FirebaseSingleton';

class TagsPostService {
    constructor() {
        this.db = FirebaseSingleton.getInstance().getDb();
    }

    async getPostByTag(tagName) {
        const tagRef = collection(db, "tags");
        const tagQuerySnapshot = await getDocs(where("name", "==", tagName));
        const tagDoc = tagQuerySnapshot.docs[0];
      
        if (!tagDoc) {
          throw new Error(`Tag with name "${tagName}" does not exist.`);
        }
      
        const tagId = tagDoc.id;
        const postsRef = collection(db, "posts");
        const postQuerySnapshot = await getDocs(where("tags", "array-contains", tagRef.doc(tagId)));
      
        return postQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
    }
}

export default TagsPostService;