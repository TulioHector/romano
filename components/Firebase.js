import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, where} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { pageConfig } from './context';
//https://firebase.google.com/docs/firestore/query-data/queries
export class Database {
    static auth;
    static db;
    static app = initializeApp(pageConfig.firebaseConfi);

    static async getConnnections() {
        this.auth = getAuth(this.app);
        this.db = getFirestore(this.aapp);
    }

    static async getPostList() {        
        await Database.getConnnections();
        const postsRef = collection(this.db, "posts");
        const q = query(postsRef, orderBy("DatePublish"), limit(10));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }

    static async getPOstById(id) {
        await Database.getConnnections();
        const postsRef = collection(this.db, "posts");
        const q = query(postsRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }

    static async getPostsWhitoutLimit() {
        await Database.getConnnections();
        const postsRef = collection(this.db, "posts");
        const q = query(postsRef, orderBy("DatePublish"));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }

    static async setPost() {
        try {
            const docRef = await addDoc(collection(this.db, "posts"), {
                "id": 1,
                "Author": "Hector Abraham Romano",
                "DatePublish": "14/11/2022",
                "url": "../posts/tutorial1",
                "Title": "Tituo uno",
                "Description": "Description"
            });

            console.log("Document written with ID: ", docRef.id);
            const docRef2 = await addDoc(collection(this.db, "posts"), {
                "id": 2,
                "Author": "Hector Abraham Romano",
                "DatePublish": "20/10/2022",
                "url": "../posts/2022-10-20-arquitectura-evolutiva",
                "cover": "arq-evolutiva.png",
                "Title": "Arquitectura Evolutiva",
                "Description": ""
            });

            console.log("Document written with ID: ", docRef2.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
}

export default Database;