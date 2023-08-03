import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {components} from "@/store/slices/uiSlice.ts";

export const Modals = () => {
	const uiState = useAppSelector(state => state.uiSliceReducer);
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
