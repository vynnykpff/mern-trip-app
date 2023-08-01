import {createSlice, PayloadAction} from '@reduxjs/toolkit'

type currentCity = {
	city: string,
	cityGeoLink: string,
	cityImage: string | boolean,
	citySlug: string | boolean,
	status: boolean,
}

const initialState: currentCity = {
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

		setCityGeoLink: (state, action: PayloadAction<string>): void => {
			const data = action.payload.split('/');
			state.cityGeoLink = data[data.length - 2];
		},

		setCitySlug: (state, action) => {
			if (action.payload.length) {
				const data = action.payload.split('slug:');
				return {
					...state,
					citySlug: data[data.length - 1],
				}
			}
			return {
				...state,
				citySlug: action.payload,
				cityImage: "",
				status: false,
			}
		},

		setCityImage: (state, action: PayloadAction<string>) => {
			return {
				...state,
				cityImage: action.payload,
				status: true,
			}
		}
	}
})

export const {setCurrentCity, setCityGeoLink, setCityImage, setCitySlug} = currentCitySlice.actions
export default currentCitySlice.reducer;
