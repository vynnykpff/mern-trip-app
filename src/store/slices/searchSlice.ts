import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type SearchState = {
	searchValue: string,
}

const initialState: SearchState = {
	searchValue: "",
};

export const searchSlice = createSlice({
	name: "search_slice",
	initialState,
	reducers: {
		setSearchValue: (state, action: PayloadAction<string>) => {
			return {
				...state,
				searchValue: action.payload,
			};
		}
	}
});

export const {setSearchValue} = searchSlice.actions;
export default searchSlice.reducer;
