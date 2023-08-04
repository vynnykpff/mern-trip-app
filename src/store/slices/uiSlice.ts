import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export type UiState = {
	createTripModal: boolean,
	loginModal: boolean,
	registerModal: boolean,
}

const initialState: UiState = {
	createTripModal: false,
	loginModal: false,
	registerModal: false,
}

export const uiSlice = createSlice({
	name: 'ui_slice',
	initialState,
	reducers: {
		setUiState: (state, action: PayloadAction<Partial<UiState>>) => {
			return {
				...state,
				...action.payload,
			};
		}
	}
})

export const {setUiState} = uiSlice.actions
export default uiSlice.reducer;
