import {createAsyncThunk} from "@reduxjs/toolkit";
import {CityService} from "@/services/CityService.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {CurrentCityState} from "@/store/slices/currentCitySlice/slice.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";

export const asyncThunk = createAsyncThunk(
	'current_city/fetchCurrentCityImage',
	async function (_, {rejectWithValue, getState}) {
		try {
			const cityName = getState().currentCitySliceReducer.citySlug;
			if (!cityName) {
				return;
			}

			const response = await CityService.getCurrentCityImage(cityName);
			return response;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<CurrentCityState> = (state, action) => {
	return {
		...state,
		cityImage: action.payload,
		status: true,
	}
}

export const fetchCurrentCityImage: StoreAsyncThunk<CurrentCityState> = {
	asyncThunk,
	storeHandler
}
