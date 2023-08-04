import {createAsyncThunk} from "@reduxjs/toolkit";
import {CityService} from "@/services/CityService.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {CurrentCityState} from "@/store/slices/currentCitySlice/slice.ts";

export const asyncThunk = createAsyncThunk(
	'current_city/fetchCurrentCity',
	async function (_, {rejectWithValue, getState}) {
		try {
			const dataCity = getState().currentCitySliceReducer.city;
			const response = await CityService.getCurrentCity(dataCity);

			return response;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<CurrentCityState> = (state, action) => {
	const data = action.payload.split('/');
	state.cityGeoLink = data[data.length - 2];
}

export const fetchCurrentCity: StoreAsyncThunk<CurrentCityState> = {
	asyncThunk,
	storeHandler
}
