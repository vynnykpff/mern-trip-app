import {SearchTrips, Sidebar, Trips, WeatherForecast} from "@/components";
import styles from "./HomePage.module.css";
import {withAuthorizedRoute} from "@/HOCs/withAuthorizedRoute.tsx";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {getAllTrips} from "@/store/slices/tripsSlice/thunks/getAllTrips.ts";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import HomePageContextProvider from "@/pages/HomePage/HomePageContext.tsx";
import {deleteTrip} from "@/store/slices/tripsSlice/thunks/deleteTrip.ts";

export const deleteT = deleteTrip;


const HomePage = () => {
	const dispatch = useAppDispatch();
	const {trips} = useAppSelector(state => state.tripsSliceReducer);

	useEffect(() => {
		dispatch(getAllTrips.asyncThunk(null));
	}, []);

	return (
		<HomePageContextProvider>
			<div className={styles.homeWrapper}>
				<div className={styles.sectionWrapper}>
					<h2 className={styles.title}>Weather <span className={styles.highlight}>Forecast</span></h2>
					<SearchTrips/>
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
		</HomePageContextProvider>
	);
};

export default withAuthorizedRoute(HomePage);
