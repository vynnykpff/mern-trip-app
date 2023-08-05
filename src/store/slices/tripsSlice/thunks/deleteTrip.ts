import {createAsyncThunk} from "@reduxjs/toolkit";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk";
import {TripsService} from "@/services/TripsService";
import {TripsState} from "@/store/slices/tripsSlice/slice";
import {DeleteTrip} from "@/types/DeleteTrip.ts";

const asyncThunk = createAsyncThunk(
	"trips/delete_trip",
	async function (deleteData:DeleteTrip, {rejectWithValue}) {
		try {
			const {data} = await TripsService.deleteTrip(deleteData);
			return data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<TripsState> = (state, action) => {
	state.trips = state.trips.filter(trip => trip.id !== action.payload.id);
};

export const deleteTrip: StoreAsyncThunk<TripsState> = {
	asyncThunk,
	storeHandler
};
