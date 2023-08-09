import {Routing} from "@/components/Routing.tsx";
import {useEffect} from "react";
import {useAppSelector} from "@/hooks/useAppSelector.ts";

export const App = () => {
	const theme = useAppSelector(state => state.themeSliceReducer);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	return (
		<>
			<Routing/>
		</>
	);
};
