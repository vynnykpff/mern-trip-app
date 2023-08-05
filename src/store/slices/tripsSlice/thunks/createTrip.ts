import {createAsyncThunk} from "@reduxjs/toolkit";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk";
import {TripsService} from "@/services/TripsService";
import {TripsState} from "@/store/slices/tripsSlice/slice";
import {CreateTrip} from "@/types/CreateTrip.ts";

const asyncThunk = createAsyncThunk(
	"trips/create_trip",
	async function (createData:CreateTrip, {rejectWithValue}) {
		try {
			const {data} = await TripsService.createTrip(createData);
			return data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<TripsState> = (state, action) => {
	state.trips = [...state.trips, action.payload];
};

export const createTrip: StoreAsyncThunk<TripsState> = {
	asyncThunk,
	storeHandler
};
