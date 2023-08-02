import styles from "./Sidebar.module.css";
import {WeatherDay} from "./components/WeatherDay/WeatherDay.tsx";
import {Timer} from "./components/Timer/Timer.tsx";

export const Sidebar = () => {
	return (
		<aside className={styles.sidebarWrapper}>

			<WeatherDay/>

			<Timer/>


		</aside>
	);
};
