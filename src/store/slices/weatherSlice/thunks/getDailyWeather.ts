import {createAsyncThunk} from "@reduxjs/toolkit";
import {WeatherService} from "@/services/WeatherService.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {WeatherState} from "@/store/slices/weatherSlice";

// TODO
// убрать везде getState

const asyncThunk = createAsyncThunk(
    "weather/getDailyWeather",
    async function (_, {rejectWithValue, getState}) {
        try {
            const tripData = getState().weatherSliceReducer.city;
            const response = await WeatherService.getWeatherOnDay(tripData);

            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const storeHandler: StoreAsyncThunkHandler<WeatherState> = (state, action) => {
    state.weatherOnDay = action.payload;
};

export const getDailyWeather: StoreAsyncThunk<WeatherState> = {
    asyncThunk,
    storeHandler
};
