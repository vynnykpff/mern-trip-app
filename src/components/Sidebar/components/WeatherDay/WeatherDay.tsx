import styles from "./WeatherDay.module.css";
import {useContext, useEffect, useState} from "react";
import {homePageContext} from "@/pages/HomePage/HomePageContext.tsx";
import {WeatherService} from "@/services/WeatherService.ts";
import {getDay} from "@/helpers/getDay.ts";
import {TbDatabaseX} from "react-icons/tb";
import {getWeatherIcon} from "@/helpers/getWeatherIcon.tsx";
import {Loader} from "@/components";
import {WeatherOnDayType} from "@/types/WeatherOnDay.ts";

export const WeatherDay = () => {
	const [contextState] = useContext(homePageContext);
	const [currentWeatherOnDay, setCurrentWeatherOnDay] = useState<WeatherOnDayType>();

	const getCurrentWeatherOnDay = async () => {
		if (!contextState.currentCity) {
			return;
		}

		const currentWeather = await WeatherService.getWeatherOnDay(contextState.currentCity.cityName)
		setCurrentWeatherOnDay(currentWeather);
	}

	useEffect(() => {
		getCurrentWeatherOnDay();
	}, [contextState.currentCity?.cityName])

	if (!contextState.currentCity) {
		return <TbDatabaseX style={{color: '#fff', fontSize: 60}}/>;
	}

	return (
		<>
			{!currentWeatherOnDay ? <Loader/> :
				<div className={styles.weatherContainer}>
					<p className={styles.day}>{getDay(new Date)}</p>
					<div className={styles.weatherBlock}>
						<span className={styles.weatherIconWrapper}>
						{getWeatherIcon(currentWeatherOnDay.icon)}
						</span>

						<p className={styles.weatherTemp}>
							{currentWeatherOnDay.temp} <span className={styles.weatherDegree}>&#176;C</span>
						</p>
					</div>
					<p className={styles.weatherCity}>{contextState.currentCity.cityName}</p>
				</div>
			}
		</>
	)
};
