import styles from './WeatherForecast.module.css';

import sunImage from '../../assets/icons/sun.svg';
import cloudImage from '../../assets/icons/cloud.svg';
import cloudSunImage from '../../assets/icons/cloud_sun.svg';
import cloudSunRainImage from '../../assets/icons/cloud_sun_rain.svg';

export const WeatherForecast = () => {
	return (
		<section className={styles.weatherWrapper}>
			<div className={styles.weatherCard}>
				<p className={styles.weatherDay}>Monday</p>
				<img className={styles.weatherImage} src={sunImage} alt="img"/>
				<p className={styles.weatherTemp}>28 &#176; / 21 &#176;</p>
			</div>
			<div className={styles.weatherCard}>
				<p className={styles.weatherDay}>Tuesday</p>
				<img className={styles.weatherImage} src={cloudSunImage} alt="img"/>
				<p className={styles.weatherTemp}>28 &#176; / 21 &#176;</p>
			</div>
			<div className={styles.weatherCard}>
				<p className={styles.weatherDay}>Wednesday</p>
				<img className={styles.weatherImage} src={cloudImage} alt="img"/>
				<p className={styles.weatherTemp}>25 &#176; / 18 &#176;</p>
			</div>
			<div className={styles.weatherCard}>
				<p className={styles.weatherDay}>Thursday</p>
				<img className={styles.weatherImage} src={cloudSunRainImage} alt="img"/>
				<p className={styles.weatherTemp}>31 &#176; / 23 &#176;</p>
			</div>
		</section>
	);
};
