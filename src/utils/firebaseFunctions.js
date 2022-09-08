import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
	await setDoc(doc(firestore, "items", `${Date.now()}`), data, {
		merge: true,
	});
	console.log("submitted successfully");
};

// getall food items
export const getAllItems = async () => {
	const items = await getDocs(
		query(collection(firestore, "items"), orderBy("id", "desc"))
	);
	return items.docs.map((doc) => doc.data());
};
