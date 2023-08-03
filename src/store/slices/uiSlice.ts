import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FC} from "react";
import {CreateTripModal} from "@/components/CreateTripModal/CreateTripModal.tsx";

export type UiState = {
	createTripModal: boolean,
}

const initialState: UiState = {
	createTripModal: false
}

export const components: Record<keyof UiState, FC> = {
	createTripModal: CreateTripModal,
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
