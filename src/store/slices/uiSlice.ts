import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UpdateTripModalProps} from "@/components/UpdateTripModal/UpdateTripModal.tsx";

export type ComponentsState<P extends {} = {}> = {
	visible: boolean;
	props: P | {};
}

export type UiState = {
	createTripModal: ComponentsState;
	updateTripModal: ComponentsState<UpdateTripModalProps>;
	loginModal: ComponentsState;
	registerModal: ComponentsState;
}

const initialState: UiState = {
	createTripModal: {
		visible: false,
		props: {}
	},
	updateTripModal: {
		visible: false,
		props: {},
	},
	loginModal: {
		visible: false,
		props: {}
	},
	registerModal: {
		visible: false,
		props: {}
	},
};


export const uiSlice = createSlice({
	name: "ui_slice",
	initialState,
	reducers: {
		setUiState: (state, action: PayloadAction<Partial<UiState>>) => {
			return {
				...state,
				...action.payload,
			};
		}
	}
});

export const {setUiState} = uiSlice.actions;
export default uiSlice.reducer;
