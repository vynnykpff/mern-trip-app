import {createAsyncThunk} from "@reduxjs/toolkit";
import {setCheckError} from "../../helpers";
import {CityService} from "../../services/cityService.tsx";
import {setCityGeoLink} from "../slices/currentCitySlice.ts";

export const fetchCurrentCity = createAsyncThunk(
	'current_city/fetchCurrentCity',
	async function (_, {rejectWithValue, getState, dispatch}) {
		try {
			const dataCity = getState().currentCitySliceReducer.city;
			const response = await CityService.getCurrentCity(dataCity);
			setCheckError(response, "Invalid data. Server error");
			return dispatch(setCityGeoLink(response));
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
