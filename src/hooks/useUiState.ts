import {setUiState, UiState} from "@/store/slices/uiSlice.ts";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";

type SetState = (value: boolean) => void;

export const useUiState = (key: keyof UiState): [boolean, SetState] => {
	const uiState = useAppSelector(state => state.uiSliceReducer);
	const dispatch = useAppDispatch()

	const setState = (value: boolean) => {
		dispatch(setUiState({[key]: value}))
	}

	return [uiState[key], setState]
}
