import {createAsyncThunk} from "@reduxjs/toolkit";
import {setCheckError} from "../../helpers";
import {CityService} from "../../services/cityService.tsx";
import {setCityImage} from "../slices/currentCitySlice.ts";

export const fetchCurrentCityImage = createAsyncThunk(
	'current_city/fetchCurrentCityImage',
	async function (_, {rejectWithValue, getState, dispatch}) {
		try {
			const cityName = getState().currentCitySliceReducer.citySlug;
			if (!cityName) {
				return;
			}

			const response = await CityService.getCurrentCityImage(cityName);
			setCheckError(response, "Invalid data. Server error");
			return dispatch(setCityImage(response));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
