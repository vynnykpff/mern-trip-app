import {createAsyncThunk} from "@reduxjs/toolkit";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk";
import {TripsService} from "@/services/TripsService";
import {TripsState} from "@/store/slices/tripsSlice/slice";

const asyncThunk = createAsyncThunk(
	"trips/get_all_trips",
	async function (_, {rejectWithValue}) {
		try {
			const {data} = await TripsService.getAllTrips();
			return data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<TripsState> = (state, action) => {
	state.trips = action.payload;
	state.isPending = false;
};

export const getAllTrips: StoreAsyncThunk<TripsState> = {
	asyncThunk,
	storeHandler
};
