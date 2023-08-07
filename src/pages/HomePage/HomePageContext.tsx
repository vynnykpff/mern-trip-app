import {Trip} from "@/types/Trip.ts";
import {createContext, FC, PropsWithChildren, useEffect, useState} from "react";
import {useAppSelector} from "@/hooks/useAppSelector.ts";

type HomePageContextState = {
	currentCity: Trip | undefined,
}

type HomePageContext = [HomePageContextState, ((value: Partial<HomePageContextState> | ((prev: HomePageContextState) => HomePageContextState)) => void)]

const initialState: HomePageContext = [
	{
		currentCity: undefined,
	},
	() => null,
]

export const homePageContext = createContext<HomePageContext>(initialState);

const HomePageContextProvider:FC<PropsWithChildren> = ({children}) => {
	const {trips} = useAppSelector(state => state.tripsSliceReducer);
	const [state, setContextState] = useState<HomePageContextState>({currentCity: trips[0]});

	const setState = (value: Partial<HomePageContextState> | ((prev: HomePageContextState) => HomePageContextState)) => {
		setContextState(typeof value === 'object' ? {...state, ...value} : {...state, ...value(state)})
	}

	useEffect(() => {
		setState({currentCity: trips[0]})
	}, [trips])

	return (
		<homePageContext.Provider value={[state, setState]}>
			{children}
		</homePageContext.Provider>
	);
};

export default HomePageContextProvider;
