import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, where } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { pageConfig } from './context';
//https://firebase.google.com/docs/firestore/query-data/queries
export class Database {
    static initialized = false;
    static auth;
    static db;
    static app = initializeApp(pageConfig.firebaseConfi);

    static async getConnnections() {
        if(!Database.initialized) {
            this.auth = getAuth(this.app);
            this.db = getFirestore(this.app);
            Database.initialized = true;
        }
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

    static async getLastPosts() {
        await Database.getConnnections();
        const postsRef = collection(this.db, "posts");
        const latestPostsQuery = query(postsRef, orderBy('DatePublish', 'desc'), limit(3));
        const latestPostsSnapshot = await getDocs(latestPostsQuery);
        return latestPostsSnapshot;
    }

    static async getCountByMonth(startYear, locale) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const countByMonth = [];

        await Database.getConnnections();
        const postsRef = collection(this.db, "posts");
        console.log("DB Post->", postsRef);
        for (let year = startYear; year <= currentYear; year++) {
            const promises = [];

            for (let month = 1; month <= 12; month++) {
                if (year === currentYear && month > currentMonth) {
                    break;
                }

                const startDate = new Date(year, month - 1, 1);
                const endDate = new Date(year, month, 0);

                const q = query(postsRef, where("DatePublish", ">=", startDate), where("DatePublish", "<=", endDate));
                const promise = getDocs(q).then((querySnapshot) => {
                    const monthName = new Date(year, month).toLocaleString(locale, { month: 'long' });
                    return {
                        month: monthName,
                        year: year,
                        count: querySnapshot.size,
                    };
                });

                promises.push(promise);
            }
            const result = await Promise.all(promises);
            countByMonth.push(...result.filter((item) => item.count >= 1));
        }
        return countByMonth;
    }

    static async getTags() {
        await Database.getConnnections();
        const tagsRef = collection(this.db, "tags");
        console.log("db tags->", tagsRef);
        const snapshot = await tagsRef.orderBy("name").get();
        const tags = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        return tags;
    }

    // lastPost,  es el último documento recuperado en la última consulta realizada.
    static async getPostByTag(tagName, lastPost = null) {
        await Database.getConnnections();
        const postsRef = collection(this.db, "posts");
        const q = query(
            postsRef,
            where("tags", "array-contains", tagName),
            orderBy("DatePublish", "desc"),
            lastPost ? startAfter(lastPost) : null,
            limit(POSTS_PER_PAGE)
        );
        const querySnapshot = await q.get();
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