import {setUiState, UiState} from "@/store/slices/uiSlice.ts";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";

type SetState<T extends keyof UiState> = (visible: boolean, props?: UiState[T]["props"]) => void;

export const useUiState = <T extends keyof UiState>(key: T): [boolean, SetState<T>] => {
	const uiState = useAppSelector(state => state.uiSliceReducer);
	const dispatch = useAppDispatch();

	const setState = (visible: boolean, props?: UiState[T]["props"]) => {
		dispatch(setUiState({[key]: {visible, props: props ?? {}}}));
	};

	return [uiState[key].visible, setState];
};
