import {BsCloudRain, BsClouds, BsCloudSun, BsSun} from "react-icons/bs";
import styles from "@/components/WeatherForecast/WeatherForecast.module.css";

export const getWeatherIcon = (statusDay: string) => {
	switch (statusDay) {
		case "clear-day":
			return <BsSun className={styles.weatherImage}/>;
		case "partly-cloudy-day":
			return <BsCloudSun className={styles.weatherImage}/>;
		case "rain":
			return <BsCloudRain className={styles.weatherImage}/>
		default:
			return <BsClouds className={styles.weatherImage}/>
	}
}
