import styles from "./Sidebar.module.css";
import {WeatherDay} from "./components/WeatherDay/WeatherDay.tsx";
import {Timer} from "./components/Timer/Timer.tsx";
import {Profile} from "./components/Profile/Profile.tsx";

export const Sidebar = () => {
	return (
		<aside className={styles.sidebarWrapper}>
			<Profile/>
			<WeatherDay/>
			<Timer/>


		</aside>
	);
};
