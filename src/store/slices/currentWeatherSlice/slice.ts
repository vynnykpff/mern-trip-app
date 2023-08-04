import {createSlice} from '@reduxjs/toolkit'
import currentWeatherSliceThunks from './thunks';

interface WeatherOnTripObject {
	temp: number;
	tempmax: number;
	tempmin: number;
}

interface CurrentWeatherObject {
	datetime: string;
	temp: number;
}

export type CurrentWeatherState = {
	city: string,
	startTrip: string,
	endTrip: string,
	weatherOnTrip: WeatherOnTripObject[],
	currentWeather: CurrentWeatherObject[],
}

const initialState: CurrentWeatherState = {
	city: "",
	startTrip: "",
	endTrip: "",
	weatherOnTrip: [],
	currentWeather: [],
}

export const currentWeatherSlice = createSlice({
	name: 'current_weather',
	initialState,
	reducers: {
		setTripData: (state, {payload: {startTrip, endTrip, city}}) => {
			return {
				...state,
				city,
				startTrip,
				endTrip,
			}
		},
	},
	extraReducers: (builder) => {
		for (const thunk of currentWeatherSliceThunks) {
			builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
		}
	}
})

export const {setTripData} = currentWeatherSlice.actions
export default currentWeatherSlice.reducer;
