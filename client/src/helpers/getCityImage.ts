import {
	setCurrentCity,
	fetchCurrentCity,
	fetchCurrentCityGeoName,
	fetchCurrentCityImage,
} from "../store";
import {useSelector} from "react-redux";

export const getCityImage = async (city: string, dispatch: any, data: any) => {
	dispatch(setCurrentCity(city));

	await dispatch(fetchCurrentCity());
	await dispatch(fetchCurrentCityGeoName());

	const state = useSelector((state) => state.currentCitySliceReducer);

	console.log(state)

	if (data.citySlug.length) {
		console.log('no data');
		return false;
	}

	console.log('work');

	await dispatch(fetchCurrentCityImage());
};
