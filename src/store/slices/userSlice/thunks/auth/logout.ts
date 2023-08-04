import {AuthService} from "@/services/AuthService.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {initialState, UserState} from "@/store/slices/userSlice";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";

const asyncThunk = createAsyncThunk(
	'user/logout',
	async function (_, {rejectWithValue}) {
		try {
			await AuthService.logout()
			localStorage.removeItem('accessToken');
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<UserState> = () => {
	return initialState;
}

export const logout: StoreAsyncThunk<UserState> = {
	asyncThunk,
	storeHandler
}
