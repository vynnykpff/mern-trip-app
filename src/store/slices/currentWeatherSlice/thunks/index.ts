import {fetchCurrentDailyWeather} from "@/store/slices/currentWeatherSlice/thunks/fetchCurrentDailyWeather.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {CurrentWeatherState} from "@/store/slices/currentWeatherSlice/slice.ts";
import {fetchCurrentWeatherOnTrip} from "@/store/slices/currentWeatherSlice/thunks/fetchCurrentWeatherOnTrip.ts";

const thunks: StoreAsyncThunk<CurrentWeatherState>[] = [fetchCurrentDailyWeather, fetchCurrentWeatherOnTrip]

export default thunks;
