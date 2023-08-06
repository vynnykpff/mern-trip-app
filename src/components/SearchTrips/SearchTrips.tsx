import styles from "./SearchTrips.module.css";
import {LuDelete, LuSearch} from "react-icons/lu";
import {useAppDispatch} from "@/hooks/useAppDispatch.ts";
import {setSearchValue} from "@/store/slices/searchSlice.ts";

export const SearchTrips = () => {
	const dispatch = useAppDispatch();

	const onResetSearch = () => {
		dispatch(setSearchValue(""));
	}

	return (
		<form className={styles.form}>
			<button>
				<LuSearch/>
			</button>
			<input className={styles.input} onChange={e => dispatch(setSearchValue(e.target.value))}
			       placeholder="Search your trip" required={true} type="text"/>
			<button className={styles.reset} type="reset">
				<LuDelete onClick={onResetSearch}/>
			</button>
		</form>
	);
};
