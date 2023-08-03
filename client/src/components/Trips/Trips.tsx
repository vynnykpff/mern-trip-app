import {Button} from "../ui/Button/Button.tsx";
import styles from "./Trips.module.css";
import berlinImage from "../../assets/images/berlin.jpg";
import barcelonaImage from "../../assets/images/barcelona.jpg";
import tokyoImage from "../../assets/images/tokyo.jpg";
import {useState} from "react";
import {Modal} from "../ui/Modal/Modal.tsx";

export const Trips = () => {
	const [modalActive, setModalActive] = useState(false);
	console.log(modalActive);


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
			<Button setModalActive={setModalActive} modalActive={modalActive}/>


			<Modal modalActive={modalActive} setModalActive={setModalActive}/>

		</section>
	);
};
