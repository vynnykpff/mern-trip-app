import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {UiState} from "@/store/slices/uiSlice.ts";
import {FC, useEffect} from "react";
import {CreateTripModal} from "@/components/CreateTripModal/CreateTripModal.tsx";
import {LoginModal} from "@/components/LoginModal/LoginModal.tsx";
import "@/store/slices/userSlice/thunks";
import {RegisterModal} from "@/components/RegisterModal/RegisterModal.tsx";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {refresh} from "@/store/slices/userSlice/thunks/auth/refresh.ts";
import {getUserData} from "@/store/slices/userSlice/thunks/user/getUserData.ts";

export const components: Record<keyof UiState, FC> = {
	createTripModal: CreateTripModal,
	loginModal: LoginModal,
	registerModal: RegisterModal,
}

export const UiComponents = () => {
	const uiState = useAppSelector(state => state.uiSliceReducer);

	const dispatch = useAppDispatch();
	useEffect(() => {
		if (localStorage.getItem('accessToken')) {
			dispatch(refresh.asyncThunk(null))
			dispatch(getUserData.asyncThunk(null));
		}
	}, [])

	return (
		<>
			{Object.keys(uiState).map(i => {
				const key = i as keyof typeof uiState;
				if (!uiState[key]) {
					return null;
				}

				const Component = components[key];

				return (
					<Component key={key}/>
				)
			})}
		</>
	);
};
