import {AuthService} from "@/services/AuthService.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {initialState, UserState} from "@/store/slices/userSlice";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {login} from "@/core";

const asyncThunk = createAsyncThunk(
	"user/logout",
	async function (_, {rejectWithValue}) {
		try {
			await AuthService.logout();
			localStorage.removeItem("accessToken");
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<UserState> = () => {
	location.replace(`https://vynnykpff.github.io/mern-trip-app-client/#${login}`);
	return initialState;
};

export const logout: StoreAsyncThunk<UserState> = {
	asyncThunk,
	storeHandler
};
