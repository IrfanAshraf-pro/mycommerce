import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import itemsReducer from "../features/itemsSlice";
import cartSlice from "../features/cartSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		items: itemsReducer,
		cart: cartSlice,
	},
});

export default store;
