import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FC} from "react";
import {CreateTripModal} from "@/components/CreateTripModal/CreateTripModal.tsx";
import {LoginModal} from "@/components/LoginModal/LoginModal.tsx";
import {RegisterModal} from "@/components/RegisterModal/RegisterModal.tsx";

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

export const components: Record<keyof UiState, FC> = {
	createTripModal: CreateTripModal,
	loginModal: LoginModal,
	registerModal: RegisterModal,
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
