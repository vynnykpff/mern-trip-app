import styles from "./SearchTrips.module.css";
import {LuDelete, LuSearch} from "react-icons/lu";
import {ChangeEvent, useContext} from "react";
import {homePageContext} from "@/pages/HomePage/HomePageContext.tsx";

export const SearchTrips = () => {
	const [contextState, setContextState] = useContext(homePageContext);

	const onResetSearch = () => {
		setContextState({filterTripsValue: ""});
	}

	const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setContextState({filterTripsValue: e.target.value});
	}

	return (
		<form className={styles.form}>
			<button>
				<LuSearch/>
			</button>
			<input className={styles.input} value={contextState.filterTripsValue} onChange={onSearchChange}
			       placeholder="Search your trip" required={true} type="text"/>
			<button className={styles.reset} type="reset">
				<LuDelete onClick={onResetSearch}/>
			</button>
		</form>
	);
};
