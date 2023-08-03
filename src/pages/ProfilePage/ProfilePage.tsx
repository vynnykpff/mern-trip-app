import {ProfileSidebar} from "@/components/ProfileSidebar/ProfileSidebar.tsx";
import styles from "./ProfilePage.module.css";
import {Outlet} from "react-router-dom";

const ProfilePage = () => {
	return (
		<div className={styles.profileContainer}>
			<ProfileSidebar/>
			<Outlet/>
		</div>
	);
};

export default ProfilePage;
