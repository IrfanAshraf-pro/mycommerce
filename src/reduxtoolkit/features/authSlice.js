import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	loggedIn: false,
	user: [],
	error: "",
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLogin: (state, action) => {
			state.loggedIn = true
			state.user = action.payload.user
			state.error=action.payload.error
		},
		setLogOut: (state) => {
			state.loggedIn = false
			state.user = []
			state.error=''
		},
	},
});

export default authSlice.reducer;
export const {setLogin,setLogOut} =authSlice.actions