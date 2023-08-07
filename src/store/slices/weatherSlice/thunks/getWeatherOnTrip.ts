import {createAsyncThunk} from "@reduxjs/toolkit";
import {WeatherService} from "@/services/WeatherService.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {WeatherState} from "@/store/slices/weatherSlice";

const asyncThunk = createAsyncThunk(
    "weather/getWeatherOnTrip",
    async function (_, {rejectWithValue, getState}) {
        try {
            const tripData = getState().weatherSliceReducer;
            const response = await WeatherService.getWeatherOnTrip(tripData);

            return response;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const storeHandler: StoreAsyncThunkHandler<WeatherState> = (state, action) => {
    state.weatherOnTrip = action.payload;
};

export const getWeatherOnTrip: StoreAsyncThunk<WeatherState> = {
    asyncThunk,
    storeHandler
};
