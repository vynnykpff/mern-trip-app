import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserService} from "@/services/UserService.ts";
import {UserState} from "@/store/slices/userSlice";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {PatchUser} from "@/types/PatchUser.ts";

const asyncThunk = createAsyncThunk(
	'user/patch_user',
	async function (patchData: PatchUser, {rejectWithValue}) {
		try {
			const {data} = await UserService.patchUser(patchData);
			return data;
		} catch (error: any) {
			return rejectWithValue(error.message);
		}
	}
);

const storeHandler: StoreAsyncThunkHandler<UserState> = (state, action) => {
	state.user = {...state.user, ...action.payload}
}

export const patchUser: StoreAsyncThunk<UserState> = {
	asyncThunk,
	storeHandler
}
