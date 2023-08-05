import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {TripsState} from "@/store/slices/tripsSlice/slice.ts";
import {getAllTrips} from "@/store/slices/tripsSlice/thunks/getAllTrips";
import {createTrip} from "@/store/slices/tripsSlice/thunks/createTrip.ts";
import {updateTrip} from "@/store/slices/tripsSlice/thunks/updateTrip.ts";
import {deleteTrip} from "@/store/slices/tripsSlice/thunks/deleteTrip.ts";

const thunks: StoreAsyncThunk<TripsState>[] = [getAllTrips, createTrip, updateTrip, deleteTrip];

export default thunks;
