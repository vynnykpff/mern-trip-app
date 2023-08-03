import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentCitySliceReducer from "./slices/currentCitySlice";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";
import uiSliceReducer from "./slices/uiSlice";

const rootReducer = combineReducers({
	currentCitySliceReducer,
	currentWeatherSliceReducer,
	uiSliceReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
