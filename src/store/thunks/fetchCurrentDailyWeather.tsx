import {createAsyncThunk} from "@reduxjs/toolkit";
import {setCheckError} from "../../helpers";
import {WeatherService} from "../../services/weatherService.tsx";
import {setCurrentWeather} from "../slices/currentWeatherSlice.ts";

export const fetchCurrentDailyWeather = createAsyncThunk(
	'current_weather/fetchCurrentDailyWeather',
	async function (_, {rejectWithValue, getState, dispatch}) {
		try {
			const tripData = getState().currentWeatherSliceReducer.city;
			console.log('tripData', tripData);


			const response = await WeatherService.getCurrentWeatherOnDay(tripData);

			setCheckError(response, "Invalid data. Server error");
			return dispatch(setCurrentWeather(response))
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
