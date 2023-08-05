import {createSlice} from "@reduxjs/toolkit";
import tripsSliceThunks from "./thunks";
import {Trip} from "@/types/Trip.ts";

export type TripsState = {
    isPending: boolean;
    trips: Trip[];
}

const initialState: TripsState = {
    isPending: true,
    trips: [],
};

export const tripsSlice = createSlice({
    name: "trips",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        for (const thunk of tripsSliceThunks) {
            builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
        }
    }
});

export const {} = tripsSlice.actions;
export default tripsSlice.reducer;
