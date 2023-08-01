import {configureStore, combineReducers} from "@reduxjs/toolkit";
import currentCitySliceReducer from "./slices/currentCitySlice";

const rootReducer = combineReducers({
	currentCitySliceReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch']
