import {SearchTrips, Sidebar, Trips, WeatherForecast} from "@/components";
import styles from "./HomePage.module.css";
import {withAuthorizedRoute} from "@/HOCs/withAuthorizedRoute.tsx";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {useEffect} from "react";
import {getAllTrips} from "@/store/slices/tripsSlice/thunks/getAllTrips.ts";
import HomePageContextProvider from "@/pages/HomePage/HomePageContext.tsx";
import {deleteTrip} from "@/store/slices/tripsSlice/thunks/deleteTrip.ts";

export const deleteT = deleteTrip;


const HomePage = () => {
	const dispatch = useAppDispatch();

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
			</div>
		</HomePageContextProvider>
	);
};

export default withAuthorizedRoute(HomePage);
