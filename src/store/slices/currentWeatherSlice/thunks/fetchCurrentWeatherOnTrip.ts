import {createAsyncThunk} from "@reduxjs/toolkit";
import {WeatherService} from "@/services/WeatherService.ts";
import {CurrentWeatherState} from "@/store/slices/currentWeatherSlice/slice.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";

const asyncThunk = createAsyncThunk(
	'current_weather/fetchCurrentWeatherOnTrip',
	async function (_, {rejectWithValue, getState}) {
		try {
			const tripData = getState().currentWeatherSliceReducer;
			const response = await WeatherService.getCurrentWeatherOnTrip(tripData);

			return response;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<CurrentWeatherState> = (state, action) => {
	state.weatherOnTrip = action.payload;
}

export const fetchCurrentWeatherOnTrip: StoreAsyncThunk<CurrentWeatherState> = {
	asyncThunk,
	storeHandler
}
