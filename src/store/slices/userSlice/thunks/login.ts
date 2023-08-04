import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthData} from "@/types/AuthData.ts";
import {AuthService} from "@/services/AuthService.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {UserState} from "@/store/slices/userSlice";

const asyncThunk = createAsyncThunk(
	'user/login',
	async function (loginData: AuthData, {rejectWithValue}) {
		try {
			const {data} = await AuthService.login(loginData);
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<UserState> = (state, action) => {
	state.user = {
		...action.payload.user,
	};
	state.authorized = true;
	state.accessToken = action.payload.accessToken;
	console.log('test');
	localStorage.setItem('accessToken', state.accessToken!);
}

export const login: StoreAsyncThunk<UserState> = {
	asyncThunk,
	storeHandler
}
