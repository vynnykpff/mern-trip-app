import {createAsyncThunk} from "@reduxjs/toolkit";
import {CityService} from "@/services/CityService.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {CurrentCityState} from "@/store/slices/currentCitySlice/slice.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";

export const asyncThunk = createAsyncThunk(
	'current_city/fetchCurrentCityGeoName',
	async function (_, {rejectWithValue, getState}) {
		try {
			const dataCityGeo = getState().currentCitySliceReducer.cityGeoLink;
			const response = await CityService.getCurrentCityGeoName(dataCityGeo);

			return response["city:urban_area"] ? response["city:urban_area"].href : false
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<CurrentCityState> = (state, action) => {
	if (typeof action.payload !== "boolean" && action.payload.length) {
		const data = action.payload.split('slug:');
		return {
			...state,
			citySlug: data[data.length - 1],
		}
	}
	return {
		...state,
		citySlug: action.payload,
		cityImage: "",
		status: false,
	}
}

export const fetchCurrentCityGeoName: StoreAsyncThunk<CurrentCityState> = {
	asyncThunk,
	storeHandler
}