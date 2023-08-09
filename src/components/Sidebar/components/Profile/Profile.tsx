import styles from "./Profile.module.css";
import {useNavigate} from "react-router-dom";
import {login, profileSettings} from "@/core";
import {BiUserCircle} from "react-icons/bi";
import {useAppSelector} from "@/hooks/useAppSelector.ts";
import {MouseEvent} from "react";

export const Profile = () => {
	const navigate = useNavigate();
	const {authorized} = useAppSelector(state => state.userSliceReducer);
	const onClick = (e: MouseEvent) => {
		e.preventDefault();
		if (authorized && localStorage.getItem("accessToken")) {
			navigate(profileSettings);
		} else {
			navigate(login);
		}
	};

	return (
		<a onClick={onClick}>
			<BiUserCircle className={styles.icon}/>
		</a>
	);
};
