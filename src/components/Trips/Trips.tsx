import {LargeButton} from "@/components";
import styles from "./Trips.module.css";
import berlinImage from "../../assets/images/berlin.jpg";
import barcelonaImage from "../../assets/images/barcelona.jpg";
import tokyoImage from "../../assets/images/tokyo.jpg";
import {useUiState} from "@/hooks/useUiState.ts";

export const Trips = () => {
	const [_, setModalActive] = useUiState("createTripModal");

	const onCreateTripClick = () => {
		setModalActive(true);
	}

	return (
		<section className={styles.tripsWrapper}>
			<div className={styles.tripCard}>
				<img className={styles.cityImage} src={berlinImage} alt="berlin"/>
				<div className={styles.tripDescription}>
					<p className={styles.tripTitle}>Berlin</p>
					<p className={styles.tripDate}>14.07.2023 - 18.07.-2023</p>
				</div>
			</div>

			<div className={styles.tripCard}>
				<img className={styles.cityImage} src={tokyoImage} alt="tokyo"/>
				<div className={styles.tripDescription}>
					<p className={styles.tripTitle}>Tokyo</p>
					<p className={styles.tripDate}>24.07.2023 - 05.08.-2023</p>
				</div>
			</div>

			<div className={styles.tripCard}>
				<img className={styles.cityImage} src={barcelonaImage} alt="barcelona"/>
				<div className={styles.tripDescription}>
					<p className={styles.tripTitle}>Barcelona</p>
					<p className={styles.tripDate}>12.08.2023 - 21.08.-2023</p>
				</div>
			</div>

			<LargeButton onClick={onCreateTripClick}>
				<svg className={styles.buttonIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus">
					<path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z"></path>
				</svg>
				<p>Add Trip</p>
			</LargeButton>
		</section>
	);
};
