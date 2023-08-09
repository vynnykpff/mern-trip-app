import {ProfileHeader, ProfileSettingsForm} from "@/components";
import styles from "./ProfileSettings.module.css";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {setTheme} from "@/store/slices/themeSlice.ts";
import {Theme} from "@/core";
import {BiMoon, BiSun} from "react-icons/bi";

export const ProfileSettings = () => {
	const theme = useAppSelector(state => state.themeSliceReducer);
	const dispatch = useAppDispatch();

	const onChangeTheme = () => {
		dispatch(setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK))
	}
	return (
		<section className={styles.settingsWrapper}>
			<ProfileHeader headerTitle="Edit Profile"/>
			<ProfileSettingsForm/>
			<ProfileHeader headerTitle="Customize Theme"/>
			<div className={styles.customizeList}>
				<p className={styles.themeItem} onClick={() => onChangeTheme()}>{theme === Theme.LIGHT ? <BiMoon/> : <BiSun/>}</p>
			</div>
		</section>
	);
};
