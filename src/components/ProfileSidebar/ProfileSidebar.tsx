import {LuArchive, LuHome, LuLogOut, LuSettings} from "react-icons/lu";
import styles from "./ProfileSidebar.module.css";
import {NavLink, useNavigate} from "react-router-dom";
import {login, profileArchive, profileHome, profileSettings} from "@/core/constants/routes.ts";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {logout} from "@/store/slices/userSlice/thunks/auth/logout.ts";

export const ProfileSidebar = () => {
	const dispatch = useAppDispatch();
	const {user} = useAppSelector(state => state.userSliceReducer);
	const navigate = useNavigate();

	const onLogoutClick = () => {
		dispatch(logout.asyncThunk(null));
	}

	return (
		<aside className={styles.profileSidebarWrapper}>
			<div>
				<div className={styles.profileHeader}>
					<h4 className={styles.profileUserName}>{user!.username}</h4>
					<img className={styles.profileUserImage} src={user!.avatar} alt=""/>
					<p className={styles.profileTripCount}>Count trips: 5</p>
				</div>

				<ul className={styles.profileList}>
					<NavLink to={profileHome} className={styles.profileListItem}><LuHome/>Home</NavLink>
					<NavLink to={profileArchive} className={styles.profileListItem}><LuArchive/>Archive</NavLink>
					<NavLink to={profileSettings} className={styles.profileListItem}><LuSettings/>Settings</NavLink>
				</ul>

			</div>
			<LuLogOut onClick={onLogoutClick} className={styles.logOutIcon}/>
		</aside>
	);
};
