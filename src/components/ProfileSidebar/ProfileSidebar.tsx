import {LuArchive, LuHome, LuLogOut, LuSettings} from "react-icons/lu";
import profileLogo from "@/assets/images/profileLogo.png"
import styles from "./ProfileSidebar.module.css";
import {NavLink} from "react-router-dom";
import {profileArchive, profileHome, profileSettings} from "@/core/constants/routes.ts";

export const ProfileSidebar = () => {
	return (
		<aside className={styles.profileSidebarWrapper}>
			<div>
				<div className={styles.profileHeader}>
					<h4 className={styles.profileUserName}>Project Board</h4>
					<img className={styles.profileUserImage} src={profileLogo} alt=""/>
					<p className={styles.profileTripCount}>Count trips: 5</p>
				</div>

				<ul className={styles.profileList}>
					<NavLink to={profileHome} className={styles.profileListItem}><LuHome/>Home</NavLink>
					<NavLink to={profileArchive} className={styles.profileListItem}><LuArchive/>Archive</NavLink>
					<NavLink to={profileSettings} className={styles.profileListItem}><LuSettings/>Settings</NavLink>
				</ul>

			</div>
			<LuLogOut className={styles.logOutIcon}/>
		</aside>
	);
};
