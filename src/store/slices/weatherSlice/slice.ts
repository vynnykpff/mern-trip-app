import {createSlice} from "@reduxjs/toolkit";
import weatherSliceThunks from "./thunks";
import {changeSymbols} from "@/helpers/changeSymbols.ts";

interface WeatherOnTripObject {
	temp: number;
	tempmax: number;
	tempmin: number;
	datetime: string;
	icon: string;
}

interface WeatherObject {
	datetime: string;
	temp: number;
}

export type WeatherState = {
	cityName: string,
	startDate: string,
	endDate: string,
	weatherOnTrip: WeatherOnTripObject[],
	weatherOnDay: WeatherObject[],
}

const initialState: WeatherState = {
	cityName: "",
	startDate: "",
	endDate: "",
	weatherOnTrip: [],
	weatherOnDay: [],
};

export const weatherSlice = createSlice({
	name: "weather",
	initialState,
	reducers: {
		setTripData: (state, {payload: {startDate, endDate, cityName}}) => {
			return {
				...state,
				cityName,
				startDate: changeSymbols(startDate, ".", "-"),
				endDate: changeSymbols(endDate, ".", "-"),
			};
		},
		deleteTripData: (state) => {
			return {
				...state,
				weatherOnTrip: [],
			}
		}
	},
	extraReducers: (builder) => {
		for (const thunk of weatherSliceThunks) {
			builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
		}
	}
});

export const {setTripData, deleteTripData} = weatherSlice.actions;
export default weatherSlice.reducer;
