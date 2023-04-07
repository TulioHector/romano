import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

class FirebaseSingleton {
  static instance;

  constructor() {
    if (FirebaseSingleton.instance) {
      return FirebaseSingleton.instance;
    }
    const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_OBJ_KEY);
    const app = initializeApp(firebaseConfig);

    FirebaseSingleton.instance = this;
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }

  static getInstance() {
    return new FirebaseSingleton();
  }

  getAuth() {
    return this.auth;
  }

  getDb() {
    return this.db;
  }
}

export default FirebaseSingleton;