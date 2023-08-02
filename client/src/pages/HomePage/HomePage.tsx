import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCurrentCity, fetchCurrentCityGeoName, fetchCurrentCityImage, setCurrentCity} from "../../store";
import {AppDispatch, RootState} from "../../store/store.tsx";
import {setTripData} from "../../store/slices/currentWeatherSlice.ts";
import {fetchCurrentWeatherOnTrip} from "../../store/thunks/fetchCurrentWeatherOnTrip.tsx";
import {fetchCurrentDailyWeather} from "../../store/thunks/fetchCurrentDailyWeather.tsx";

const HomePage = () => {
	const {cityImage, citySlug} = useSelector((state: RootState) => state.currentCitySliceReducer);
	const {weatherOnTrip, currentWeather} = useSelector((state: RootState) => state.currentWeatherSliceReducer);

	const [city, setCity] = useState("");
	const [dataCity, setDataCity] = useState("")

	const dispatch: AppDispatch = useDispatch();

	// ============

	const [startTrip, setStartTrip] = useState("");
	const [endTrip, setEndTrip] = useState("");

	const [trip, setTrip] = useState(false);
	// const [weather, setWeather] = useState(false);

	// ============


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

	useEffect(() => {
		const getData = async () => {
			if (!city.length) {
				return;
			}

			await dispatch(fetchCurrentWeatherOnTrip());
		}
		getData();
	}, [trip])

	const handleClick = () => {
		dispatch(setTripData({startTrip, endTrip, city}))
		setTrip(!trip);
	}

	useEffect(() => {
		const getData = async () => {
			if (!city.length) {
				return;
			}

			await dispatch((fetchCurrentDailyWeather()));
		}
		getData();
	}, [trip]);


	return (
		<div>
			<h2>HomePage</h2>
			<input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
			<button onClick={() => setDataCity(city)}>Submit</button>
			{citySlug ? <img src={cityImage} alt="city" width={300}/> : <div>No image</div>}
			<br/>
			<hr/>
			<br/>

			<h3>Create a trip</h3>
			<input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="city"/>
			<br/>
			<input type="date" onChange={e => setStartTrip(e.target.value)} placeholder="from"/>
			<br/>
			<input type="date" onChange={e => setEndTrip(e.target.value)} placeholder="to"/>
			<br/>
			<br/>
			<button onClick={handleClick}>Create trip</button>

			<ul>
				{weatherOnTrip.map(item => <li>{item.temp} | Max:{item.tempmax} Min:{item.tempmin}</li>)}
			</ul>
			<hr/>

			<h3>Get daily weather</h3>
			<ul>
				{currentWeather.map(item => <li>Date: {item.datetime} Temp: {item.temp}</li>)}
			</ul>
			<button onClick={() => setTrip(true)}>Create trip</button>




		</div>

	);
};

export default HomePage;
