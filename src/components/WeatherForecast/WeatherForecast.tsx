import styles from "./WeatherForecast.module.css";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {getDay} from "@/helpers/getDay.ts";
import {TbDatabaseX} from "react-icons/tb";
import {getWeatherIcon} from "@/helpers/getWeatherIcon.tsx";
import { v4 as uuidv4 } from 'uuid';

export const WeatherForecast = () => {
	const {weatherOnTrip} = useAppSelector(state => state.weatherSliceReducer);

	if (!weatherOnTrip.length) {
		return <TbDatabaseX style={{fontSize: 60}}/>;
	}

	return (
		<section className={styles.weatherWrapper}>
			{weatherOnTrip.map(day => {
				return (
					<div key={uuidv4()} className={styles.weatherCard}>
						<p className={styles.weatherDay}>{getDay(day.datetime)}</p>
						<p className={styles.weatherTemp}>{day.datetime}</p>
						{getWeatherIcon(day.icon)}
						<p className={styles.weatherTemp}>{day.tempmin} &#176; / {day.tempmax} &#176;</p>
					</div>
				)
			})}
		</section>
	);
};
