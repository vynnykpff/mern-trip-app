import {User} from "@/types/User.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import userSliceAsyncThunks from "./thunks";

export interface UserState {
    authorized: boolean;
    user: User | null;
    accessToken: string | null;
}

export const initialState: UserState = {
    authorized: false,
    user: null,
    accessToken: null
};

export const userSlice = createSlice({
    name: "user_slice",
    initialState,
    reducers: {
        updateUser(state, action: PayloadAction<Partial<UserState>>) {
            return {...state, ...action.payload};
        }
    },
    extraReducers: (builder) => {
        for (const thunk of userSliceAsyncThunks) {
            builder.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler);
        }
    }
});

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;
