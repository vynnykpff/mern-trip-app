import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "@/services/AuthService.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {UserState} from "@/store/slices/userSlice";

const asyncThunk = createAsyncThunk(
    "user/refresh",
    async function (_, {rejectWithValue}) {
        try {
            const {data} = await AuthService.refresh();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const storeHandler: StoreAsyncThunkHandler<UserState> = (state, action) => {
    state.accessToken = action.payload.accessToken;
    state.authorized = true;
    localStorage.setItem("accessToken", state.accessToken!);
};

export const refresh: StoreAsyncThunk<UserState> = {
    asyncThunk,
    storeHandler
};
