import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserService} from "@/services/UserService.ts";
import {initialState, UserState} from "@/store/slices/userSlice";
import {StoreAsyncThunk} from "@/types/StoreAsyncThunk.ts";
import {StoreAsyncThunkHandler} from "@/types/StoreAsyncThunkHandler.ts";

const asyncThunk = createAsyncThunk(
    "user/delete_user",
    async function (_, {rejectWithValue}) {
        try {
            await UserService.deleteUser();
            localStorage.removeItem("accessToken");
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const storeHandler: StoreAsyncThunkHandler<UserState> = () => {
    return initialState;
};

export const deleteUser: StoreAsyncThunk<UserState> = {
    asyncThunk,
    storeHandler
};
