import {useEffect, useState} from "react";
import {Search, Sidebar, Trips, WeatherForecast} from "@/components";
import {ActionCreator} from "@reduxjs/toolkit";

// Styles
import styles from "./HomePage.module.css";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {fetchCurrentWeatherOnTrip} from "@/store/slices/currentWeatherSlice/thunks/fetchCurrentWeatherOnTrip.ts";
import {fetchCurrentDailyWeather} from "@/store/slices/currentWeatherSlice/thunks/fetchCurrentDailyWeather.ts";
import {setTripData} from "@/store/slices/currentWeatherSlice/slice.ts";
import {setCurrentCity} from "@/store/slices/currentCitySlice/slice.ts";
import {fetchCurrentCity} from "@/store/slices/currentCitySlice/thunks/fetchCurrentCity.ts";
import {fetchCurrentCityGeoName} from "@/store/slices/currentCitySlice/thunks/fetchCurrentCityGeoName.ts";
import {fetchCurrentCityImage} from "@/store/slices/currentCitySlice/thunks/fetchCurrentCityImage.ts";
import {register} from "@/store/slices/userSlice/thunks/register.ts";
import {login} from "@/store/slices/userSlice/thunks/login.ts";

const HomePage = () => {

// 	const {cityImage, citySlug} = useAppSelector(state => state.currentCitySliceReducer);
// 	const {weatherOnTrip, currentWeather} = useAppSelector(state => state.currentWeatherSliceReducer);

	const [city, setCity] = useState("");
	const [dataCity, setDataCity] = useState("")

	const dispatch = useAppDispatch();

	// ============

	const [startTrip, setStartTrip] = useState("");
	const [endTrip, setEndTrip] = useState("");

	const [trip, setTrip] = useState(false);
// 	const [weather, setWeather] = useState(false);

	// ============

	const getCityImage = async () => {
		if (!city.length) {
			return;
		}
		dispatch(setCurrentCity(city));
		dispatch(fetchCurrentCity());
		dispatch(fetchCurrentCityGeoName());
		dispatch(fetchCurrentCityImage());
	}

	useEffect(() => {
		void getCityImage();
	}, [dataCity]);

	const getData = async (action: ActionCreator<any>) => {
		if (!city.length) {
			return;
		}
		dispatch(action());
	}

	useEffect(() => {
		void getData(fetchCurrentWeatherOnTrip);
		void getData(fetchCurrentDailyWeather);
	}, [trip])

	const handleClick = () => {
		dispatch(setTripData({startTrip, endTrip, city}))
		setTrip(prev => !prev);
	}

	useEffect(() => {
		dispatch(register.asyncThunk({username: 'arti1234', password: 'dfgefgrthrt'}))
	}, [])

	return (
		<div className={styles.homeWrapper}>

			<div className={styles.sectionWrapper}>
				<h2 className={styles.title}>Weather <span className={styles.highlight}>Forecast</span></h2>

				<Search/>

				<Trips/>

				<h3>Week</h3>

				<WeatherForecast/>

			</div>

			<Sidebar/>

			{/*<h2>HomePage</h2>*/}
			{/*<input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>*/}
			{/*<button onClick={() => setDataCity(city)}>Submit</button>*/}
			{/*{citySlug ? <img src={cityImage} alt="city" width={300}/> : <div>No image</div>}*/}
			{/*<br/>*/}
			{/*<hr/>*/}
			{/*<br/>*/}

			{/*<h3>Create a trip</h3>*/}
			{/*<input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="city"/>*/}
			{/*<br/>*/}
			{/*<input type="date" onChange={e => setStartTrip(e.target.value)} placeholder="from"/>*/}
			{/*<br/>*/}
			{/*<input type="date" onChange={e => setEndTrip(e.target.value)} placeholder="to"/>*/}
			{/*<br/>*/}
			{/*<br/>*/}
			{/*<button onClick={handleClick}>Create trip</button>*/}

			{/*<ul>*/}
			{/*	{weatherOnTrip.map(item => <li>{item.temp} | Max:{item.tempmax} Min:{item.tempmin}</li>)}*/}
			{/*</ul>*/}
			{/*<hr/>*/}

			{/*<h3>Get daily weather</h3>*/}
			{/*<ul>*/}
			{/*	{currentWeather.map(item => <li>Date: {item.datetime} Temp: {item.temp}</li>)}*/}
			{/*</ul>*/}
			{/*<button onClick={() => setTrip(true)}>Create trip</button>*/}
		</div>
	);
};

export default HomePage;
