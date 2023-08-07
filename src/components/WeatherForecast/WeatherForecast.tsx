import styles from "./WeatherForecast.module.css";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {getDay} from "@/helpers/getDay.ts";
import {BiSun} from "react-icons/bi";
import {BsCloudRain} from "react-icons/bs";
import {TbDatabaseX} from "react-icons/tb";

export const WeatherForecast = () => {
	const {weatherOnTrip} = useAppSelector(state => state.weatherSliceReducer);

	if (!weatherOnTrip.length) {
		return <TbDatabaseX style={{fontSize: 60}}/>;
	}

	return (
		<section className={styles.weatherWrapper}>
			{weatherOnTrip.map(day => {
				return (
					<div className={styles.weatherCard}>
						<p className={styles.weatherDay}>{getDay(day.datetime)}</p>
						<p className={styles.weatherTemp}>{day.datetime}</p>
						{day.icon === "clear-day" ? <BiSun className={styles.weatherImage}/> :
							<BsCloudRain className={styles.weatherImage}/>}
						<p className={styles.weatherTemp}>{day.tempmin} &#176; / {day.tempmax} &#176;</p>
					</div>
				)
			})}
		</section>
	);
};
