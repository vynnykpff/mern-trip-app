import {combineReducers, configureStore} from "@reduxjs/toolkit";
import currentCitySliceReducer from "@/store/slices/tripsSlice/slice.ts";
import weatherSliceReducer from "./slices/weatherSlice/slice.ts";
import uiSliceReducer from "./slices/uiSlice.ts";
import userSliceReducer from "./slices/userSlice/slice.ts";
import tripsSliceReducer from "./slices/tripsSlice/slice.ts";
import themeSliceReducer from "./slices/themeSlice.ts";

const rootReducer = combineReducers({
	currentCitySliceReducer,
	weatherSliceReducer,
	uiSliceReducer,
	userSliceReducer,
	tripsSliceReducer,
	themeSliceReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
