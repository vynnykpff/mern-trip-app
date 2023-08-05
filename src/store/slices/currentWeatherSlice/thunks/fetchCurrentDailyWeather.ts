import {createAsyncThunk} from "@reduxjs/toolkit";
import {WeatherService} from "@/services/WeatherService.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {CurrentWeatherState} from "@/store/slices/currentWeatherSlice/slice.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";

// TODO
// убрать везде getState

const asyncThunk = createAsyncThunk(
    "current_weather/fetchCurrentDailyWeather",
    async function (_, {rejectWithValue, getState}) {
        try {
            const tripData = getState().currentWeatherSliceReducer.city;
            const response = await WeatherService.getCurrentWeatherOnDay(tripData);

            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const storeHandler: StoreAsyncThunkHandler<CurrentWeatherState> = (state, action) => {
    state.currentWeather = action.payload;
};

export const fetchCurrentDailyWeather: StoreAsyncThunk<CurrentWeatherState> = {
    asyncThunk,
    storeHandler
};
