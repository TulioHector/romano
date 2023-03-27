import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { pageConfig } from '../context';

class FirebaseSingleton {
  static instance;

  constructor() {
    if (FirebaseSingleton.instance) {
      return FirebaseSingleton.instance;
    }
    const app = initializeApp(pageConfig.firebaseConfi);

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