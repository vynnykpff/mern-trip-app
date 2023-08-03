import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {fetchCurrentCity, fetchCurrentCityGeoName, fetchCurrentCityImage, setCurrentCity} from "@/store";

export const getCityImage = async (city: string, dispatch: any, data: any) => {
	dispatch(setCurrentCity(city));

	await dispatch(fetchCurrentCity());
	await dispatch(fetchCurrentCityGeoName());

	const state = useAppSelector((state) => state.currentCitySliceReducer);

	console.log(state)

	if (data.citySlug.length) {
		console.log('no data');
		return false;
	}

	console.log('work');

	await dispatch(fetchCurrentCityImage());
};
