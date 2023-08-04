import {AuthService} from "@/services/AuthService.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {UserState} from "@/store/slices/userSlice";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {AuthData} from "@/types/AuthData.ts";

const asyncThunk = createAsyncThunk(
	'user/register',
	async function (registerData: AuthData, {rejectWithValue}) {
		try {
			const {data} = await AuthService.register(registerData);
			return data;
		} catch (error: any) {
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
	localStorage.setItem('accessToken', state.accessToken!);
}

export const register: StoreAsyncThunk<UserState> = {
	asyncThunk,
	storeHandler
}
