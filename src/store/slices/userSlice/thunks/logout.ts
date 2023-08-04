import {AuthService} from "@/services/AuthService.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {UserState} from "@/store/slices/userSlice";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";

const asyncThunk = createAsyncThunk(
	'user/logout',
	async function (_, {rejectWithValue}) {
		try {
			await AuthService.logout()
			localStorage.removeItem('accessToken');
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<UserState> = (state) => {
	return state;
}

export const logout: StoreAsyncThunk<UserState> = {
	asyncThunk,
	storeHandler
}
