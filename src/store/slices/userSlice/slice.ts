import {User} from "@/types/User.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import userSliceAsyncThunks from "./thunks";

export interface UserState {
	authorized: boolean;
	user: User | null;
	accessToken: string | null;
	error: string;
}

export const initialState: UserState = {
	authorized: false,
	user: null,
	accessToken: null,
	error: "",
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
			builder
				.addCase(thunk.asyncThunk.fulfilled, thunk.storeHandler)
				.addCase(thunk.asyncThunk.rejected, (state, action) => {
					state.error = action.payload as string;
				});
		}
	}
});

export const {updateUser} = userSlice.actions;
export default userSlice.reducer;
