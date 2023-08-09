import {LuHome, LuLogOut, LuSettings} from "react-icons/lu";
import styles from "./ProfileSidebar.module.css";
import {NavLink} from "react-router-dom";
import {home, profileSettings} from "@/core/constants/routes.ts";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {logout} from "@/store/slices/userSlice/thunks/auth/logout.ts";
import {useEffect} from "react";
import {getAllTrips} from "@/store/slices/tripsSlice/thunks/getAllTrips.ts";

export const ProfileSidebar = () => {
	const dispatch = useAppDispatch();
	const {user} = useAppSelector(state => state.userSliceReducer);
	const {trips} = useAppSelector(state => state.tripsSliceReducer);

	const onLogoutClick = () => {
		dispatch(logout.asyncThunk(null));
	};

	useEffect(() => {
		dispatch(getAllTrips.asyncThunk(null))
	}, [])

	return (
		<aside className={styles.profileSidebarWrapper}>
			<div>
				<div className={styles.profileHeader}>
					<h4 className={styles.profileUserName}>{user!.username}</h4>
					<img className={styles.profileUserImage} src={user!.avatar} alt=""/>
					<p className={styles.profileTripCount}>Count trips: {trips.length}</p>
				</div>

				<ul className={styles.profileList}>
					<NavLink to={home} className={styles.profileListItem}><LuHome/>Home</NavLink>
					<NavLink to={profileSettings} className={styles.profileListItem}><LuSettings/>Settings</NavLink>
				</ul>

			</div>
			<LuLogOut onClick={onLogoutClick} className={styles.logOutIcon}/>
		</aside>
	);
};
