import {Trip} from "@/types/Trip.ts";
import {createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState} from "react";
import {useAppSelector} from "@/hooks/useAppSelector.ts";

type HomePageContextState = {
	currentCity: Trip | undefined,
	currentWeather: number,
	currentWeatherImage: string,
	setCurrentCity: Dispatch<SetStateAction<HomePageContextState["currentCity"]>>
}

const initialState: HomePageContextState = {
	currentCity: undefined,
	currentWeather: 0,
	currentWeatherImage: "",
	setCurrentCity: () => {
	},
}

export const homePageContext = createContext<HomePageContextState>(initialState);

const HomePageContextProvider:FC<PropsWithChildren> = ({children}) => {
	const {trips} = useAppSelector(state => state.tripsSliceReducer);
	const [currentCity, setCurrentCity] = useState<Trip | undefined>(trips[0]);

	useEffect(() => {
		setCurrentCity(trips[0])
	}, [trips])

	return (
		<homePageContext.Provider value={{currentCity, setCurrentCity}}>
			{children}
		</homePageContext.Provider>
	);
};

export default HomePageContextProvider;
