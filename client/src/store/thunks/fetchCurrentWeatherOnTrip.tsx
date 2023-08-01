import {createAsyncThunk} from "@reduxjs/toolkit";
import {setCheckError} from "../../helpers";
import {WeatherService} from "../../services/weatherService.tsx";
import {setWeatherOnTrip} from "../slices/currentWeatherSlice.ts";

export const fetchCurrentWeatherOnTrip = createAsyncThunk(
	'current_weather/fetchCurrentWeatherOnTrip',
	async function (_, {rejectWithValue, getState, dispatch}) {
		try {
			const tripData = getState().currentWeatherSliceReducer;

			const response = await WeatherService.getCurrentWeatherOnTrip(tripData);

			setCheckError(response, "Invalid data. Server error");

			return dispatch(setWeatherOnTrip(response))

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
