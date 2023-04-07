import { collection, addDoc, getDocs, query, orderBy, limit, where, startAfter, Timestamp } from "firebase/firestore";
import FirebaseSingleton from './FirebaseSingleton';

class PostService {
    constructor() {
        this.db = FirebaseSingleton.getInstance().getDb();
    }

    async getPostList(page, perPage, lastItemList, currentTotal, monthFilter, tagFilters) {
        const postsRef = collection(this.db, "posts");
        let q;

        if (lastItemList) {
            const startIndex = currentTotal < perPage;
            if (startIndex) {
                return null;
            }
            q = query(postsRef, orderBy("DatePublish"), startAfter(lastItemList), limit(perPage));
        } else {
            q = query(postsRef, orderBy("DatePublish"), startAfter(page * perPage), limit(perPage));
        }

        if (monthFilter) {
            const startOfMonth = new Date(monthFilter);
            startOfMonth.setDate(1);
            const endOfMonth = new Date(monthFilter);
            endOfMonth.setMonth(endOfMonth.getMonth() + 1);
            endOfMonth.setDate(0);
            q = query(q, where('DatePublish', '>=', startOfMonth), where('DatePublish', '<=', endOfMonth));
        }

        if (tagFilters && tagFilters.length > 0) {
            const tagsRef = collection(this.db, "tags");
            const tagIds = [];
            const tagPromises = tagFilters.map(async (tag) => {
                const tagSnapshot = await getDocs(query(tagsRef, where("name", "==", tag)));
                if (tagSnapshot.empty) return;
                tagSnapshot.forEach((doc) => tagIds.push(doc.id));
            });
            await Promise.all(tagPromises);
            if (tagIds.length > 0) {
                q = query(q, where("tags", "array-contains-any", tagIds));
            }
        }

        const querySnapshot = await getDocs(q);
        const totalDocs = querySnapshot.size;
        return { querySnapshot, currentTotal: totalDocs };
    }

    async getPostById(id) {
        const postsRef = collection(this.db, "posts");
        const q = query(postsRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }

    async getPostsWhitoutLimit() {
        const postsRef = collection(this.db, "posts");
        const q = query(postsRef, orderBy("DatePublish"));
        const querySnapshot = await getDocs(q);
        return querySnapshot;
    }

    async getLastPosts() {
        const postsRef = collection(this.db, "posts");
        const latestPostsQuery = query(postsRef, orderBy('DatePublish', 'desc'), limit(3));
        const latestPostsSnapshot = await getDocs(latestPostsQuery);
        return latestPostsSnapshot;
    }

    async getCountByMonth(startYear, locale) {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const countByMonth = [];

        const postsRef = collection(this.db, "posts");

        for (let year = startYear; year <= currentYear; year++) {
            const promises = [];
            const monthsWithPosts = new Set();

            const q = query(postsRef, where("DatePublish", ">=", Timestamp.fromDate(new Date(year, 0, 1))), where("DatePublish", "<=", Timestamp.fromDate(new Date(year, 11, 31))));

            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                const post = doc.data();
                const month = new Date(post.DatePublish.seconds * 1000).getMonth();

                monthsWithPosts.add(month);
            });

            for (let month = 0; month <= 11; month++) {
                if (year === currentYear && month >= currentMonth) {
                    break;
                }

                const startDate = Timestamp.fromDate(new Date(year, month, 1));
                const endDate = Timestamp.fromDate(new Date(year, month + 1, 0));

                if (monthsWithPosts.has(month)) {
                    const q = query(postsRef, where("DatePublish", ">=", startDate), where("DatePublish", "<=", endDate));

                    const promise = getDocs(q).then((querySnapshot) => {
                        const monthName = new Date(year, month).toLocaleString(locale, { month: 'long' });
                        const info = {
                            month: monthName,
                            year: year,
                            count: querySnapshot.size,
                        };
                        return info;
                    });

                    promises.push(promise);
                }
                // else {
                //     const monthName = new Date(year, month).toLocaleString(locale, { month: 'long' });
                //     const info = {
                //         month: monthName,
                //         year: year,
                //         count: 0,
                //     };
                //     promises.push(Promise.resolve(info));
                // }
            }

            const result = await Promise.all(promises);
            countByMonth.push(...result.filter((item) => item.count >= 1));
        }

        return countByMonth;
    }

    // lastPost,  es el último documento recuperado en la última consulta realizada.
    async getPostByTag(tagName, lastPost = null) {
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

    async setPost() {
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

export default PostService;