import styles from "./WeatherDay.module.css";
import weather from "#/icons/sun.svg";
import {useContext, useEffect, useState} from "react";
import {homePageContext} from "@/pages/HomePage/HomePageContext.tsx";
import {WeatherService} from "@/services/WeatherService.ts";
import {getDay} from "@/helpers/getDay.ts";

export const WeatherDay = () => {
	const [contextState] = useContext(homePageContext);
	const [currentWeatherOnDay, setCurrentWeatherOnDay] = useState();

	console.log(contextState.currentCity?.startDate)

	const getCurrentWeatherOnDay = async () => {
		if (!contextState.currentCity) {
			return;
		}

		const currentWeather = await WeatherService.getCurrentWeatherOnDay(contextState.currentCity.cityName)
		setCurrentWeatherOnDay(currentWeather);
	}

	useEffect(() => {
		getCurrentWeatherOnDay();
	}, [contextState.currentCity?.cityName])

	if (!contextState.currentCity) {
		return null;
	}



	return (
		<div className={styles.weatherContainer}>
			<p className={styles.day}>{getDay()}</p>
			<div className={styles.weatherBlock}>
				<img className={styles.weatherImage} src={weather} alt="img"/>
				<p className={styles.weatherTemp}>
					{currentWeatherOnDay} <span className={styles.weatherDegree}>&#176;C</span>
				</p>
			</div>
			<p className={styles.weatherCity}>{contextState.currentCity.cityName}</p>
		</div>
	);
};
