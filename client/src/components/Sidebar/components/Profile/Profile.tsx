import profileIcon from "../../../../assets/icons/profile.svg"
import styles from "./Profile.module.css";
import {NavLink} from "react-router-dom";
import {profile} from "../../../../core";

export const Profile = () => {
	return (
		<NavLink className={styles.profileWrapper} to={profile}>
			<img className={styles.icon} src={profileIcon} alt=""/>
		</NavLink>
	);
};
