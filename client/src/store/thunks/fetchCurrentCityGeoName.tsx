import {createAsyncThunk} from "@reduxjs/toolkit";
import {setCheckError} from "../../helpers";
import {CityService} from "../../services/cityService.tsx";
import {setCitySlug} from "../slices/currentCitySlice.ts";

export const fetchCurrentCityGeoName = createAsyncThunk(
	'city/fetchCurrentCityGeoName',
	async function (_, {rejectWithValue, getState, dispatch}) {
		try {
			const dataCityGeo = getState().currentCitySliceReducer.cityGeoLink;
			const response = await CityService.getCurrentCityGeoName(dataCityGeo);

			setCheckError(response, "Invalid data. Server error");
			return response["city:urban_area"] ? dispatch(setCitySlug(response["city:urban_area"].href)) : dispatch(setCitySlug(false))

		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);
