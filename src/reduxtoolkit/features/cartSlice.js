import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	cartShow: false,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCart: (state, action) => {
			state.cart.push(action.payload.item);
		},
		setCartShow: (state, action) => {
			state.cartShow = action.payload.cartShow;
		},
		emptyCart: (state) => {
			state.cart = [];
		},
		removeItem: (state, action) => {
			console.log(state.cart, action.payload.item);
			state.cart = state.cart.filter(
				(item) => +item.id !== +action.payload.item.id
			);
		},
		setQtys: (state, action) => {
			state.cart = state.cart.map((item) =>
				item.id === action.payload.newItem.id
					? { ...item, qty: action.payload.newItem.qty }
					: item
			);
		},
	},
});

export default cartSlice.reducer;
export const { setCart, setCartShow, emptyCart, removeItem, setQtys } =
	cartSlice.actions;
