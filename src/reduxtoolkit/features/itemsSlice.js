import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: null,
};

const itemsSlice = createSlice({
	name: "items",
	initialState,
	reducers: {
        setItems: (state, action) => {
            state.items=action.payload
		}
	},
});

export default itemsSlice.reducer;
export const { setItems,setLoggOut } = itemsSlice.actions