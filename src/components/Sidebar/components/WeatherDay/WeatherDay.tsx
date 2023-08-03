import styles from "./WeatherDay.module.css";
import weather from "#/icons/sun.svg";

export const WeatherDay = () => {
	return (
		<div className={styles.weatherContainer}>
			<p className={styles.day}>Sunday</p>
			<div className={styles.weatherBlock}>
				<img className={styles.weatherImage} src={weather} alt="img"/>
				<p className={styles.weatherTemp}>24 <span className={styles.weatherDegree}>&#176;C</span></p>
			</div>
			<p className={styles.weatherCity}>Berlin</p>
		</div>
	);
};
