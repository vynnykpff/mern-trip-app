import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";
import {UserState} from "@/store/slices/userSlice";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {UserService} from "@/services/UserService.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";

const asyncThunk = createAsyncThunk(
    "user/get_user_data",
    async function (_, {rejectWithValue}) {
        try {
            const {data} = await UserService.getUserData();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const storeHandler: StoreAsyncThunkHandler<UserState> = (state, action) => {
    state.user = {...state.user, ...action.payload};
};

export const getUserData: StoreAsyncThunk<UserState> = {
    asyncThunk,
    storeHandler
};
