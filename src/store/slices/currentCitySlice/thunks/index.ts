import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {CurrentCityState} from "@/store/slices/currentCitySlice/slice.ts";
import {fetchCurrentCityGeoName} from "@/store/slices/currentCitySlice/thunks/fetchCurrentCityGeoName.ts";
import {fetchCurrentCityImage} from "@/store/slices/currentCitySlice/thunks/fetchCurrentCityImage.ts";
import {fetchCurrentCity} from "@/store/slices/currentCitySlice/thunks/fetchCurrentCity.ts";

const thunks: StoreAsyncThunk<CurrentCityState>[] = [fetchCurrentCity, fetchCurrentCityGeoName, fetchCurrentCityImage]

export default thunks;
