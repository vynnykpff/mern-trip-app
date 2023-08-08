import {ProfileSettingsForm} from "@/components";
import styles from "./ProfileSettings.module.css";

export const ProfileSettings = () => {
	return (
		<section className={styles.settingsWrapper}>
			<div className={styles.contentWrapper}>
				<header className={styles.header}>
					<h4 className={styles.title}>Edit Profile</h4>
				</header>
				<ProfileSettingsForm/>
			</div>
		</section>
	);
};
