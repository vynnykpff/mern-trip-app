import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import currentCitySliceThunks from './thunks';

export type CurrentCityState = {
	city: string,
	cityGeoLink: string,
	cityImage: string | boolean,
	citySlug: string | boolean,
	status: boolean,
}

const initialState: CurrentCityState = {
	city: "",
	cityGeoLink: "",
	cityImage: "",
	citySlug: "",
	status: false,
}

export const currentCitySlice = createSlice({
	name: 'current_city',
	initialState,
	reducers: {
		setCurrentCity: (state, action: PayloadAction<string>) => {
			return {
				...state,
				city: action.payload,
			};
		},

	},
	extraReducers: (builder) => {
		for (const thunk of currentCitySliceThunks) {
			builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
		}
	}
})

export const {setCurrentCity} = currentCitySlice.actions
export default currentCitySlice.reducer;
