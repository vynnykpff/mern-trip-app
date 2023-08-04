import {ProfileSidebar} from "@/components/ProfileSidebar/ProfileSidebar.tsx";
import styles from "./ProfilePage.module.css";
import {Outlet} from "react-router-dom";
import {withAuthorizedRoute} from "@/HOCs/withAuthorizedRoute.tsx";
import {useAppSelector} from "@/hooks/useAppSelector.ts";

const ProfilePage = () => {
	const {user} = useAppSelector(state => state.userSliceReducer);

	if (user === null) {
		return null;
	}

	return (
		<div className={styles.profileContainer}>
			<ProfileSidebar/>
			<Outlet/>
		</div>
	);
};

export default withAuthorizedRoute(ProfilePage);
