import styles from "./Profile.module.css";
import {useNavigate} from "react-router-dom";
import {profile} from "@/core";
import {BiUserCircle} from "react-icons/bi";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {useUiState} from "@/hooks/useUiState.ts";
import {MouseEvent} from "react";

export const Profile = () => {
	const navigate = useNavigate();
	const {authorized} = useAppSelector(state => state.userSliceReducer);
	const [_, setLoginModal] = useUiState('loginModal');

	const onClick = (e: MouseEvent) => {
		e.preventDefault();
		if (authorized && localStorage.getItem("accessToken")) {
			navigate(profile)
		} else {
			setLoginModal(true)
		}
	}

	return (
		<a className={styles.profileWrapper} onClick={onClick}>
			<BiUserCircle className={styles.icon}/>
		</a>
	);
};
