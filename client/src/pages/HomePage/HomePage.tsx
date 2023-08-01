import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentCity, fetchCurrentCityGeoName, fetchCurrentCityImage, setCurrentCity} from "../../store";
import {AppDispatch, RootState} from "../../store/store.tsx";

const HomePage = () => {
	const {cityImage, citySlug} = useSelector((state: RootState) => state.currentCitySliceReducer);

	const [city, setCity] = useState("");
	const [dataCity, setDataCity] = useState("")

	const dispatch:AppDispatch = useDispatch();

	const getCityImage = async () => {
		if (!city.length) {
			return;
		}

		dispatch(setCurrentCity(city));

		await dispatch(fetchCurrentCity());
		await dispatch(fetchCurrentCityGeoName());
		await dispatch(fetchCurrentCityImage());
	}

	useEffect(() => {
		getCityImage();
	}, [dataCity]);

	return (
		<div>
			<h2>HomePage</h2>
			<input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
			<button onClick={() => setDataCity(city)}>Submit</button>


			{citySlug ? <img src={cityImage} alt="city"/> : <div>No image</div>}
		</div>
	);
};

export default HomePage;
