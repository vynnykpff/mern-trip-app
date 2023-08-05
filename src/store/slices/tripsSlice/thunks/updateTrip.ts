import {createAsyncThunk} from "@reduxjs/toolkit";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk";
import {TripsService} from "@/services/TripsService";
import {TripsState} from "@/store/slices/tripsSlice/slice";
import {Trip} from "@/types/Trip.ts";

const asyncThunk = createAsyncThunk(
	"trips/update_trip",
	async function (updateData: Trip, {rejectWithValue}) {
		try {
			const {data} = await TripsService.updateTrip(updateData);
			return data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<TripsState> = (state, action) => {
	for (let i = 0; i < state.trips.length; i++) {
		if (state.trips[i].id === action.payload.id) {
			state.trips[i] = action.payload;
			break;
		}
	}
};

export const updateTrip: StoreAsyncThunk<TripsState> = {
	asyncThunk,
	storeHandler
};
