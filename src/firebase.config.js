import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAwlQ-iOBa753SIiwrA86Y_9v2OK9ci5OE",
	authDomain: "mycommerce-decdb.firebaseapp.com",
	projectId: "mycommerce-decdb",
	storageBucket: "mycommerce-decdb.appspot.com",
	messagingSenderId: "798722444358",
	appId: "1:798722444358:web:d9d27fd5af99dbae600e47",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const Gprovider = new GoogleAuthProvider();
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth, Gprovider, firestore, storage };
