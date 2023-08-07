import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {getDailyWeather} from "@/store/slices/weatherSlice/thunks/getDailyWeather.ts";
import {getWeatherOnTrip} from "@/store/slices/weatherSlice/thunks/getWeatherOnTrip.ts";
import {WeatherState} from "@/store/slices/weatherSlice";

const thunks: StoreAsyncThunk<WeatherState>[] = [getDailyWeather, getWeatherOnTrip];

export default thunks;
